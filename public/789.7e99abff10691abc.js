"use strict";
(self["webpackChunksistema"] = self["webpackChunksistema"] || []).push([[789],{

/***/ 3685:
/*!*********************************************************!*\
  !*** ./src/app/modulos/perfil/perfil-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilRoutingModule": () => (/* binding */ PerfilRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _pages_formulario_perfil_formulario_perfil_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/formulario-perfil/formulario-perfil.component */ 8638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);




const routes = [{
  path: '',
  children: [{
    path: '',
    component: _pages_formulario_perfil_formulario_perfil_component__WEBPACK_IMPORTED_MODULE_0__.FormularioPerfilComponent
  }, {
    path: '**',
    redirectTo: 'auth'
  }]
}];
let PerfilRoutingModule = /*#__PURE__*/(() => {
  class PerfilRoutingModule {
    static #_ = this.ɵfac = function PerfilRoutingModule_Factory(t) {
      return new (t || PerfilRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PerfilRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return PerfilRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PerfilRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5789:
/*!*************************************************!*\
  !*** ./src/app/modulos/perfil/perfil.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilModule": () => (/* binding */ PerfilModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-routing.module */ 3685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);



let PerfilModule = /*#__PURE__*/(() => {
  class PerfilModule {
    static #_ = this.ɵfac = function PerfilModule_Factory(t) {
      return new (t || PerfilModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PerfilModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilRoutingModule]
    });
  }
  return PerfilModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PerfilModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilRoutingModule]
  });
})();

/***/ })

}]);