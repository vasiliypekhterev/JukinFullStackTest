webpackJsonp([1],{INMV:function(t,n){},NHnr:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("7+uW"),s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},s,!1,function(t){a("vGjf")},null,null).exports,o=a("/ocq"),i=a("mtWM"),c=a.n(i),u={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{class:t.transaction.type,attrs:{id:"line"}},[a("div",{staticClass:"transaction-fields"},[t._v(t._s(t.transaction.type))]),t._v(" "),a("div",{staticClass:"transaction-fields"},[t._v(t._s(t.transaction.amount))]),t._v(" "),a("div",[t._v(t._s(t.transaction.reason))])])},staticRenderFns:[]};var v={name:"Home",components:{Transaction:a("VU/8")({name:"Transaction",props:{transaction:{}}},u,!1,function(t){a("INMV")},"data-v-3ed9274c",null).exports},data:function(){return{accounts:[],transaction:{},currentAccount:null,transactionHeader:{amount:"Amount",reason:"Reason",type:"Type"},transactions:[]}},beforeCreate:function(){var t=this;c.a.get("/get-bankAccounts").then(function(n){t.accounts=n.data,t.currentAccount=t.accounts[0]})},methods:{saveTransaction:function(t){var n=this;this.errors.items.length>0?alert("Please correct the transaction fields error(s)."):(this.transaction.bankAccount=this.currentAccount,c.a.post("/save-transaction",this.transaction).then(function(t){"REJECTED"===t.data.type?alert("Transaction was rejected."):(alert("Transaction was accounted."),n.transaction={})}))},showTransactionList:function(t){this.transactions.length>0?this.transactions=[]:this.getTransactionList()},onChange:function(t){this.transactions.length>0&&this.getTransactionList()},getTransactionList:function(){var t=this;c.a.get("/get-transactions",{params:{id:this.currentAccount.id}}).then(function(n){t.transactions=n.data,0===t.transactions.length&&alert("There are no transactions on this bank account yet.")})}}},l={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("div",{staticClass:"account"},[a("label",[t._v("Current account")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.currentAccount,expression:"currentAccount"}],on:{change:[function(n){var a=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentAccount=n.target.multiple?a:a[0]},t.onChange]}},t._l(t.accounts,function(n){return a("option",{key:n.id,domProps:{value:n}},[t._v("\n        "+t._s(n.id)+"\n      ")])})),t._v(" "),a("button",{on:{click:t.showTransactionList}},[0==t.transactions.length?a("span",[t._v("Show transaction list")]):a("span",[t._v("Hide transaction list")])])]),t._v(" "),a("div",{staticClass:"transaction-data"},[a("h2",[t._v("Transaction data")]),t._v(" "),a("div",{staticClass:"fields"},[a("label",{attrs:{for:"amount"}},[t._v("Amount")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.amount,expression:"transaction.amount"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"number",name:"amount"},domProps:{value:t.transaction.amount},on:{input:function(n){n.target.composing||t.$set(t.transaction,"amount",n.target.value)}}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("amount"),expression:"errors.has('amount')"}],staticClass:"errors"},[t._v("\n        "+t._s(t.errors.first("amount"))+"\n      ")])]),t._v(" "),a("div",{staticClass:"fields"},[a("label",{attrs:{for:"reason"}},[t._v("Reason")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.reason,expression:"transaction.reason"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"text",name:"reason"},domProps:{value:t.transaction.reason},on:{input:function(n){n.target.composing||t.$set(t.transaction,"reason",n.target.value)}}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("reason"),expression:"errors.has('reason')"}],staticClass:"errors"},[t._v("\n        "+t._s(t.errors.first("reason"))+"\n      ")])]),t._v(" "),a("div",[a("button",{on:{click:t.saveTransaction}},[a("span",[t._v("Save transaction")])])])]),t._v(" "),0!=t.transactions.length?a("div",{staticClass:"transaction-list"},[a("Transaction",{attrs:{transaction:t.transactionHeader}}),t._v(" "),t._l(t.transactions,function(t){return a("div",{key:t.id},[a("Transaction",{attrs:{transaction:t}})],1)})],2):t._e()])},staticRenderFns:[]};var d=a("VU/8")(v,l,!1,function(t){a("guNS")},"data-v-ea8aede4",null).exports;e.a.use(o.a);var m=new o.a({routes:[{path:"/",name:"Home",component:d}]}),p=a("sUu7");e.a.use(p.a),e.a.config.productionTip=!1,new e.a({el:"#app",router:m,components:{App:r},template:"<App/>"})},guNS:function(t,n){},vGjf:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.bfa52cae45cd85359825.js.map