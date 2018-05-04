package com.testtask.JukinFullStack.service;

import com.testtask.JukinFullStack.model.BankAccount;

import java.util.List;
import java.util.Optional;

public interface BankAccountService {

    Optional<BankAccount> findById(int id);
    List<BankAccount> findAll();
}
