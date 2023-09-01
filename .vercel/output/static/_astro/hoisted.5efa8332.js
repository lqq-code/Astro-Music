const m=n=>history.replaceState(n,""),w=!!document.startViewTransition,h=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),b=n=>document.dispatchEvent(new Event(n)),A=()=>b("astro:page-load"),f="data-astro-transition-persist";let d=history.state?.index||0;!history.state&&h()&&m({index:d,scrollY:0});const k=(n,t)=>{let e=!1,o=!1;return(...a)=>{if(e){o=!0;return}n(...a),e=!0,setTimeout(()=>{o&&(o=!1,n(...a)),e=!1},t)}};async function v(n){const t=await fetch(n),e=await t.text();return{ok:t.ok,html:e}}function S(){const n=document.querySelector('[name="astro-view-transitions-fallback"]');return n?n.getAttribute("content"):"animate"}function T(){for(const n of document.scripts)n.dataset.astroExec=""}function x(){let n=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const e=document.createElement("script");e.innerHTML=t.innerHTML;for(const o of t.attributes){if(o.name==="src"){const a=new Promise(u=>{e.onload=u});n=n.then(()=>a)}e.setAttribute(o.name,o.value)}e.dataset.astroExec="",t.replaceWith(e)}return n}function L(n){const t=n.effect;return!t||!(t instanceof KeyframeEffect)||!t.target?!1:window.getComputedStyle(t.target,t.pseudoElement).animationIterationCount==="infinite"}const P=new DOMParser;async function E(n,t,e){const o=P.parseFromString(n,"text/html"),a=i=>{const c=i.getAttribute(f),l=c&&o.head.querySelector(`[${f}="${c}"]`);if(l)return l;if(i.matches("link[rel=stylesheet]")){const r=i.getAttribute("href");return o.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}if(i.tagName==="SCRIPT"){let r=i;for(const s of o.scripts)if(r.textContent&&r.textContent===s.textContent||r.type===s.type&&r.src===s.src)return s}return null},u=()=>{o.querySelectorAll("head noscript").forEach(r=>r.remove());const i=document.documentElement,c=[...i.attributes].filter(({name:r})=>(i.removeAttribute(r),r.startsWith("data-astro-")));[...o.documentElement.attributes,...c].forEach(({name:r,value:s})=>i.setAttribute(r,s));for(const r of Array.from(document.head.children)){const s=a(r);s?s.remove():r.remove()}document.head.append(...o.head.children);const l=document.body;document.body.replaceWith(o.body);for(const r of l.querySelectorAll(`[${f}]`)){const s=r.getAttribute(f),y=document.querySelector(`[${f}="${s}"]`);y&&y.replaceWith(r)}if(scrollTo({left:0,top:0,behavior:"instant"}),t?.scrollY===0&&location.hash){const r=decodeURIComponent(location.hash.slice(1)),s=document.getElementById(r);s&&(t.scrollY=s.offsetTop,m(t),s.scrollIntoView())}else t&&t.scrollY!==0&&scrollTo(0,t.scrollY);b("astro:after-swap")},p=[];for(const i of o.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${f}="${i.getAttribute(f)}"], link[rel=stylesheet]`)){const c=document.createElement("link");c.setAttribute("rel","preload"),c.setAttribute("as","style"),c.setAttribute("href",i.getAttribute("href")),p.push(new Promise(l=>{["load","error"].forEach(r=>c.addEventListener(r,l)),document.head.append(c)}))}if(p.length&&await Promise.all(p),e==="animate"){const i=document.getAnimations();document.documentElement.dataset.astroTransitionFallback="old";const c=document.getAnimations().filter(s=>!i.includes(s)&&!L(s)),l=Promise.all(c.map(s=>s.finished)),r=()=>{u(),document.documentElement.dataset.astroTransitionFallback="new"};await l,r()}else u()}async function g(n,t,e){let o;const{html:a,ok:u}=await v(t);if(!u){location.href=t;return}document.documentElement.dataset.astroTransition=n,w?o=document.startViewTransition(()=>E(a,e)).finished:o=E(a,e,S());try{await o}finally{await x(),T(),A()}}function Y(n){if(document.querySelector(`link[rel=prefetch][href="${n}"]`))return;if(navigator.connection){let e=navigator.connection;if(e.saveData||/(2|3)g/.test(e.effectiveType||""))return}let t=document.createElement("link");t.setAttribute("rel","prefetch"),t.setAttribute("href",n),document.head.append(t)}if(w||S()!=="none"){T(),document.addEventListener("click",t=>{let e=t.target;if(e instanceof Element&&e.tagName!=="A"&&(e=e.closest("a")),!e||!(e instanceof HTMLAnchorElement)||e.dataset.astroReload!==void 0||!e.href||e.target&&e.target!=="_self"||e.origin!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented||!h())return;if(location.pathname===e.pathname&&location.search===e.search){if(e.hash)return;if(t.preventDefault(),m({...history.state,scrollY}),scrollTo({left:0,top:0,behavior:"instant"}),location.hash){const a={index:++d,scrollY:0};history.pushState(a,"",e.href)}return}t.preventDefault(),g("forward",e.href,{index:++d,scrollY:0});const o={index:d,scrollY};m({index:d-1,scrollY}),history.pushState(o,"",e.href)}),addEventListener("popstate",t=>{if(!h()&&t.state){location.reload();return}if(t.state===null){history.scrollRestoration&&(history.scrollRestoration="auto");return}history.scrollRestoration&&(history.scrollRestoration="manual");const e=history.state,o=e?.index??d+1,a=o>d?"forward":"back";g(a,location.href,e),d=o}),["mouseenter","touchstart","focus"].forEach(t=>{document.addEventListener(t,e=>{if(e.target instanceof HTMLAnchorElement){let o=e.target;o.origin===location.origin&&o.pathname!==location.pathname&&h()&&Y(o.pathname)}},{passive:!0,capture:!0})}),addEventListener("load",A);const n=()=>{history.state&&m({...history.state,scrollY})};"onscrollend"in window?addEventListener("scrollend",n):addEventListener("scroll",k(n,300))}
