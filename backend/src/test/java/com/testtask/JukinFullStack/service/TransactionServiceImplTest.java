package com.testtask.JukinFullStack.service;

import com.testtask.JukinFullStack.model.BankAccount;
import com.testtask.JukinFullStack.model.Transaction;
import com.testtask.JukinFullStack.model.TransactionType;
import com.testtask.JukinFullStack.repository.TransactionRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.AdditionalAnswers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;

import static org.junit.Assert.*;
import static org.mockito.ArgumentMatchers.any;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TransactionServiceImplTest {

    @Autowired
    private TransactionService transactionService;

    @MockBean
    private TransactionRepository transactionRepositoryMock;

    @MockBean
    private BankAccountService bankAccountServiceMock;

    @Before
    public void setUp()  {
        BankAccount bankAccount = new BankAccount(1, 100);

        Mockito.when(bankAccountServiceMock.findById(bankAccount.getId())).
                thenReturn(Optional.of(bankAccount));

        Mockito.when(transactionRepositoryMock.save(any(Transaction.class))).then(AdditionalAnswers.returnsFirstArg());
    }

    @Test
    public void save() {
        BankAccount bankAccount = new BankAccount(1, 100);

        Transaction transaction = new Transaction(-50, "TestReason", bankAccount);

        Transaction saved = transactionService.save(transaction);

        assertEquals(saved.getType(), TransactionType.CREDIT);
    }
}