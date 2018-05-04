package com.testtask.JukinFullStack.service;

import com.testtask.JukinFullStack.model.BankAccount;
import com.testtask.JukinFullStack.repository.BankAccountRepository;
import org.junit.*;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BankAccountServiceImplTest {

    @Autowired
    private BankAccountService bankAccountService;

    @MockBean
    private BankAccountRepository bankAccountRepositoryMock;

    @Before
    public void setUp() {
        BankAccount bankAccount = new BankAccount(1, 100);

        Mockito.when(bankAccountRepositoryMock.findById(bankAccount.getId())).
                thenReturn(Optional.of(bankAccount));

        BankAccount bankAccount2 = new BankAccount(2, 200);

        List<BankAccount> list = new ArrayList<>();
        list.add(bankAccount);
        list.add(bankAccount2);

        Mockito.when(bankAccountRepositoryMock.findAll()).
                thenReturn(list);
    }

    @After
    public void tearDown() {
    }

    @Test
    public void findById() {
        int id = 1;
        Optional<BankAccount> found = bankAccountService.findById(id);

        assertTrue(found.isPresent());
        assertEquals(100, found.get().getBalance(), 0.01);
    }

    @Test
    public void findAll() {
        List<BankAccount> found = bankAccountService.findAll();

        assertEquals(2, found.size());
    }
}