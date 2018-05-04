package com.testtask.JukinFullStack.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Table
@Entity
public class BankAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private double balance;

    @JsonIgnoreProperties("bankAccount")
    @OneToMany(mappedBy = "bankAccount")
    @OrderBy("savedAt DESC")
    private List<Transaction> transactions;

    public BankAccount(int id, double balance) {
        this.id = id;
        this.balance = balance;
    }

    public BankAccount() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public List<Transaction> getTransactions() {
        return transactions;
    }

    public void setTransactions(List<Transaction> transactions) {
        this.transactions = transactions;
    }
}
