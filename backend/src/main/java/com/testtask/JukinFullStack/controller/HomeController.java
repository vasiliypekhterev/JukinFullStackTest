package com.testtask.JukinFullStack.controller;

import com.testtask.JukinFullStack.model.BankAccount;
import com.testtask.JukinFullStack.model.Transaction;
import com.testtask.JukinFullStack.service.BankAccountService;
import com.testtask.JukinFullStack.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController()
public class HomeController {

    private final BankAccountService bankAccountService;
    private final TransactionService transactionService;

    @Autowired
    public HomeController(BankAccountService bankAccountService, TransactionService transactionService) {
        this.bankAccountService = bankAccountService;
        this.transactionService = transactionService;
    }

    @RequestMapping(path = "/get-bankAccounts")
    public ResponseEntity<List<BankAccount>> getBankAccounts() {
        List<BankAccount> bankAccounts = bankAccountService.findAll();
        return new ResponseEntity<>(bankAccounts, HttpStatus.OK);
    }

    @RequestMapping(path = "/get-transactions", method = RequestMethod.GET)
    public ResponseEntity<List<Transaction>> getTransactions(@RequestParam(name = "id") int id) {
        Optional<BankAccount> bankAccount = bankAccountService.findById(id);
        if (!bankAccount.isPresent()) {
            throw new UnsupportedOperationException();
        }
        BankAccount realBankAccount = bankAccount.get();
        List<Transaction> transactions = new ArrayList<>(realBankAccount.getTransactions());
        return new ResponseEntity<>(transactions, HttpStatus.OK);
    }

    @RequestMapping(path = "/save-transaction", method = RequestMethod.POST)
    public ResponseEntity saveTransaction(@RequestBody Transaction transaction) {
        Transaction saved = transactionService.save(transaction);
        return new ResponseEntity<>(saved, HttpStatus.OK);
    }
}
