webpackJsonp([1],{NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("7+uW"),r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},r,!1,function(t){n("vGjf")},null,null).exports,o=n("/ocq"),i=n("mtWM"),c=n.n(i),u={name:"Home",data:function(){return{accounts:[],transaction:{},currentAccount:null,transactions:[]}},beforeCreate:function(){var t=this;c.a.get("/get-bankAccounts").then(function(a){t.accounts=a.data,t.currentAccount=t.accounts[0]})},methods:{saveTransaction:function(t){var a=this;this.transaction.bankAccount=this.currentAccount,c.a.post("/save-transaction",this.transaction).then(function(t){"REJECTED"==t.data.type?alert("Transaction was rejected"):(alert("Transaction was accounted"),a.transaction={})})},showTransactionList:function(t){var a=this;this.transactions.length>0?this.transactions=[]:c.a.get("/get-transactions",{params:{id:this.currentAccount.id}}).then(function(t){a.transactions=t.data})}}},v={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"home"},[n("div",{staticClass:"border"},[n("label",[t._v("Current account")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.currentAccount,expression:"currentAccount"}],on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentAccount=a.target.multiple?n:n[0]}}},t._l(t.accounts,function(a){return n("option",{domProps:{value:a}},[t._v("\n          "+t._s(a.id)+"\n        ")])}))]),t._v(" "),n("div",{staticClass:"transaction-data",attrs:{class:"transaction-data"}},[n("h2",[t._v("Transaction data")]),t._v(" "),n("div",[n("label",{attrs:{for:"amount"}},[t._v("Amount")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.amount,expression:"transaction.amount"},{name:"validate",rawName:"v-validate",value:t.required,expression:"required"}],attrs:{type:"number",name:"amount"},domProps:{value:t.transaction.amount},on:{input:function(a){a.target.composing||t.$set(t.transaction,"amount",a.target.value)}}}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("amount"),expression:"errors.has('amount')"}]},[t._v(t._s(t.errors.first("amount")))])]),t._v(" "),n("div",[n("label",{attrs:{for:"reason"}},[t._v("Reason")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.reason,expression:"transaction.reason"},{name:"validate",rawName:"v-validate",value:t.required,expression:"required"}],attrs:{type:"text",name:"reason"},domProps:{value:t.transaction.reason},on:{input:function(a){a.target.composing||t.$set(t.transaction,"reason",a.target.value)}}}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("reason"),expression:"errors.has('reason')"}]},[t._v(t._s(t.errors.first("reason")))])]),t._v(" "),n("div",[n("button",{on:{click:t.saveTransaction}},[t._v("\n            Save transaction\n      ")])])]),t._v(" "),n("button",{on:{click:t.showTransactionList}},[0==t.transactions.length?n("h2",[t._v("Show transaction list")]):n("h2",[t._v("Hide transaction list")])]),t._v(" "),0!=t.transactions.length?n("div",{staticClass:"border",attrs:{class:"border"}},[n("ul",t._l(t.transactions,function(a){return n("li",{class:a.type},[t._v("\n          "+t._s(a.amount)+"\n          "+t._s(a.reason)+"\n          "+t._s(a.type)+"\n      ")])}))]):t._e()])},staticRenderFns:[]};var l=n("VU/8")(u,v,!1,function(t){n("dtga")},"data-v-8ff3c47e",null).exports;e.a.use(o.a);var d=new o.a({routes:[{path:"/",name:"Home",component:l}]}),m=n("sUu7");e.a.use(m.a),e.a.config.productionTip=!1,new e.a({el:"#app",router:d,components:{App:s},template:"<App/>"})},dtga:function(t,a){},vGjf:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.fa33ead4831810b0ef07.js.map