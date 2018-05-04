package com.testtask.JukinFullStack.service;

import com.testtask.JukinFullStack.model.BankAccount;
import com.testtask.JukinFullStack.model.Transaction;
import com.testtask.JukinFullStack.model.TransactionType;
import com.testtask.JukinFullStack.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Service
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRepository transactionRepository;
    private final BankAccountService bankAccountService;

    @Autowired
    public TransactionServiceImpl(TransactionRepository transactionRepository,
                                  BankAccountService bankAccountService) {
        this.bankAccountService = bankAccountService;
        this.transactionRepository = transactionRepository;
    }

    @Override
    public Transaction save(Transaction transaction) {
        Optional<BankAccount> bankAccount = bankAccountService.findById(transaction.getBankAccount().getId());
        if (!bankAccount.isPresent()) {
            throw new UnsupportedOperationException();
        }

        BankAccount realBankAccount = bankAccount.get();
        TransactionType type = GetTransactionType(transaction.getAmount(), realBankAccount.getBalance());
        if (type != TransactionType.REJECTED) {
            realBankAccount.setBalance(realBankAccount.getBalance() + transaction.getAmount());
        }
        transaction.setType(type);
        return transactionRepository.save(transaction);
    }

    private TransactionType GetTransactionType(double amount, double balance) {
        if (balance + amount < 0) {
            return TransactionType.REJECTED;
        }

        if (amount >= 0) {
            return TransactionType.DEBIT;
        }

        return TransactionType.CREDIT;
    }
}
