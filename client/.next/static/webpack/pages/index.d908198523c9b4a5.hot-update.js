/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./src/styles/nav/Navbar.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./src/styles/nav/Navbar.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Navbar_nav__g0KOQ {\\n  background-color: var(--bg-a1);\\n  font-family: var(--font);\\n  display: flex;\\n  height: 60px;\\n  align-items: center;\\n  justify-content: space-between;\\n  box-shadow: 0px -20px 50px rgba(0, 0, 0, 0.1450980392);\\n  width: 100%;\\n  position: fixed;\\n  z-index: 200;\\n  top: -10%;\\n  opacity: 0;\\n  animation: Navbar_navAnim__pYOAL 0.5s forwards;\\n}\\n@keyframes Navbar_navAnim__pYOAL {\\n  100% {\\n    top: 0;\\n    opacity: 1;\\n  }\\n}\\n.Navbar_nav__g0KOQ h1 {\\n  color: #fff;\\n  font-weight: 1000;\\n  font-size: 32px;\\n  font-family: sans-serif;\\n  margin-left: 30px;\\n}\\n.Navbar_nav__g0KOQ h1 span {\\n  padding: 1px 5px;\\n  border-radius: 4px;\\n  background-color: var(--bg-a4);\\n}\\n.Navbar_nav__g0KOQ ul {\\n  display: flex;\\n  gap: 40px;\\n  margin-right: 30px;\\n}\\n.Navbar_nav__g0KOQ ul li {\\n  list-style: none;\\n}\\n.Navbar_nav__g0KOQ ul li a {\\n  font-weight: 600;\\n  color: #fff;\\n  text-decoration: none;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/nav/Navbar.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,8BAAA;EACA,wBAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,8BAAA;EACA,sDAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,8CAAA;AACF;AACE;EACE;IACE,MAAA;IACA,UAAA;EACJ;AACF;AAEE;EACE,WAAA;EACA,iBAAA;EACA,eAAA;EACA,uBAAA;EACA,iBAAA;AAAJ;AAEI;EACE,gBAAA;EACA,kBAAA;EACA,8BAAA;AAAN;AAIE;EACE,aAAA;EACA,SAAA;EACA,kBAAA;AAFJ;AAII;EACE,gBAAA;AAFN;AAIM;EACE,gBAAA;EACA,WAAA;EACA,qBAAA;AAFR\",\"sourcesContent\":[\".nav {\\r\\n  background-color: var(--bg-a1);\\r\\n  font-family: var(--font);\\r\\n  display: flex;\\r\\n  height: 60px;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  box-shadow: 0px -20px 50px #00000025;\\r\\n  width: 100%;\\r\\n  position: fixed;\\r\\n  z-index: 200;\\r\\n  top: -10%;\\r\\n  opacity: 0;\\r\\n  animation: navAnim 0.5s forwards;\\r\\n\\r\\n  @keyframes navAnim {\\r\\n    100% {\\r\\n      top: 0;\\r\\n      opacity: 1;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    color: #fff;\\r\\n    font-weight: 1000;\\r\\n    font-size: 32px;\\r\\n    font-family: sans-serif;\\r\\n    margin-left: 30px;\\r\\n\\r\\n    span {\\r\\n      padding: 1px 5px;\\r\\n      border-radius: 4px;\\r\\n      background-color: var(--bg-a4);\\r\\n    }\\r\\n  }\\r\\n\\r\\n  ul {\\r\\n    display: flex;\\r\\n    gap: 40px;\\r\\n    margin-right: 30px;\\r\\n\\r\\n    li {\\r\\n      list-style: none;\\r\\n\\r\\n      a {\\r\\n        font-weight: 600;\\r\\n        color: #fff;\\r\\n        text-decoration: none;\\r\\n      }\\r\\n    }\\r\\n  }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"nav\": \"Navbar_nav__g0KOQ\",\n\t\"navAnim\": \"Navbar_navAnim__pYOAL\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls3XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbN10udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVs0XSEuL3NyYy9zdHlsZXMvbmF2L05hdmJhci5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHlLQUFxRjtBQUMvSDtBQUNBO0FBQ0EsOERBQThELG1DQUFtQyw2QkFBNkIsa0JBQWtCLGlCQUFpQix3QkFBd0IsbUNBQW1DLDJEQUEyRCxnQkFBZ0Isb0JBQW9CLGlCQUFpQixjQUFjLGVBQWUsbURBQW1ELEdBQUcsb0NBQW9DLFVBQVUsYUFBYSxpQkFBaUIsS0FBSyxHQUFHLHlCQUF5QixnQkFBZ0Isc0JBQXNCLG9CQUFvQiw0QkFBNEIsc0JBQXNCLEdBQUcsOEJBQThCLHFCQUFxQix1QkFBdUIsbUNBQW1DLEdBQUcseUJBQXlCLGtCQUFrQixjQUFjLHVCQUF1QixHQUFHLDRCQUE0QixxQkFBcUIsR0FBRyw4QkFBOEIscUJBQXFCLGdCQUFnQiwwQkFBMEIsR0FBRyxPQUFPLGtHQUFrRyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsK0JBQStCLHFDQUFxQywrQkFBK0Isb0JBQW9CLG1CQUFtQiwwQkFBMEIscUNBQXFDLDJDQUEyQyxrQkFBa0Isc0JBQXNCLG1CQUFtQixnQkFBZ0IsaUJBQWlCLHVDQUF1Qyw4QkFBOEIsY0FBYyxpQkFBaUIscUJBQXFCLFNBQVMsT0FBTyxjQUFjLG9CQUFvQiwwQkFBMEIsd0JBQXdCLGdDQUFnQywwQkFBMEIsa0JBQWtCLDJCQUEyQiw2QkFBNkIseUNBQXlDLFNBQVMsT0FBTyxjQUFjLHNCQUFzQixrQkFBa0IsMkJBQTJCLGdCQUFnQiwyQkFBMkIsaUJBQWlCLDZCQUE2Qix3QkFBd0Isa0NBQWtDLFdBQVcsU0FBUyxPQUFPLEtBQUssdUJBQXVCO0FBQ2w4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9uYXYvTmF2YmFyLm1vZHVsZS5zY3NzP2M0YmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5OYXZiYXJfbmF2X19nMEtPUSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1hMSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJveC1zaGFkb3c6IDBweCAtMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4xNDUwOTgwMzkyKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMjAwO1xcbiAgdG9wOiAtMTAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbjogTmF2YmFyX25hdkFuaW1fX3BZT0FMIDAuNXMgZm9yd2FyZHM7XFxufVxcbkBrZXlmcmFtZXMgTmF2YmFyX25hdkFuaW1fX3BZT0FMIHtcXG4gIDEwMCUge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5OYXZiYXJfbmF2X19nMEtPUSBoMSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuLk5hdmJhcl9uYXZfX2cwS09RIGgxIHNwYW4ge1xcbiAgcGFkZGluZzogMXB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWE0KTtcXG59XFxuLk5hdmJhcl9uYXZfX2cwS09RIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcbi5OYXZiYXJfbmF2X19nMEtPUSB1bCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4uTmF2YmFyX25hdl9fZzBLT1EgdWwgbGkgYSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL25hdi9OYXZiYXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0RBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDhDQUFBO0FBQ0Y7QUFDRTtFQUNFO0lBQ0UsTUFBQTtJQUNBLFVBQUE7RUFDSjtBQUNGO0FBRUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUFKO0FBRUk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFBTjtBQUlFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUZKO0FBSUk7RUFDRSxnQkFBQTtBQUZOO0FBSU07RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUZSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uYXYge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYTEpO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3gtc2hhZG93OiAwcHggLTIwcHggNTBweCAjMDAwMDAwMjU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDIwMDtcXHJcXG4gIHRvcDogLTEwJTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBhbmltYXRpb246IG5hdkFuaW0gMC41cyBmb3J3YXJkcztcXHJcXG5cXHJcXG4gIEBrZXlmcmFtZXMgbmF2QW5pbSB7XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXdlaWdodDogMTAwMDtcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuXFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgIHBhZGRpbmc6IDFweCA1cHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWE0KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgdWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG5cXHJcXG4gICAgbGkge1xcclxcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgYSB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm5hdlwiOiBcIk5hdmJhcl9uYXZfX2cwS09RXCIsXG5cdFwibmF2QW5pbVwiOiBcIk5hdmJhcl9uYXZBbmltX19wWU9BTFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./src/styles/nav/Navbar.module.scss\n"));

/***/ })

});