const u={form:document.querySelector("#task-form"),list:document.querySelector("#task-list"),ls:document.querySelector(".local-list")},d="task";function s(t){return JSON.parse(localStorage.getItem(t))}function i(t,e){localStorage.setItem(t,JSON.stringify(e))}function f(t,e){const o=s(t);if(!o)return;const n=o.map(({value:a,id:r})=>`<li id="${r}">${a}<button tupe="button">x</button></li>`).join("");e.insertAdjacentHTML("beforeend",n)}function m(t,e){e.addEventListener("click",o);function o(n){const a=n.target;if(a.nodeName!=="BUTTON")return;const c=s(t).filter(({id:l})=>l!==a.parentNode.id);i(t,c),a.parentNode.remove()}}export{d as K,f as a,m as d,s as g,u as r,i as s};
//# sourceMappingURL=delete-elem-51cf5d82.js.map
