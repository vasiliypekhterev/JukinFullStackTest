package com.testtask.JukinFullStack.repository;

import com.testtask.JukinFullStack.model.Transaction;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends PagingAndSortingRepository<Transaction, Integer> {
}
