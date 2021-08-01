(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{19:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a,o,r,c,i,l=t(1),d=t.n(l),s=t(9),b=t.n(s),u=(t(19),t(20),t(11)),p=t(4),j=t(26),m=t(2),x=t(3),h=x.a.div(a||(a=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 15px;\n  margin-bottom: 15px;\n\n\n  width: 500px;\n  padding: 10px;\n\n  border: 2px solid red;\n  border-radius: 20px;\n"]))),g=t(0),f=function(e){var n=e.children;return Object(g.jsx)(h,{children:n})},O=t(8),w=t(12),v=x.a.label(o||(o=Object(m.a)(["\ndisplay: block;\n  margin-bottom: 10px;\nfont-size: 20px;\nfont-weight: 700;\ncolor: black;\n"]))),y=x.a.input(r||(r=Object(m.a)(["\nwidth: 250px;\nmargin-bottom: 15px;\npadding: 10px;\nborder: 2px solid green;\nborder-radius: 10px;\n"]))),k=["id","type","label","name","placeholder","value","onChange","title","required"],C=function(e){var n=e.id,t=e.type,a=e.label,o=e.name,r=e.placeholder,c=e.value,i=e.onChange,l=e.title,d=e.required,s=Object(w.a)(e,k);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(v,{htmlFor:n,children:a}),Object(g.jsx)(y,Object(O.a)(Object(O.a)({id:n,type:t,name:o},s),{},{placeholder:r,value:c,onChange:i,title:l,required:d}))]})};C.defaultProps={type:"text",placeholder:"",title:"",required:!1};var z,S,q,A,B,J,L=x.a.form(c||(c=Object(m.a)(["\nmargin-bottom: 20px;\n  padding: 10px;\n  font-size: 20px;\n  font-weight: 700;\n  color: black;\n"]))),F=x.a.button(i||(i=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 15px;\n\n  font-size: 15px;\n  font-weight: 700;\n\n\n  background-color: yellow;\n  border: 2px solid green;\n  border-radius: 20px;\n"]))),N=function(e){var n=e.onSubmit,t=Object(l.useState)(""),a=Object(p.a)(t,2),o=a[0],r=a[1],c=Object(l.useState)(""),i=Object(p.a)(c,2),d=i[0],s=i[1],b=Object(l.useState)(""),u=Object(p.a)(b,2),m=u[0],x=u[1],h=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":s(a);break;case"number":x(a);break;default:return}r(Object(j.a)())};return Object(g.jsxs)(L,{onSubmit:function(e){e.preventDefault(),n({id:o,name:d,number:m}),r(""),s(""),x("")},children:[Object(g.jsx)(C,{id:Object(j.a)(),type:"text",label:"Name",name:"name",placeholder:"Jason Born",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:d,onChange:h,title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(g.jsx)(C,{id:Object(j.a)(),type:"tel",label:"Number",name:"number",placeholder:"+44-787-123-45-67",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:m,onChange:h,title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(g.jsx)(F,{type:"submit",children:"Add contact"})]})},I=x.a.ul(z||(z=Object(m.a)(["\nwidth: 100%;\n  margin-top: 10px;\n  padding: 15px;\n  font-size: 40px;\n  font-weight: 700;\n  color: black;\n"]))),R=x.a.li(S||(S=Object(m.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\n  margin-bottom: 10px;\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n"]))),Z=x.a.button(q||(q=Object(m.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\nwidth: 75px;\nmargin-left: auto;\npadding: 5px;\n\nfont-size: 15px;\nfont-weight: 500;\n\nbackground-color: turquoise;\nborder: 2px solid orangered;\nborder-radius: 5px;\n"]))),E=function(e){var n=e.contacts,t=e.onRemoveContact;return Object(g.jsx)(I,{children:n.map((function(e){var n=e.id,a=e.name,o=e.number;return Object(g.jsxs)(R,{children:[a," : ",o,Object(g.jsx)(Z,{type:"button",onClick:function(){return t(n)},children:"Remove"})]},n)}))})},M=x.a.p(A||(A=Object(m.a)(["\nmargin-top: 0;\nmargin-bottom: 0;\npadding: 10px;\nfont-size: 20px;\nfont-weight: 500;\ncolor: orange;\n"]))),P=function(e){var n=e.text;return Object(g.jsx)(M,{children:n})},Y=x.a.h1(B||(B=Object(m.a)(["\n  margin-top: 10px;\n  margin-bottom: 20px;\n  font-size: 40px;\n  font-weight: 700;\n  color: black;\n"]))),D=x.a.h2(J||(J=Object(m.a)(["\n  display: block;\n  margin-bottom: 10px;\n  font-size: 30px;\n  font-weight: 700;\n  color: black;\n"]))),T=function(){var e=window.localStorage.getItem("contacts"),n=JSON.parse(e),t=Object(l.useState)(null!==n&&void 0!==n?n:[]),a=Object(p.a)(t,2),o=a[0],r=a[1],c=Object(l.useState)(""),i=Object(p.a)(c,2),d=i[0],s=i[1];Object(l.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(o))}),[o]);var b=o.filter((function(e){return e.name.toLocaleLowerCase().includes(d.toLowerCase())}));return Object(g.jsxs)(f,{children:[Object(g.jsx)(Y,{children:"PhoneBook"}),Object(g.jsx)(D,{children:"Add contact"}),Object(g.jsx)(N,{onSubmit:function(e){o.some((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?alert("You have contact with this name, please remove old contact and create new"):r([e].concat(Object(u.a)(o)))}}),Object(g.jsx)(D,{children:"Contacts"}),b.length>0?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C,{id:Object(j.a)(),label:"Find contacts by name",placeholder:"Boris Britva",name:"search",value:d,onChange:function(e){s(e.target.value)}}),Object(g.jsx)(E,{contacts:b,onRemoveContact:function(e){r(o.filter((function(n){return n.id!==e})))}})]}):Object(g.jsx)(P,{text:"You don`t have any contacts"})]})};b.a.render(Object(g.jsx)(d.a.StrictMode,{children:Object(g.jsx)(T,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.07a53710.chunk.js.map