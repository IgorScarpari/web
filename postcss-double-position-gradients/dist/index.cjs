"use strict";var e=require("@csstools/postcss-progressive-custom-properties"),t=require("postcss-value-parser");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e),i=r(t);function s(e){return e.includes("conic-gradient(")||e.includes("linear-gradient(")||e.includes("radial-gradient(")||e.includes("repeating-conic-gradient(")||e.includes("repeating-linear-gradient(")||e.includes("repeating-radial-gradient(")}const a=["at","bottom","center","circle","closest-corner","closest-side","ellipse","farthest-corner","farthest-side","from","in","left","right","to","top"],o=e=>"div"===e.type&&","===e.value;function l(e){try{return!1!==i.default.unit(null==e?void 0:e.value)}catch(e){return!1}}const c=e=>({postcssPlugin:"postcss-double-position-gradients",Declaration(t,{result:r}){if(!s(t.value))return;if(function(e){let t=e.parent;for(;t;)if("atrule"===t.type){if("supports"===t.name&&s(t.params))return!0;t=t.parent}else t=t.parent;return!1}(t))return;let n;try{n=i.default(t.value)}catch(e){t.warn(r,`Failed to parse value '${t.value}' as a CSS gradient. Leaving the original value intact.`)}if(void 0===n)return;n.walk((e=>{if("function"!==e.type||"conic-gradient"!==(t=e.value)&&"linear-gradient"!==t&&"radial-gradient"!==t&&"repeating-conic-gradient"!==t&&"repeating-linear-gradient"!==t&&"repeating-radial-gradient"!==t)return;var t;const r=e.nodes.filter((e=>"comment"!==e.type&&"space"!==e.type));let n=!1;r.forEach(((t,r,i)=>{if("word"===t.type&&a.includes(t.value)&&(n=!0),"div"===t.type&&","===t.value&&(n=!1),n)return;const s=Object(i[r-1]),c=Object(i[r-2]),u=Object(i[r+1]);if(c.type&&l(s)&&l(t)){const r=c,n={type:"div",value:",",before:o(u)?u.before:"",after:o(u)?"":" "};e.nodes.splice(e.nodes.indexOf(t)-1,0,n,r)}}))}));const c=n.toString();if(c!==t.value){if(e.preserve)return void t.cloneBefore({value:c});t.value=c}}});c.postcss=!0;const u=e=>{const t=Object.assign({enableProgressiveCustomProperties:!0,preserve:!0},e);return t.enableProgressiveCustomProperties&&t.preserve?{postcssPlugin:"postcss-double-position-gradients",plugins:[n.default(),c(t)]}:c(t)};u.postcss=!0,module.exports=u;