webpackJsonp([35],{855:function(e,t,r){"use strict";function n(e){var t=f[e];switch(e){case 0:return"[в прошлое "+t+" в] LT";case 1:case 2:case 4:return"[в прошлый "+t+" в] LT";case 3:case 5:case 6:return"[в прошлую "+t+" в] LT"}}function u(e){var t=f[e];return 2===e?"[во "+t+" в] LT":"[в "+t+" в] LT"}function a(e){var t=f[e];switch(e){case 0:return"[в следующее "+t+" в] LT";case 1:case 2:case 4:return"[в следующий "+t+" в] LT";case 3:case 5:case 6:return"[в следующую "+t+" в] LT"}}function s(e,t,r,n){var u=i[e];return"function"==typeof u?u(t,r,n):u}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var o=r(936),c=function(e){return e&&e.__esModule?e:{default:e}}(o),f=["воскресенье","понедельник","вторник","среду","четверг","пятницу","субботу"],i={lastWeek:function(e,t,r){var a=e.getUTCDay();return(0,c.default)(e,t,r)?u(a):n(a)},yesterday:"[вчера в] LT",today:"[сегодня в] LT",tomorrow:"[завтра в] LT",nextWeek:function(e,t,r){var n=e.getUTCDay();return(0,c.default)(e,t,r)?u(n):a(n)},other:"L"};e.exports=t.default},936:function(e,t,r){"use strict";function n(e,t,r){var n=(0,a.default)(e,r),u=(0,a.default)(t,r);return n.getTime()===u.getTime()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u=r(937),a=function(e){return e&&e.__esModule?e:{default:e}}(u);e.exports=t.default},937:function(e,t,r){"use strict";function n(e,t){var r=t||{},n=r.locale,u=n&&n.options&&n.options.weekStartsOn,s=void 0===u?0:Number(u),o=void 0===r.weekStartsOn?s:Number(r.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=(0,a.default)(e,r),f=c.getUTCDay(),i=(f<o?7:0)+f-o;return c.setUTCDate(c.getUTCDate()-i),c.setUTCHours(0,0,0,0),c}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u=r(39),a=function(e){return e&&e.__esModule?e:{default:e}}(u);e.exports=t.default}});
//# sourceMappingURL=1b8630f937ab9a71d2f8.js.map
