package com.testtask.JukinFullStack.repository;

import com.testtask.JukinFullStack.model.BankAccount;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BankAccountRepository extends PagingAndSortingRepository<BankAccount, Integer> {
}
