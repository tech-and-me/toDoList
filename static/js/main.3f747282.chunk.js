(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(5),d=n.n(o),s=n(6),r=n(7),i=n(2),h=n(9),l=n(8),u=(n(4),n(0)),p=function(e){return Object(u.jsxs)("div",{className:"todo-item",children:[Object(u.jsx)("input",{type:"checkbox",checked:e.task.completed,onChange:function(){return e.handleChange(e.task.id)}}),Object(u.jsx)("p",{children:e.task.text})]})},j=[{id:1,text:"Take out the trash",completed:!0},{id:2,text:"Grocery shopping",completed:!1},{id:3,text:"Clean gecko tank",completed:!1},{id:4,text:"Mow lawn",completed:!0},{id:5,text:"Catch up on Arrested Development",completed:!1}],k=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={todos:j},e.handleChange=e.handleChange.bind(Object(i.a)(e)),e}return Object(r.a)(n,[{key:"handleChange",value:function(e){this.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))}}))}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return Object(u.jsx)(p,{task:t,handleChange:e.handleChange},t.id)}));return Object(u.jsx)("div",{className:"todo-list",children:t})}}]),n}(c.a.Component);d.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))},4:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.3f747282.chunk.js.map