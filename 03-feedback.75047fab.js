function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o);var n=o("kEUo3");const l=(e,t)=>{try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},s=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},u={},c={message:document.querySelector("textarea"),input:document.querySelector("input"),form:document.querySelector("form")};console.log("ss"),c.form.addEventListener("input",e(n).throttle((function(e){e.preventDefault(),e.currentTarget&&(u.email=e.currentTarget[0].value,u.message=e.currentTarget[1].value);l("feedback-form-state",JSON.stringify(u))}),500)),c.form.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements;t.email.value&&t.message.value?(u.email=t.email.value,u.message=t.message.value,console.log(u),localStorage.clear(),c.input.value="",c.message.value=""):alert("все поля должны быть заполнены");return u}));try{const e=s("feedback-form-state");if(e){const t=JSON.parse(e);t.email?c.input.value=t.email:c.input.value="",t.message?c.message.value=t.message:c.message.value=""}}catch(e){}
//# sourceMappingURL=03-feedback.75047fab.js.map
