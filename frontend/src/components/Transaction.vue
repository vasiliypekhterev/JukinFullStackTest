<template>
  <div id="line" :class="transaction.type">
    <div class="transaction-fields">{{transaction.type}}</div>
    <div class="transaction-fields">{{transaction.amount}}</div>
    <div>{{transaction.reason}}</div>
  </div>
</template>

<script>
export default {
  name: 'Transaction',
  props: {
    transaction: {}
  }
}
</script>

<style scoped>
  #line{
    border: solid 1px #000000;
    height: 20px;
    margin: 2px;
  }

  .transaction-fields{
    width: 20%;
    float: left;
  }

  .REJECTED {
    background : lightgray;
  }

  .DEBIT{
    background: lightgreen;
  }

  .CREDIT{
    background: lightpink;
  }

</style>
