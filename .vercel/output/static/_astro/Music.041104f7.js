import{r as a}from"./index.ed373d49.js";/* empty css                       */var m={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=a,f=Symbol.for("react.element"),x=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,_=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function d(t,e,l){var r,s={},o=null,c=null;l!==void 0&&(o=""+l),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(c=e.ref);for(r in e)p.call(e,r)&&!h.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:f,type:t,key:o,ref:c,props:s,_owner:_.current}}n.Fragment=x;n.jsx=d;n.jsxs=d;m.exports=n;var i=m.exports;function y({musics:t}){return i.jsx(i.Fragment,{children:i.jsx("div",{className:"music",children:i.jsx("ul",{children:t.map(e=>i.jsx("li",{children:i.jsxs("a",{href:`/music/${e.id}/`,children:[i.jsx("img",{width:230,height:230,src:e.heroImage,alt:""}),i.jsx("div",{className:"musicTitle",children:e.title}),i.jsx("div",{className:"musicDes",children:e.description})]})},e.id))})})})}export{y as default};
