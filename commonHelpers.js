import{n as l}from"./assets/vendor-342e672c.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const u=document.querySelector("#task-form"),c=document.querySelector("#task-list"),i="task";console.log(u);c.addEventListener("click",d);function d(r){const e=r.target;if(e.nodeName!=="BUTTON")return;const s=JSON.parse(localStorage.getItem(i)).filter(({id:t})=>t!==e.parentNode.id);localStorage.setItem(i,JSON.stringify(s)),e.parentNode.remove()}u.addEventListener("submit",r=>{r.preventDefault();const e=r.currentTarget.elements.taskName.value.trim();e&&(console.dir(r.currentTarget.elements.taskName.value),m(e),r.currentTarget.reset())});function f(r,e){const n=`<li id="${e}">${r}<button tupe="button">x</button></li>`;c.insertAdjacentHTML("beforeend",n)}function m(r){const e=JSON.parse(localStorage.getItem(i))||[],n=l();e.push({value:r,id:n}),f(r,n),localStorage.setItem(i,JSON.stringify(e))}function p(){const r=JSON.parse(localStorage.getItem(i));if(!r)return;const e=r.map(({value:n,id:s})=>`<li id="${s}">${n}<button tupe="button">x</button></li>`).join("");c.insertAdjacentHTML("beforeend",e)}p();
//# sourceMappingURL=commonHelpers.js.map
