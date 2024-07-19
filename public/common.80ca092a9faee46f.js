"use strict";
(self["webpackChunksistema"] = self["webpackChunksistema"] || []).push([[592],{

/***/ 7154:
/*!*************************************************!*\
  !*** ./src/app/shared/services/pago.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagoService": () => (/* binding */ PagoService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4004);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 262);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 529);





let PagoService = /*#__PURE__*/(() => {
  class PagoService {
    constructor(http) {
      this.http = http;
      this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    }
    traerPagos() {
      const url = `${this.baseUrl}/pago`;
      return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
        return resp;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false)));
    }
    //   traerUnaPago(idPlan: number) {
    //     const url = `${this.baseUrl}/plan/${idPlan}`;
    //     return this.http.get<any>(url)
    //       .pipe(
    //         map(resp => {
    //           // this._plan = resp;
    //           return resp;
    //         }),
    //         catchError(err => of(false))
    //       );
    //   }
    crearPago(pago) {
      const url = `${this.baseUrl}/pago`;
      return this.http.post(url, pago).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => resp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(err.error)));
    }
    static #_ = this.ɵfac = function PagoService_Factory(t) {
      return new (t || PagoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
    };
    static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: PagoService,
      factory: PagoService.ɵfac,
      providedIn: 'root'
    });
  }
  return PagoService;
})();

/***/ }),

/***/ 7101:
/*!*************************************************!*\
  !*** ./src/app/shared/services/plan.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanService": () => (/* binding */ PlanService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4004);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 262);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 529);





let PlanService = /*#__PURE__*/(() => {
  class PlanService {
    constructor(http) {
      this.http = http;
      this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    }
    traerPlanes() {
      const url = `${this.baseUrl}/plan`;
      return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
        // this._plan = resp;
        return resp;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false)));
    }
    traerUnPlan(idPlan) {
      const url = `${this.baseUrl}/plan/${idPlan}`;
      return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
        // this._plan = resp;
        return resp;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false)));
    }
    crearPlan(plan) {
      const url = `${this.baseUrl}/plan`;
      return this.http.post(url, plan).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => resp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(err.error)));
    }
    modificarPlan(plan) {
      const url = `${this.baseUrl}/plan/${plan.id}`;
      return this.http.put(url, plan).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => resp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(err.error)));
    }
    eliminarPlan(codPlan) {
      const url = `${this.baseUrl}/plan/${codPlan}`;
      return this.http.delete(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => resp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(err.error)));
    }
    static #_ = this.ɵfac = function PlanService_Factory(t) {
      return new (t || PlanService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
    };
    static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: PlanService,
      factory: PlanService.ɵfac,
      providedIn: 'root'
    });
  }
  return PlanService;
})();

/***/ }),

/***/ 248:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/sucursal.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SucursalService": () => (/* binding */ SucursalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4004);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 262);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 529);





let SucursalService = /*#__PURE__*/(() => {
  class SucursalService {
    constructor(http) {
      this.http = http;
      this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    }
    traerSucursales() {
      const url = `${this.baseUrl}/sucursal`;
      return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
        return resp;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false)));
    }
    traerUnaSucursal(idSucursal) {
      const url = `${this.baseUrl}/sucursal/${idSucursal}`;
      return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
        // this._cliente = resp;
        return resp;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false)));
    }
    crearSucursal(sucursal) {
      const url = `${this.baseUrl}/sucursal`;
      return this.http.post(url, sucursal).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => resp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(err.error)));
    }
    modificarSucursal(sucursal) {
      const url = `${this.baseUrl}/sucursal/${sucursal.id}`;
      return this.http.put(url, sucursal).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => resp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(err.error)));
    }
    eliminarSucursal(idSucursal) {
      const url = `${this.baseUrl}/sucursal/${idSucursal}`;
      return this.http.delete(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => resp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(err.error)));
    }
    static #_ = this.ɵfac = function SucursalService_Factory(t) {
      return new (t || SucursalService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
    };
    static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: SucursalService,
      factory: SucursalService.ɵfac,
      providedIn: 'root'
    });
  }
  return SucursalService;
})();

/***/ })

}]);