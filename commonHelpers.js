(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const a=document.querySelector("#task-form"),l=document.querySelector("#task-list"),c="task";console.log(a);a.addEventListener("submit",r=>{r.preventDefault();const t=r.currentTarget.elements.taskName.value.trim();t&&(console.dir(r.currentTarget.elements.taskName.value),u(t),f(t),r.currentTarget.reset())});function u(r){const t=`<li>${r}</li>`;l.insertAdjacentHTML("beforeend",t)}function f(r){const t=JSON.parse(localStorage.getItem(c))||[];t.push(r),localStorage.setItem(c,JSON.stringify(t))}function d(){const r=JSON.parse(localStorage.getItem(c));if(!r)return;const t=r.map(s=>`<li>${s}</li>`).join("");l.insertAdjacentHTML("beforeend",t)}d();
//# sourceMappingURL=commonHelpers.js.map
