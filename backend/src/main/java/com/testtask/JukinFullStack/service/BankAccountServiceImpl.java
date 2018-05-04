package com.testtask.JukinFullStack.service;

import com.testtask.JukinFullStack.model.BankAccount;
import com.testtask.JukinFullStack.repository.BankAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class BankAccountServiceImpl implements BankAccountService {

    private final BankAccountRepository bankAccountRepository;

    @Autowired
    public BankAccountServiceImpl(BankAccountRepository bankAccountRepository) {
        this.bankAccountRepository = bankAccountRepository;
    }

    @Override
    public Optional<BankAccount> findById(int id) {
        return bankAccountRepository.findById(id);
    }

    @Override
    public List<BankAccount> findAll() {
        Iterable<BankAccount> bankAccounts = bankAccountRepository.findAll();
        List<BankAccount> bankAccountList = new ArrayList<>();
        bankAccounts.forEach(bankAccountList::add);
        return bankAccountList;
    }
}
