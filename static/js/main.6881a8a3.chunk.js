(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(47),l=a.n(r),s=(a(58),a(48)),o=a(3),i=(a(59),a(49)),m=a.n(i),u=a(50),d=a.n(u),p=a(9),E=Object(n.createContext)(),_=function(e){var t=e.reducer,a=e.initialState,r=e.children;return c.a.createElement(E.Provider,{value:Object(n.useReducer)(t,a)},r)},h=function(){return Object(n.useContext)(E)},g=a(30),f=a.n(g),b=f.a.initializeApp({apiKey:"AIzaSyDc_MfoOUh-WnCC1cIHzlgC9VVOpTQipc0",authDomain:"clone-792ac.firebaseapp.com",databaseURL:"https://clone-792ac.firebaseio.com",projectId:"clone-792ac",storageBucket:"clone-792ac.appspot.com",messagingSenderId:"248672385971",appId:"1:248672385971:web:0c2e29f6c5d65ccb7329c6",measurementId:"G-NDXQ2EMGC6"}).firestore(),v=f.a.auth();var N=function(){var e=h(),t=Object(o.a)(e,2),a=t[0],n=a.basket,r=a.user;return t[1],c.a.createElement("div",{className:"header"},c.a.createElement(p.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG25.png",alt:""})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{className:"header__searchInput",type:"text"}),c.a.createElement(m.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(p.b,{to:!r&&"/login"},c.a.createElement("div",{onClick:function(){r&&v.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Hello ",r?r.email:"Guest"),c.a.createElement("span",{className:"header__optionLineTwo"},r?"Sign Out":"Sign In"))),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Return"),c.a.createElement("span",{className:"header__optionLineTwo"},"Order")),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your"),c.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),c.a.createElement(p.b,{to:"/checkout"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(d.a,null),c.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===n||void 0===n?void 0:n.length)))))};a(75),a(76);var O=function(e){var t=e.id,a=e.title,n=e.image,r=e.price,l=e.rating,s=h(),i=Object(o.a)(s,2),m=(i[0].basket,i[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,a),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"product__rating"},Array(l).fill().map((function(e,t){return c.a.createElement("p",null,"\u2b50")})))),c.a.createElement("img",{src:n,alt:"The Lean startup"}),c.a.createElement("button",{className:"product__basket",onClick:function(){m({type:"ADD_TO_BASKET",item:{id:t,title:a,image:n,price:r,rating:l}})}},"Add to basket"))};var k=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__container"},c.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:"banner section"}),c.a.createElement("div",{className:"home__row"},c.a.createElement(O,{title:"The Lean Startup",price:29.99,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5}),c.a.createElement(O,{title:"Vacum Cleaner",price:29.99,image:"https://img.gkbcdn.com/s3/p/2019-12-02/Philips-Bagless-Vacuum-Cleaner-Red-890358-.jpg",rating:4})),c.a.createElement("div",{className:"home__row"},c.a.createElement(O,{title:"Godmans Wireless Headphones",price:9.99,image:"https://cdn.bmstores.co.uk/images/hpcProductImage/imgSource/330054-goodmans-headphones-rose-gold.jpg",rating:3}),c.a.createElement(O,{title:"Apple Watch Series 5",price:199.99,image:"https://www.stuff.tv/sites/stuff.tv/files/brands/applewatch-apps.png",rating:5}),c.a.createElement(O,{title:"Samsung TV Plus",price:399.99,image:"https://images-na.ssl-images-amazon.com/images/I/81V%2BhqDbomL._SX355_.jpg",rating:5})),c.a.createElement("div",{className:"home__row"},c.a.createElement(O,{title:"Why I no longer talk to white people about race",price:9.99,image:"https://4c448342d6996fb20913-fd1f9dc15ff616aa7fa94219cb721c9c.ssl.cf3.rackcdn.com/17/3d/416522_5f5eb7de6fdd4931ab82c97f41fcd84e.jpg",rating:5}))))};a(77),a(78),a(79);var y=function(e){var t=e.id,a=e.image,n=e.title,r=e.price,l=e.rating,s=h(),i=Object(o.a)(s,2),m=(i[0].basket,i[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{className:"checkoutProduct__image",src:a,alt:""}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},n),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("small",null,"\xa3"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e,t){return c.a.createElement("p",null,"\u2b50")}))),c.a.createElement("button",{className:"checkoutProduct__button",onClick:function(){m({type:"REMOVE_FROM_BASKET",id:t})}},"Remove from basket")))},j=(a(80),a(21)),S=a.n(j),w=a(35),T=a(14),C=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},P=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(T.a)(Object(T.a)({},e),{},{basket:[].concat(Object(w.a)(e.basket),[t.item])});case"EMPTY_BASKET":case"EMPTY_BASKET":return Object(T.a)(Object(T.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var a=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(w.a)(e.basket);return a>=0?n.splice(a,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(T.a)(Object(T.a)({},e),{},{basket:n});case"SET_USER":return Object(T.a)(Object(T.a)({},e),{},{user:t.user});default:return e}},A=a(4);var B=function(){var e=Object(A.f)(),t=h(),a=Object(o.a)(t,2),n=a[0].basket;return a[1],c.a.createElement("div",{className:"subtotal"},c.a.createElement(S.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",n.length," items): ",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"}),"This order contains a gift"))},decimalScale:2,value:C(n),displayType:"text",thousandSeparator:!0,prefix:"\xa3"}),c.a.createElement("button",{onClick:function(t){return e.push("/payment")}},"Proceed to checkout"))};var x=function(){var e=h(),t=Object(o.a)(e,2),a=t[0],n=a.basket,r=a.user;return t[1],c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__ad",src:"https://328897-1008310-2-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/Amazon-Banner-Ad-Example-1-1.jpg",alt:"checkout add"}),c.a.createElement("div",null,c.a.createElement("h3",null,"Hello, ",null===r||void 0===r?void 0:r.email),c.a.createElement("h2",{className:"checkout__title"},"Your Shopping Basket"),n.map((function(e){return c.a.createElement(y,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"checkout__right"},c.a.createElement(B,null)))};a(82);var I=function(){var e=Object(A.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),m=i[0],u=i[1];return c.a.createElement("div",{className:"login"},c.a.createElement(p.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:"http://www.asociacionjuanantoniocebrian.com/wp-content/themes/fundacioncebrian/img/logo-amazon.png",alt:""})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign-in"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password",value:m,onChange:function(e){return u(e.target.value)}}),c.a.createElement("button",{onClick:function(t){t.preventDefault(),v.signInWithEmailAndPassword(r,m).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login__signInButton"},"Sign In"),c.a.createElement("p",null,"By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),c.a.createElement("button",{onClick:function(t){t.preventDefault(),v.createUserWithEmailAndPassword(r,m).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account"))))},L=a(23),R=a.n(L),z=a(33),D=(a(84),a(20)),H=a(34),G=a.n(H),M=(G.a.create({baseURL:"http://localhost:5001/clone-792ac/us-central1/api"}),G.a);var K=function(){var e=h(),t=Object(o.a)(e,2),a=t[0],r=a.basket,l=a.user,s=t[1],i=Object(A.f)(),m=Object(D.useStripe)(),u=Object(D.useElements)(),d=Object(n.useState)(!1),E=Object(o.a)(d,2),_=E[0],g=E[1],f=Object(n.useState)(""),v=Object(o.a)(f,2),N=v[0],O=v[1],k=Object(n.useState)(null),j=Object(o.a)(k,2),w=j[0],T=j[1],P=Object(n.useState)(!0),B=Object(o.a)(P,2),x=B[0],I=B[1],L=Object(n.useState)(!0),H=Object(o.a)(L,2),G=H[0],K=H[1];Object(n.useEffect)((function(){(function(){var e=Object(z.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M({method:"post",url:"/payments/create?total=".concat(100*C(r))});case 2:t=e.sent,K(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),console.log("THE SECRET IS >>>",G),console.log("\ud83d\udc71",l);var U=function(){var e=Object(z.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),O(!0),e.next=4,m.confirmCardPayment(G,{payment_method:{card:u.getElement(D.CardElement)}}).then((function(e){var t=e.paymentIntent;b.collection("users").doc(null===l||void 0===l?void 0:l.uid).collection("orders").doc(t.id).set({basket:r,amount:t.amount,created:t.created}),g(!0),T(null),O(!1),s({type:"EMPTY_BASKET"}),i.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"payment"},c.a.createElement("div",{className:"payment__container"},c.a.createElement("h1",null,"Checkout (",c.a.createElement(p.b,{to:"/checkout"},null===r||void 0===r?void 0:r.length," items"),")"),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Delivery Address")),c.a.createElement("div",{className:"payment__address"},c.a.createElement("p",null,null===l||void 0===l?void 0:l.email),c.a.createElement("p",null,"123 React Lane"),c.a.createElement("p",null,"Los Angeles, CA"))),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Review items and delivery")),c.a.createElement("div",{className:"payment__items"},r.map((function(e){return c.a.createElement(y,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Payment Method")),c.a.createElement("div",{className:"payment__details"},c.a.createElement("form",{onSubmit:U},c.a.createElement(D.CardElement,{onChange:function(e){I(e.empty),T(e.error?e.error.message:"")}}),c.a.createElement("div",{className:"payment__priceContainer"},c.a.createElement(S.a,{renderText:function(e){return c.a.createElement("h3",null,"Order Total: ",e)},decimalScale:2,value:C(r),displayType:"text",thousandSeparator:!0,prefix:"$"}),c.a.createElement(p.b,{to:"/orders"},c.a.createElement("button",{className:"payment__button",disabled:N||x||_},c.a.createElement("span",null,N?c.a.createElement("p",null,"Processing"):"Buy Now")))),w&&c.a.createElement("div",null,w))))))},U=a(51);a(101);var V=function(){var e=h(),t=Object(o.a)(e,2),a=t[0],r=a.basket,l=a.user,s=(t[1],Object(n.useState)([])),i=Object(o.a)(s,2),m=(i[0],i[1]);return Object(A.f)(),Object(n.useEffect)((function(){l?b.collection("users").doc(null===l||void 0===l?void 0:l.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return m(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):m([])}),[l]),c.a.createElement("div",{className:"orders"},c.a.createElement("h1",{className:"orders__confiramtion"},"Order confirmation"),c.a.createElement("p",null,"Order #",c.a.createElement("a",null,"123-345-678")),c.a.createElement("h1",{className:"orders__total"},"Hello,"),c.a.createElement("p",null,"Thank you for shopping with us. We confirm that your items have been shipped. Your order derails will be sent to the email you have provided"),c.a.createElement("div",{className:"ordesrs__adress"},c.a.createElement("p",{className:"orders__adressParagraph"},"Your estimated delivery date is:"),c.a.createElement("p",{className:"orders__adressBlackParagraph"},"Next Tuestday"),c.a.createElement("p",{className:"orders__adressParagraph"},"Your shipping speed"),c.a.createElement("p",{className:"orders__adressBlackParagraph"},"Standard"),c.a.createElement("button",null,"Order Details")),c.a.createElement("h1",{className:"orders__total"},"Payment sumary"),c.a.createElement("hr",null),c.a.createElement("br",null),c.a.createElement("p",null,"Order #",c.a.createElement("a",null,"123-345-678")),c.a.createElement(S.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Total items: ",r.length," items"),c.a.createElement("p",null,"Shipping & Handling: Free"),c.a.createElement("p",null,"Order Total: ",c.a.createElement("strong",null,e)))},decimalScale:2,value:C(r),displayType:"text",thousandSeparator:!0,prefix:"\xa3"}),c.a.createElement("br",null),c.a.createElement("hr",null),c.a.createElement("div",{className:"orders__button"},c.a.createElement(p.b,{to:"/"},c.a.createElement("button",{className:"orders__back"},"Go back to Home"))))},W=Object(U.a)("pk_test_51HT9MOB7h7HPQOigxS3sLk3vGZCXDeGAPwoWR6VNzbQFP66ZYIk2deSKz9gnrPZk2E3yLzi91ZirPK7zt031aHcX00jbJ9BlHC");var Y=function(){var e=h(),t=Object(o.a)(e,2);Object(s.a)(t[0]);var a=t[1];return Object(n.useEffect)((function(){v.onAuthStateChanged((function(e){console.log("THE USER IS >>>",e),a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),c.a.createElement(p.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(A.c,null,c.a.createElement(A.a,{path:"/orders"},c.a.createElement(N,null),c.a.createElement(V,null)),c.a.createElement(A.a,{path:"/login"},c.a.createElement(I,null)),c.a.createElement(A.a,{path:"/checkout"},c.a.createElement(N,null),c.a.createElement(x,null)),c.a.createElement(A.a,{path:"/payment"},c.a.createElement(N,null),c.a.createElement(D.Elements,{stripe:W},c.a.createElement(K,null))),c.a.createElement(A.a,{path:"/"},c.a.createElement(N,null),c.a.createElement(k,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,{initialState:{basket:[],user:null},reducer:P},c.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){e.exports=a(103)},58:function(e,t,a){},59:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.6881a8a3.chunk.js.map