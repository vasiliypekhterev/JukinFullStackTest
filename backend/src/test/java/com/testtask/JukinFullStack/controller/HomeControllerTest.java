package com.testtask.JukinFullStack.controller;

import com.testtask.JukinFullStack.model.BankAccount;
import com.testtask.JukinFullStack.service.BankAccountService;
import com.testtask.JukinFullStack.service.TransactionService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.Collections;
import java.util.List;

@RunWith(SpringRunner.class)
@WebMvcTest(HomeController.class)
public class HomeControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private BankAccountService bankAccountServiceMock;

    @MockBean
    private TransactionService transactionServiceMock;

    @Test
    public void getBankAccounts() throws Exception {
        BankAccount bankAccount = new BankAccount(1, 100);

        List<BankAccount> allBankAccounts = Collections.singletonList(bankAccount);

        Mockito.when(bankAccountServiceMock.findAll()).thenReturn(allBankAccounts);

        mvc.perform(get("/form"));

        mvc.perform(get("/get-bankAccounts")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].balance", is(bankAccount.getBalance())));
    }
}