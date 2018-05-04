package com.testtask.JukinFullStack.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Table
@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private double amount;

    @Column
    private String reason;

    @JsonIgnoreProperties("transactions")
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @ManyToOne
    @JoinColumn(name = "account_id", referencedColumnName = "id")
    private BankAccount bankAccount;

    @CreationTimestamp
    @Column
    private LocalDateTime savedAt;

    @Column
    private TransactionType type;

    public Transaction() {
    }

    public Transaction(double amount, String reason, BankAccount bankAccount) {
        this.amount = amount;
        this.reason = reason;
        this.bankAccount = bankAccount;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public BankAccount getBankAccount() {
        return bankAccount;
    }

    public void setBankAccount(BankAccount bankAccount) {
        this.bankAccount = bankAccount;
    }

    public LocalDateTime getSavedAt() {
        return savedAt;
    }

    public void setSavedAt(LocalDateTime savedAt) {
        this.savedAt = savedAt;
    }

    public TransactionType getType() {
        return type;
    }

    public void setType(TransactionType type) {
        this.type = type;
    }
}
