webpackJsonp([1],{NHnr:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("7+uW"),o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},o,!1,function(t){a("vGjf")},null,null).exports,c=a("/ocq"),s=a("mtWM"),i=a.n(s),u={name:"Home",data:function(){return{transaction:{},accounts:[],currentAccount:null,allTransactions:[]}},created:function(){var t=this;i.a.get("get-bankAccounts").then(function(n){t.accounts=n.data}),this.currentAccount=this.accounts[0]},methods:{saveTransaction:function(t){this.transaction.bankAccount=this.currentAccount,i.a.post("save-transaction",this.transaction).then(function(t){t.data.type==REJECTED&&alert("Transaction was rejected")})}}},l={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"home"},[a("div",{staticClass:"transaction-data"},[a("h1",[t._v("Transaction data")]),t._v(" "),a("label",{staticClass:"labels"},[t._v("Amount: ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.amount,expression:"transaction.amount"}],domProps:{value:t.transaction.amount},on:{input:function(n){n.target.composing||t.$set(t.transaction,"amount",n.target.value)}}}),t._v(" "),a("label",{staticClass:"labels"},[t._v("Account: ")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.currentAccount,expression:"currentAccount"}],on:{change:function(n){var a=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentAccount=n.target.multiple?a:a[0]}}},t._l(t.accounts,function(n){return a("option",{domProps:{value:n}},[t._v("\n              "+t._s(n.id)+"\n            ")])})),t._v(" "),a("button",{on:{click:t.saveTransaction}},[t._v("\n          Save transaction\n    ")]),t._v(" "),a("label",{staticClass:"labels"},[t._v("Description")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.transaction.reason,expression:"transaction.reason"}],domProps:{value:t.transaction.reason},on:{input:function(n){n.target.composing||t.$set(t.transaction,"reason",n.target.value)}}})]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h2",[this._v("Transaction list")])])}]};var v=a("VU/8")(u,l,!1,function(t){a("kGGG")},"data-v-296025f6",null).exports;e.a.use(c.a);var p=new c.a({routes:[{path:"/",name:"Home",component:v}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:p,components:{App:r},template:"<App/>"})},kGGG:function(t,n){},vGjf:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.5bc3ff6f0c53955815f1.js.map