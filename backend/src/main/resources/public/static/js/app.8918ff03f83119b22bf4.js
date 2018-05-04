webpackJsonp([1],{MCKm:function(t,n){},NHnr:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("7+uW"),r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App"},r,!1,function(t){a("vGjf")},null,null).exports,o=a("/ocq"),i=a("mtWM"),c=a.n(i),u={name:"Home",data:function(){return{accounts:[],transaction:{},currentAccount:null,transactions:[]}},beforeCreate:function(){var t=this;c.a.get("/get-bankAccounts").then(function(n){t.accounts=n.data,t.currentAccount=t.accounts[0]})},methods:{saveTransaction:function(t){var n=this;this.errors.items.length>0?alert("Please correct the following error(s):"):(this.transaction.bankAccount=this.currentAccount,c.a.post("/save-transaction",this.transaction).then(function(t){"REJECTED"==t.data.type?alert("Transaction was rejected"):(alert("Transaction was accounted"),n.transaction={})}))},showTransactionList:function(t){var n=this;this.transactions.length>0?this.transactions=[]:c.a.get("/get-transactions",{params:{id:this.currentAccount.id}}).then(function(t){n.transactions=t.data})},onChange:function(t){alert("Account was changed")}}},l={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"home"},[a("div",{staticClass:"border"},[a("label",[t._v("Current account")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.currentAccount,expression:"currentAccount"}],on:{change:[function(n){var a=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentAccount=n.target.multiple?a:a[0]},t.onChange]}},t._l(t.accounts,function(n){return a("option",{domProps:{value:n}},[t._v("\n          "+t._s(n.id)+"\n        ")])}))]),t._v(" "),a("div",{staticClass:"transaction-data",attrs:{class:"transaction-data"}},[a("h2",[t._v("Transaction data")]),t._v(" "),a("div",[a("label",{attrs:{for:"amount"}},[t._v("Amount")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.amount,expression:"transaction.amount"},{name:"validate",rawName:"v-validate.initial",value:"required",expression:"'required'",modifiers:{initial:!0}}],attrs:{type:"number",name:"amount"},domProps:{value:t.transaction.amount},on:{input:function(n){n.target.composing||t.$set(t.transaction,"amount",n.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("amount"),expression:"errors.has('amount')"}]},[t._v(t._s(t.errors.first("amount")))])]),t._v(" "),a("div",[a("label",{attrs:{for:"reason"}},[t._v("Reason")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.reason,expression:"transaction.reason"},{name:"validate",rawName:"v-validate.initial",value:"required",expression:"'required'",modifiers:{initial:!0}}],attrs:{type:"text",name:"reason"},domProps:{value:t.transaction.reason},on:{input:function(n){n.target.composing||t.$set(t.transaction,"reason",n.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("reason"),expression:"errors.has('reason')"}]},[t._v(t._s(t.errors.first("reason")))])]),t._v(" "),a("div",[a("button",{on:{click:t.saveTransaction}},[t._v("\n            Save transaction\n      ")])])]),t._v(" "),a("button",{on:{click:t.showTransactionList}},[0==t.transactions.length?a("h2",[t._v("Show transaction list")]):a("h2",[t._v("Hide transaction list")])]),t._v(" "),0!=t.transactions.length?a("div",{staticClass:"border",attrs:{class:"border"}},[a("ul",t._l(t.transactions,function(n){return a("li",{class:n.type},[t._v("\n          "+t._s(n.amount)+"\n          "+t._s(n.reason)+"\n          "+t._s(n.type)+"\n      ")])}))]):t._e()])},staticRenderFns:[]};var v=a("VU/8")(u,l,!1,function(t){a("MCKm")},"data-v-18ff60a6",null).exports;e.a.use(o.a);var d=new o.a({routes:[{path:"/",name:"Home",component:v}]}),m=a("sUu7");e.a.use(m.a),e.a.config.productionTip=!1,new e.a({el:"#app",router:d,components:{App:s},template:"<App/>"})},vGjf:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.8918ff03f83119b22bf4.js.map