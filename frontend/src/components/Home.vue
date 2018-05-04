<template>
  <div>
    <div class="account">
      <label>Current account</label>
      <select v-model="currentAccount" v-on:change="onChange">
        <option v-for="account in accounts" :key="account.id" :value="account">
          {{ account.id }}
        </option>
      </select>
      <button v-on:click="showTransactionList">
        <span v-if="transactions.length == 0">Show transaction list</span>
        <span v-else>Hide transaction list</span>
      </button>
    </div>
    <div class="transaction-data">
      <h2>Transaction data</h2>
      <div class="fields">
        <label for="amount">Amount</label>
        <input type="number" v-model="transaction.amount"
          v-validate="'required'" name="amount"/>
        <div class="errors" v-show="errors.has('amount')">
          {{ errors.first('amount') }}
        </div>
      </div>
      <div class="fields">
        <label for="reason">Reason</label>
        <input type="text" v-model="transaction.reason"
          v-validate="'required'" name="reason"/>
        <div class="errors" v-show="errors.has('reason')">
          {{ errors.first('reason') }}
        </div>
      </div>
      <div>
        <button v-on:click="saveTransaction">
          <span>Save transaction</span>
        </button>
      </div>
    </div>
    <div class="transaction-list" v-if="transactions.length != 0">
        <Transaction :transaction=transactionHeader></Transaction>
        <div v-for="item in transactions" :key="item.id">
          <Transaction :transaction="item"></Transaction>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Transaction from './Transaction'

export default {
  name: 'Home',
  components: {
    Transaction
  },
  data () {
    return {
      accounts: [],
      transaction: {},
      currentAccount: null,
      transactionHeader: {amount: 'Amount', reason: 'Reason', type: 'Type'},
      transactions: []
    }
  },
  beforeCreate () {
    axios.get('/get-bankAccounts')
      .then((response) => {
        this.accounts = response.data
        this.currentAccount = this.accounts[0]
      })
  },
  methods: {
    saveTransaction: function (event) {
      if (this.errors.items.length > 0) {
        alert('Please correct the transaction fields error(s).')
        return
      }
      this.transaction.bankAccount = this.currentAccount
      axios.post('/save-transaction', this.transaction)
        .then((response) => {
          if (response.data.type === 'REJECTED') {
            alert('Transaction was rejected.')
          } else {
            alert('Transaction was accounted.')
            this.transaction = {}
          }
        })
    },
    showTransactionList: function (event) {
      if (this.transactions.length > 0) {
        this.transactions = []
        return
      }
      this.getTransactionList()
    },
    onChange: function (event) {
      if (this.transactions.length > 0) {
        this.getTransactionList()
      }
    },
    getTransactionList: function () {
      axios.get('/get-transactions', {
        params: {
          id: this.currentAccount.id
        }
      })
        .then((response) => {
          this.transactions = response.data
          if (this.transactions.length === 0) {
            alert('There are no transactions on this bank account yet.')
          }
        })
    }
  }
}
</script>

<style scoped>
  .account{
    width: 300px;
    height: 25px;
  }

  .transaction-data{
    width: 300px;
    height: 200px;
    border: 1px solid green;
  }

  .fields{
    margin: 12px;
  }

  .errors{
    color: red;
  }

  .transaction-list{
    width: 70%;
  }
</style>
