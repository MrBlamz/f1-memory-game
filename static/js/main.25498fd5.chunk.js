(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{13:function(e,s,a){},15:function(e,s,a){"use strict";a.r(s);var t=a(1),i=a.n(t),r=a(6),c=a.n(r),n=(a(13),a(8)),l=a(3),o=a(7),m=a(0);var g=function(e){var s=e.url,a=e.name,t=e.handleImageClick;return Object(m.jsx)("button",{className:"card",onClick:function(){return t(a)},children:Object(m.jsx)("img",{className:"card__image",src:s,alt:""})})};var j=function(e){var s=e.data,a=e.handleImageClick,t=s.map((function(e){return Object(m.jsx)(g,{url:e.url,name:e.name,handleImageClick:a},e.id)}));return Object(m.jsx)("div",{className:"grid",children:t})};var d=function(e){var s=e.currentScore,a=e.highestScore;return Object(m.jsxs)("div",{className:"scoreboard",children:[Object(m.jsxs)("h2",{className:"scoreboard__score",children:["Current Score: ",s]}),Object(m.jsxs)("h2",{className:"scoreboard__score",children:["Highest Score: ",a]})]})};var u=function(e){var s=e.title,a=e.currentScore,t=e.highestScore;return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("h1",{className:"header__title",children:s}),Object(m.jsx)(d,{currentScore:a,highestScore:t})]})};var b=function(e){var s=e.text,a=e.profileUrl;return Object(m.jsxs)("footer",{className:"footer",children:[Object(m.jsx)("p",{className:"footer__text",children:s}),Object(m.jsx)("a",{className:"footer__logo",href:a,target:"_blank",rel:"noreferrer",children:Object(m.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwOUY4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwOUU4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUqS1wAAApVJREFUeNq0l89rE1EQx3e3gVJoSPzZeNEWPKgHoa0HBak0iHiy/4C3WvDmoZ56qJ7txVsPQu8qlqqHIhRKJZceesmhioQEfxTEtsoSpdJg1u/ABJ7Pmc1m8zLwgWTmzcw3L+/te+tHUeQltONgCkyCi2AEDHLsJ6iBMlgHL8FeoqokoA2j4CloRMmtwTmj7erHBXPgCWhG6a3JNXKdCiDl1cidVbXZkJoXQRi5t5BrxwoY71FzU8S4JuAIqFkJ2+BFSlEh525b/hr3+k/AklDkNsf6wTT4yv46KIMNpsy+iMdMc47HNWxbsgVcUn7FmLAzzoFAWDsBx+wVP6bUpp5ewI+DOeUx0Wd9D8F70BTGNjkWtqnhmT1JQAHcUgZd8Lo3rQb1LAT8eJVUfgGvHQigGp+V2Z0iAUUl8QH47kAA1XioxIo+bRN8OG8F/oBjwv+Z1nJgX5jpdzQDw0LCjsPmrcW7I/iHScCAEDj03FtD8A0EyuChHgg4KTlJQF3wZ7WELppnBX+dBFSVpJsOBWi1qiRgSwnOgoyD5hmuJdkWCVhTgnTvW3AgYIFrSbZGh0UW/Io5Vp+DQoK7o80pztWMemZbgxeNwCNwDbw1fIfgGZjhU6xPaJgBV8BdsMw5cbZoHsenwYFxkZzl83xTSKTiviCAfCsJLysH3POfC8m8NegyGAGfLP/VmGmfSChgXroR0RSWjEFv2J/nG84cuKFMf4sTCZqXuJd4KaXFVjEG3+tw4eXbNK/YC9oXXs3O8NY8y99L4BXY5cvLY/Bb2VZ58EOJVcB18DHJq9lRsKr8inyKGVjlmh29mtHs3AHfuhCwy1vXT/Nu2GKQt+UHsGdctyX6eQyNvc+5sfX9Dl7Pe2J/BRgAl2CpwmrsHR0AAAAASUVORK5CYII=",alt:"github-logo"})})]})};var h=function(){var e=Object(t.useState)(0),s=Object(l.a)(e,2),a=s[0],i=s[1],r=Object(t.useState)(0),c=Object(l.a)(r,2),g=c[0],d=c[1],h=Object(t.useState)([]),A=Object(l.a)(h,2),p=A[0],O=A[1],N=Object(t.useState)([]),S=Object(l.a)(N,2),I=S[0],M=S[1],J=function(){return O(function(e){for(var s=e,a=s.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),i=s[a];s[a]=s[t],s[t]=i}return s}(o))};return Object(t.useEffect)((function(){J()}),[]),Object(t.useEffect)((function(){g>a&&i(g)}),[g,a]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(u,{title:"F1 Memory Game",currentScore:g,highestScore:a}),Object(m.jsx)(j,{data:p,handleImageClick:function(e){I.includes(e)?(d(0),M([])):(d(g+1),M([].concat(Object(n.a)(I),[e]))),J()}}),Object(m.jsx)(b,{text:"Made by Pedro Ribeiro",profileUrl:"https://github.com/MrBlamz"})]})};c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"name":"Lewis Hamilton","url":"/assets/images/2021/01HAM.jpg","id":1},{"name":"Valtteri Bottas","url":"/assets/images/2021/02BOT.jpg","id":2},{"name":"Max Verstappen","url":"/assets/images/2021/03VER.jpg","id":3},{"name":"Sergio Perez","url":"/assets/images/2021/04PER.jpg","id":4},{"name":"Lando Norris","url":"/assets/images/2021/05NOR.jpg","id":5},{"name":"Daniel Ricciardo","url":"/assets/images/2021/06RIC.jpg","id":6},{"name":"Lance Stroll","url":"/assets/images/2021/07STR.jpg","id":7},{"name":"Sebastian Vettel","url":"/assets/images/2021/08VET.jpg","id":8},{"name":"Fernando Alonso","url":"/assets/images/2021/09ALO.jpg","id":9},{"name":"Esteban Ocon","url":"/assets/images/2021/10OCO.jpg","id":10},{"name":"Charles Leclerc","url":"/assets/images/2021/11LEC.jpg","id":11},{"name":"Carlos Sainz","url":"/assets/images/2021/12SAI.jpg","id":12},{"name":"Yuki Tsunoda","url":"/assets/images/2021/13TSU.jpg","id":13},{"name":"Pierre Gasly","url":"/assets/images/2021/14GAS.jpg","id":14},{"name":"Kimi Raikkonen","url":"/assets/images/2021/15RAI.jpg","id":15},{"name":"Antonio Giovinazzi","url":"/assets/images/2021/16GIO.jpg","id":16},{"name":"Nikita Mazepin","url":"/assets/images/2021/17MAZ.jpg","id":17},{"name":"Mick Schumacher","url":"/assets/images/2021/18MSC.jpg","id":18},{"name":"George Russel","url":"/assets/images/2021/19RUS.jpg","id":19},{"name":"Nicholas Latifi","url":"/assets/images/2021/20LAT.jpg","id":20}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.25498fd5.chunk.js.map