!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};function n(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function c(e){n(i,a,o,c,s,"next",e)}function s(e){n(i,a,o,c,s,"throw",e)}c(void 0)}))}};var r={},a=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof v?t:v,o=Object.create(a.prototype),i=new A(r||[]);return o._invoke=function(e,t,n){var r=h;return function(a,o){if(r===m)throw new Error("Generator is already running");if(r===f){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=T(i,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=m;var s=l(e,t,n);if("normal"===s.type){if(r=n.done?f:d,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=f,n.method="throw",n.arg=s.arg)}}}(e,n,i),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",d="suspendedYield",m="executing",f="completed",p={};function v(){}function g(){}function y(){}var _={};s(_,o,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(I([])));b&&b!==n&&r.call(b,o)&&(_=b);var E=y.prototype=v.prototype=Object.create(_);function k(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(a,o,i,c){var s=l(e[a],e,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}var a;this._invoke=function(e,r){function o(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(o,o):o()}}function T(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=l(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,p;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function I(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:O}}function O(){return{value:t,done:!0}}return g.prototype=y,s(E,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},k(L.prototype),s(L.prototype,i,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new L(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(E),s(E,c,"Generator"),s(E,o,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=I,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return c.type="throw",c.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:I(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(r);try{regeneratorRuntime=a}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var i={};function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t,n){t&&c(e.prototype,t);n&&c(e,n);return e};var s=function(){"use strict";function n(){e(o)(this,n),this._queryToFetch="",this._pageToFetch=1,this.BASE_URL="https://api.themoviedb.org/3/",this.API_KEY="9cca312caffd11f4ae9f11244d585025",this.TRENDING_MOVIES="trending/all/",this.MOVIE_BY_ID="movie/",this.MOVIE_BY_KEYWORD="search/movie"}return e(i)(n,[{key:"basicFetch",value:function(n){return e(t)(e(r).mark((function t(){return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).catch((function(e){console.log("error",e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),t)})))()}},{key:"fetchTrendingMovies",value:function(n){var a=this;return e(t)(e(r).mark((function t(){var o;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="".concat(a.BASE_URL).concat(a.TRENDING_MOVIES).concat(n,"?api_key=").concat(a.API_KEY,"&page=").concat(a.pageToFetch,"&language=").concat(a.getLanguage()),e.next=3,a.basicFetch(o);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),t)})))()}},{key:"fetchSearchMoviesByID",value:function(n){var a=this;return e(t)(e(r).mark((function t(){var o;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="".concat(a.BASE_URL).concat(a.MOVIE_BY_ID).concat(n,"?api_key=").concat(a.API_KEY,"&language=").concat(a.getLanguage()),e.next=3,a.basicFetch(o);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),t)})))()}},{key:"fetchIDMoviesByKeyWord",value:function(n){var a=this;return e(t)(e(r).mark((function t(){var o;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="".concat(a.BASE_URL).concat(a.MOVIE_BY_KEYWORD,"?api_key=").concat(a.API_KEY,"&page=").concat(a.pageToFetch,"&query=").concat(n,"&language=").concat(a.getLanguage()),e.next=3,a.basicFetch(o);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),t)})))()}},{key:"fetchTreilerById",value:function(n){var a=this;return e(t)(e(r).mark((function t(){var o;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="".concat(a.BASE_URL,"movie/").concat(n,"/videos?api_key=").concat(a.API_KEY),e.next=3,a.basicFetch(o);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),t)})))()}},{key:"resetPage",value:function(){this._pageToFetch=0}},{key:"getLanguage",value:function(){return localStorage.getItem("lang")}},{key:"queryToFetch",get:function(){return this._queryToFetch},set:function(e){this._queryToFetch=e}},{key:"pageToFetch",get:function(){return this._pageToFetch},set:function(e){this._pageToFetch=e}}]),n}(),u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var l=function(){"use strict";function t(n){var r=n.onShow,a=n.onClose,i=this;e(o)(this,t),e(u)(this,"onbackDropClose",(function(e){e.target.classList.contains("backdrop")&&i.close()})),e(u)(this,"onCloseClick",(function(e){i.close()})),this.onShow=r,this.onClose=a,this.elem=null,this.closeIcon=null}return e(i)(t,[{key:"onClose",value:function(){}},{key:"open",value:function(e){var t='<div class="backdrop">\n      <div class="modal">\n      <button type="button" class="modal__close">\n      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M8 8L22 22" stroke="black" stroke-width="2"/>\n      <path d="M8 22L22 8" stroke="black" stroke-width="2"/>\n      </svg>\n      </button>\n      '.concat(e,"\n      </div>\n      </div>");document.body.insertAdjacentHTML("beforeend",t),document.body.classList.add("modal-open"),this.elem=document.querySelector(".backdrop"),this.closeIcon=document.querySelector(".modal__close"),this.elem.addEventListener("click",this.onbackDropClose),this.closeIcon.addEventListener("click",this.onCloseClick),this.onShow()}},{key:"close",value:function(){document.querySelector(".backdrop").remove(),document.body.classList.remove("modal-open"),console.log("this.onClose();",this.onClose),this.onClose()}}]),t}(),h=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"},{id:10759,name:"Action & Adventure"},{id:10751,name:"Family"},{id:10762,name:"Kids"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"}],d=[{id:10762,name:"Дитячий"},{id:10763,name:"Новини"},{id:10764,name:"Реаліті-шоу"},{id:10765,name:"Науково фантастичний"},{id:10766,name:"Мильна опера"},{id:10767,name:"Ток-шоу"},{id:10768,name:"Політика та війна"},{id:28,name:"Бойовик"},{id:12,name:"Пригоди"},{id:16,name:"Мультфільм"},{id:35,name:"Комедія"},{id:80,name:"Кримінал"},{id:99,name:"Документальний"},{id:18,name:"Драма"},{id:10751,name:"Сімейний"},{id:14,name:"Фентезі"},{id:36,name:"Історичний"},{id:27,name:"Жахи"},{id:10402,name:"Музика"},{id:9648,name:"Детектив"},{id:10749,name:"Мелодрама"},{id:878,name:"Фантастика"},{id:10770,name:"Телефільм"},{id:53,name:"Трилер"},{id:10752,name:"Військовий"},{id:37,name:"Вестерн"},{id:10759,name:"Бойовик і пригоди"}];function m(){return"en-US"===localStorage.getItem("lang")?h:d}function f(e){var t=e.id,n=e.poster_path,r=e.title,a=e.name,o=e.release_date,i=e.first_air_date,c=e.genre_ids;if(o||i){var s="https://image.tmdb.org/t/p/original".concat(n),u=o||i,l=m(),h=c.map((function(e){return l.find((function(t){return t.id===e}))})).map((function(e){return e.name})).slice(0,2).join(", ");return'<li class="films-list__item"> \n    <article class="films-card" id='.concat(t,'>\n    <div class="img-wrapper">\n      <img width="395" src=').concat(s," alt=").concat(r||a,' />\n      </div>\n      <h2 class="films-card__title">').concat(r||a,'</h2>\n      <p class="films-card__genre">').concat(h," | ").concat(u.split("-")[0],"</p>\n    </article>\n  </li>")}}function p(e){var t=e.poster_path,n=e.vote_average,r=e.vote_count,a=e.popularity,o=e.original_title,i=e.original_name,c=e.title,s=e.name,u=e.overview,l=e.genre_ids,h="https://image.tmdb.org/t/p/original".concat(t),d=m(),f=l.map((function(e){return d.find((function(t){return t.id===e}))})).map((function(e){return e.name})).slice(0,2).join(", "),p="uk-UK"===localStorage.getItem("lang");return'<div class="modal-movie">\n    <img class="poster" width="375" src="'.concat(h,'" alt="').concat(c||s,'" />\n    <div class="modal-movie__descr">   \n      \n      <div class="modal-movie__info-weapper">\n      <h2 class="modal-movie__title">').concat(c||s,'</h2>  \n      <ul class="modal-movie__list list">\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">').concat(p?"Оцінка / Оцінок":"Vote / Votes",' </p>\n       <p class="modal-movie__value">\n         <span class="modal-movie__value--accent">').concat(n,"</span> / ").concat(r,'\n       </p>\n      </li>\n      <li class="modal-movie__item">\n       <p class="modal-movie__key">').concat(p?"Популярність":"Popularity",' </p>\n       <p class="modal-movie__value">').concat(a,'</p>\n      </li>\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">').concat(p?"Оригінальна назва":"Original Title",'  </p>\n       <p class="modal-movie__value modal-movie__value--uppercase">').concat(o||i,'</p>\n      </li>\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">').concat(p?"Жанр":"Genre",'  </p>\n       <p class="modal-movie__value">').concat(f,'</p>\n      </li>\n      \n      </ul>  \n        <div class="modal-movie__about-wrapper">\n        <p class="modal-movie__about">').concat(p?"Про що фільм":"About",'</p>\n        <p class="modal-movie__overview">').concat(u,'</p>\n        </div>\n        \n        <div class="trailer-wrapper"></div>\n        <div class="modal-movie__button-wrapper">\n          <button class="modal-movie__btn">').concat(p?"Додати в переглянуті":"add to Watched",' </button>\n          <button class="modal-movie__btn">').concat(p?"Додати в чергу":"add to queue"," </button>\n        </div>\n      </div>\n    </div>\n  </div>")}var v=function(){"use strict";function t(n){var r=this;e(o)(this,t),e(u)(this,"onThemeToggle",(function(){var e=r.getBoolean();e&&localStorage.setItem(r.THEME_STORAGE_KEY,r.Theme.DARK),e||localStorage.setItem(r.THEME_STORAGE_KEY,r.Theme.LIGHT),r.renderTheme()})),this.themeSwitcherEl=n,this.THEME_STORAGE_KEY="theme",this.Theme={LIGHT:"light-theme",DARK:"dark-theme"}}return e(i)(t,[{key:"renderTheme",value:function(){var e=this.getBoolean();e||(this.themeSwitcherEl.setAttribute("checked",!0),this.changeBodyClass(this.Theme.DARK,this.Theme.LIGHT)),e&&this.changeBodyClass(this.Theme.LIGHT,this.Theme.DARK)}},{key:"changeBodyClass",value:function(e,t){document.body.classList.add(e),document.body.classList.remove(t)}},{key:"getBoolean",value:function(){var e=localStorage.getItem(this.THEME_STORAGE_KEY);return e===this.Theme.LIGHT||!e}}]),t}(),g=function(){"use strict";function t(n){var r=n.switcher,a=n.checkbox,i=n.language,c=this;e(o)(this,t),e(u)(this,"onLanguageChange",(function(){var e=c.getBoolean();e&&localStorage.setItem(c.LANG_STORAGE_KEY,c.langs.EN),e||localStorage.setItem(c.LANG_STORAGE_KEY,c.langs.UA),c.renderLang()})),this.LANG_STORAGE_KEY="lang",this.element=r,this.checkbox=a,this.language=i,this.langs={UA:"uk-UK",EN:"en-US"}}return e(i)(t,[{key:"renderLang",value:function(){var e=this.getBoolean();e||(this.checkbox.setAttribute("checked",!0),this.changeSwitcherClass(this.langs.EN,this.langs.UA),this.language.innerHTML="EN",y(e),G()),e&&(this.changeSwitcherClass(this.langs.UA,this.langs.EN),this.language.innerHTML="UA",y(e),G())}},{key:"changeSwitcherClass",value:function(e,t){this.element.classList.add(e),this.element.classList.remove(t)}},{key:"getBoolean",value:function(){var e=localStorage.getItem(this.LANG_STORAGE_KEY);return e===this.langs.UA||!e}}]),t}();function y(e){console.log("isUaLang",e),e&&_("en","uk"),e||_("uk","en")}function _(e,t){document.body.classList.contains(e)&&document.body.classList.remove(e),document.body.classList.add(t)}function w(e){return'\n      <iframe\n              class="trailer"\n        width="350"\n        height="197"\n        src="https://www.youtube.com/embed/'.concat(e,'"\n        title="YouTube video player"\n        frameborder="0"\n        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n        allowfullscreen\n      ></iframe>')}var b=new s;function E(e){return k.apply(this,arguments)}function k(){return(k=e(t)(e(r).mark((function t(n){var a,o;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.fetchTreilerById(n);case 2:if((a=e.sent)&&a.results[0]){e.next=5;break}return e.abrupt("return","");case 5:return o=a.results.find((function(e){return"Trailer"===e.type})),e.next=8,w(o.key);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function L(e){return T.apply(this,arguments)}function T(){return(T=e(t)(e(r).mark((function t(n){var a,o;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.querySelector(".trailer-wrapper"),e.next=3,E(n);case 3:o=e.sent,a.innerHTML=o;case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var S="movie-list",x={movies:document.querySelector(".films-list"),pagination:document.querySelector(".pagination-list"),themeSwitcher:document.querySelector(".theme-switch__toggle"),languageSwitcher:{switcher:document.querySelector(".language-switcher__label"),checkbox:document.querySelector(".language-switcher__checkbox"),language:document.querySelector(".language-switcher__lang")}},A=new s,I=new l({onShow:function(){window.addEventListener("keyup",R)},onClose:function(){window.removeEventListener("keyup",R)}}),O=new v(x.themeSwitcher),M=new g(x.languageSwitcher);function G(){return F.apply(this,arguments)}function F(){return(F=e(t)(e(r).mark((function t(){var n,a;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.fetchTrendingMovies("day");case 2:n=e.sent,a=n.results.map(f).join(""),C(JSON.stringify(n.results)),x.movies.innerHTML=a;case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function R(e){"Escape"===e.code&&I.close()}function N(){return(N=e(t)(e(r).mark((function t(n){var a,o,i,c;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.target.closest(".films-card")){e.next=3;break}return e.abrupt("return");case 3:o=JSON.parse(localStorage.getItem(S)),i=o.find((function(e){return e.id===Number(a.id)})),c=p(i),I.open(c),L(a.id);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function C(e){localStorage.setItem(S,e)}x.languageSwitcher.switcher.addEventListener("change",M.onLanguageChange),x.themeSwitcher.addEventListener("change",O.onThemeToggle),x.movies.addEventListener("click",(function(e){return N.apply(this,arguments)})),M.renderLang(),O.renderTheme()}();
//# sourceMappingURL=index.f028ca44.js.map
