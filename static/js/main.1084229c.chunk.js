(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),s=n.n(r),a=n(3),o=n.n(a),l=n(4),i=n(5),c=n(7),u=n(6),h=(n(13),n(1)),b=function(t){var e=t.goodsFromServer,n=t.isReversed,r=t.sortAlphabetically,a=t.sortByLength,o=t.isResetted,l=Object(h.a)(e);return r&&l.sort(),a&&l.sort((function(t,e){return e.length-t.length})),n&&l.reverse(),o&&(l=Object(h.a)(e)),s.a.createElement("ul",null,l.map((function(t){return s.a.createElement("li",{key:t},t)})))},p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={goodsFromServer:[].concat(p),goodsVisible:!1,isReversed:!1,sortAlphabetically:!1,sortByLength:!1,isResetted:!1},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortAlphabetically=function(){t.setState((function(t){return{sortAlphabetically:!t.sortAlphabetically}}))},t.sortByLength=function(){t.setState((function(t){return{sortByLength:!t.sortByLength}}))},t.start=function(){return t.setState({goodsVisible:!0})},t.reset=function(){return t.setState((function(t){return{isResetted:!t.isResetted}}))},t}return Object(i.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Goods"),p.length,s.a.createElement("div",null,s.a.createElement("button",{type:"button",onClick:this.start,className:this.state.goodsVisible?"hiddenBtn":""},"Start"),s.a.createElement("button",{type:"button",onClick:this.reverse},"Reverse"),s.a.createElement("button",{type:"button",onClick:this.sortAlphabetically},"Sort alphabetically"),s.a.createElement("button",{type:"button",onClick:this.reset},"Reset"),s.a.createElement("button",{type:"button",onClick:this.sortByLength},"Sort by length"),this.state.goodsVisible?s.a.createElement(b,this.state):""))}}]),n}(s.a.Component);o.a.render(s.a.createElement(d,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.1084229c.chunk.js.map