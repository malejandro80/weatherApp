(this.webpackJsonpwheaterapp=this.webpackJsonpwheaterapp||[]).push([[0],{15:function(e,t,s){e.exports={container:"styles_container__1J3hh",title:"styles_title__3xyHl"}},2:function(e,t,s){e.exports={content:"styles_content__RhDvw",leftSide:"styles_leftSide__18tII",title:"styles_title__99UYj",card:"styles_card__XL7wL",text:"styles_text__1Q3jh",rightSide:"styles_rightSide__25oTY",reviewsContent:"styles_reviewsContent__3i8GP",reviews:"styles_reviews__2DSFV",item:"styles_item__3VDbG",item1:"styles_item1__idG1E",item2:"styles_item2__NBdhr",item3:"styles_item3__2Lo0f",more:"styles_more__smvgW",firstCard:"styles_firstCard__2zg1F",secondCard:"styles_secondCard__1JP4F",moreButton:"styles_moreButton__30pUw"}},23:function(e,t,s){},24:function(e,t,s){},31:function(e,t,s){"use strict";s.r(t);var a=s(3),c=s.n(a),n=s(16),i=s.n(n),r=(s(23),s(24),s(4)),d=s.n(r),l=s.p+"static/media/ilustration.5d24b8f3.svg",o=s(7),j=s(0);function h(e){var t,s=e.weather;return console.log(s,"weather"),Object(j.jsxs)("div",{className:d.a.card,children:[Object(j.jsxs)("div",{className:d.a.cardContent,children:[Object(j.jsx)("div",{className:d.a.weatherIcon,children:Object(j.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(s.icon,"@2x.png"),className:d.a.icon,alt:"icon"})}),Object(j.jsxs)("div",{className:d.a.temperture,children:[Object(j.jsx)("h1",{children:s.Celcius}),Object(j.jsx)("span",{children:"\xb0C"}),Object(j.jsx)("div",{className:d.a.separator}),Object(j.jsxs)("div",{className:d.a.city,children:[Object(j.jsx)("h4",{children:s.city}),Object(j.jsx)("span",{children:s.country})]})]})]}),Object(j.jsxs)("div",{className:d.a.weatherInfo,children:[Object(j.jsxs)("span",{children:["Humidity ",s.hum,"%"]}),Object(j.jsx)("span",{children:"West"}),Object(j.jsxs)("span",{children:[null===(t=s.wind)||void 0===t?void 0:t.speed," Km/h"]})]})]})}function m(e){var t=e.otherWeathers;return Object(j.jsxs)("div",{className:d.a.section,children:[t.map((function(e){return Object(j.jsx)(h,{weather:e})})),Object(j.jsxs)("div",{className:d.a.addPlaceContent,children:[Object(j.jsx)("button",{children:"add Locations"}),Object(j.jsx)("img",{src:l,alt:""})]})]})}var p=s(6),_=s.n(p);function b(e){var t=e.weather;return Object(j.jsxs)("div",{className:_.a.item,children:[Object(j.jsx)("div",{className:_.a.icon,children:Object(j.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(t.icon,"@2x.png"),alt:"icon"})}),Object(j.jsxs)("div",{className:_.a.text,children:[Object(j.jsx)("h4",{children:t.day}),Object(j.jsx)("span",{children:t.typeWeather})]}),Object(j.jsx)("div",{className:_.a.tempertureContent,children:Object(j.jsx)("div",{className:_.a.temperture,children:Object(j.jsxs)("h4",{children:[t.Farenheit," ",Object(j.jsx)("span",{children:"F"})," /",t.celcius," ",Object(j.jsx)("span",{children:"o"})]})})})]})}function u(e){var t=e.lastestWeather;return Object(j.jsxs)("div",{className:_.a.column,children:[Object(j.jsxs)("div",{className:_.a.title,children:[Object(j.jsx)("h1",{children:"3 Days"})," ",Object(j.jsx)("h4",{children:"Forecast"})]}),Object(j.jsx)("div",{className:_.a.content,children:t.map((function(e){return Object(j.jsx)(b,{weather:e})}))})]})}var x=s(15),O=s.n(x),y=s(5);function v(){return Object(j.jsx)("div",{className:O.a.container,children:Object(j.jsxs)("div",{className:O.a.title,children:[Object(j.jsx)(o.a,{icon:y.a}),Object(j.jsx)("h4",{children:"Bogot\xe1"})]})})}var w=s(2),f=s.n(w),N=s.p+"static/media/profile1.94c27a99.png",g=s.p+"static/media/profile2.8437610a.png",C=s.p+"static/media/profile3.d3459a79.png";function W(){return Object(j.jsxs)("div",{className:f.a.content,children:[Object(j.jsxs)("div",{className:f.a.leftSide,children:[Object(j.jsxs)("div",{className:f.a.title,children:[Object(j.jsx)("h1",{children:"Place to"})," ",Object(j.jsx)("h4",{children:"Visit"})]}),Object(j.jsxs)("div",{className:f.a.card,children:[Object(j.jsx)(o.a,{icon:y.a}),Object(j.jsxs)("div",{className:f.a.text,children:[Object(j.jsx)("h4",{children:"Arab Street"}),Object(j.jsx)("h4",{children:"Singapore"})]})]})]}),Object(j.jsxs)("div",{className:f.a.rightSide,children:[Object(j.jsxs)("div",{className:f.a.reviewsContent,children:[Object(j.jsx)("span",{children:"+ Top Reviews"}),Object(j.jsxs)("div",{className:f.a.reviews,children:[Object(j.jsx)("img",{src:N,alt:"profile1",className:"".concat(f.a.item," ").concat(f.a.item1)}),Object(j.jsx)("img",{src:g,alt:"profile2",className:"".concat(f.a.item," ").concat(f.a.item2)}),Object(j.jsx)("img",{src:C,alt:"profile3",className:"".concat(f.a.item," ").concat(f.a.item3)}),Object(j.jsx)("div",{className:f.a.more,children:Object(j.jsx)("span",{children:"9+"})})]})]}),Object(j.jsxs)("div",{className:"".concat(f.a.card," ").concat(f.a.firstCard),children:[Object(j.jsx)(o.a,{icon:y.a}),Object(j.jsxs)("div",{className:f.a.text,children:[Object(j.jsx)("h4",{children:"Arab Street"}),Object(j.jsx)("h4",{children:"Singapore"})]})]}),Object(j.jsxs)("div",{className:"".concat(f.a.card," ").concat(f.a.secondCard),children:[Object(j.jsx)(o.a,{icon:y.a}),Object(j.jsxs)("div",{className:f.a.text,children:[Object(j.jsx)("h4",{children:"Arab Street"}),Object(j.jsx)("h4",{children:"Singapore"})]}),Object(j.jsx)("div",{className:f.a.moreButton,children:Object(j.jsx)("span",{children:"+"})})]})]})]})}var S=s(8),F=s.n(S);function L(e){var t=e.mainWeather;return console.log(t,"mainWeather"),Object(j.jsxs)("div",{className:F.a.widgetContent,children:[Object(j.jsxs)("div",{className:F.a.up,children:[Object(j.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(t.icon,"@2x.png"),className:F.a.icon,alt:"icon"}),Object(j.jsx)("span",{children:t.decription})]}),Object(j.jsx)("div",{className:F.a.down,children:Object(j.jsxs)("div",{className:F.a.temp,children:[Object(j.jsx)("h4",{children:t.Celcius}),Object(j.jsx)("span",{children:"\xb0C"})]})})]})}var I=s(17),P=s(18),M=s(9),B=function(e){return Math.round(9*e/5+32)},E={mainWeather:{celcius:23,Farenheit:32,icon:y.a,typeWeather:"cloudy"},lastestWeather:[{celcius:23,Farenheit:32,day:"Friday",icon:"09d",typeWeather:"Rain",type:"primary"},{celcius:24,Farenheit:34,day:"Saturday",icon:"01d",typeWeather:"clear",type:"secondary"},{celcius:23,Farenheit:31,day:"Sunday",icon:"04d",typeWeather:"Cloudy",type:"secondary"}],otherWeathers:[{Celcius:24,Farenheit:75,city:"Lyon",country:"FR",decription:"clear sky",hum:55,icon:"01n",wind:{speed:.4}}]},D=function(e,t){switch(t.type){case"mainWeather":return Object(M.a)(Object(M.a)({},e),{},{mainWeather:t.payload});case"addCountry":return Object(M.a)(Object(M.a)({},e),{},{otherWeathers:[t.payload].concat(Object(P.a)(e.otherWeathers))});default:return e}},R=function(){var e=Object(a.useReducer)(D,E),t=Object(I.a)(e,2),s=t[0],c=t[1];Object(a.useEffect)((function(){n(),i()}),[]);var n=function(){var e=new XMLHttpRequest;e.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=c882b71b657daa6d938cf0765812ccaf&units=metric"),e.addEventListener("load",(function(e){var t=JSON.parse(e.target.response),s={Farenheit:B(Math.round(t.main.temp)),Celcius:Math.round(t.main.temp),icon:t.weather[0].icon,decription:t.weather[0].description};c({type:"mainWeather",payload:s})})),e.send()},i=function(){var e=new XMLHttpRequest;e.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=c882b71b657daa6d938cf0765812ccaf&units=metric"),e.addEventListener("load",(function(e){var t=JSON.parse(e.target.response),s={Farenheit:B(Math.round(t.main.temp)),Celcius:Math.round(t.main.temp),icon:t.weather[0].icon,decription:t.weather[0].description,city:t.name,country:t.sys.country,wind:t.wind,hum:t.main.humidity};c({type:"addCountry",payload:s})})),e.send()};return Object(M.a)({},s)};function A(){var e=R(),t=e.mainWeather,s=e.lastestWeather,a=e.otherWeathers;return Object(j.jsx)("div",{className:"mainContainer",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)(L,{mainWeather:t}),Object(j.jsx)(v,{}),Object(j.jsxs)("div",{className:"gridContainer",children:[Object(j.jsx)(u,{lastestWeather:s}),Object(j.jsx)(W,{}),Object(j.jsx)(m,{otherWeathers:a})]})]})})}var H=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,32)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root")),H()},4:function(e,t,s){e.exports={section:"styles_section__3l61D",card:"styles_card__2mLwE",cardContent:"styles_cardContent__1o3QX",weatherIcon:"styles_weatherIcon__37H0p",temperture:"styles_temperture__2i__w",separator:"styles_separator__icZod",city:"styles_city__dy4Yh",weatherInfo:"styles_weatherInfo__30opf",addPlaceContent:"styles_addPlaceContent__2w_9e"}},6:function(e,t,s){e.exports={column:"styles_column__21xiA",title:"styles_title__37jqS",content:"styles_content__1amt1",item:"styles_item__3LwfM",icon:"styles_icon__2AOoa",text:"styles_text__3ZSYp",tempertureContent:"styles_tempertureContent__2HmLu",temperture:"styles_temperture__3AKyt"}},8:function(e,t,s){e.exports={widgetContent:"styles_widgetContent__2DVSb",up:"styles_up__1l1v5",icon:"styles_icon__210Cy",down:"styles_down__3Q1SP",temp:"styles_temp__1l_oe"}}},[[31,1,2]]]);
//# sourceMappingURL=main.340c980a.chunk.js.map