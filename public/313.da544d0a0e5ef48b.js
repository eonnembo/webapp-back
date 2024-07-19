"use strict";
(self["webpackChunksistema"] = self["webpackChunksistema"] || []).push([[313],{

/***/ 4290:
/*!************************************************************!*\
  !*** ./src/app/protected/dashboard/dashboard.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var src_app_shared_services_cliente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/cliente.service */ 4445);
/* harmony import */ var src_app_shared_services_pago_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/pago.service */ 7154);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _shared_components_tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/tool-bar/tool-bar.component */ 1904);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ 6526);








function DashboardComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cliente_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", cliente_r1.nombre, " ", cliente_r1.apellido, "");
  }
}
const _c0 = function () {
  return {
    width: "2.5rem",
    height: "2.5rem"
  };
};
let DashboardComponent = /*#__PURE__*/(() => {
  class DashboardComponent {
    get usuario() {
      return this.authService.usuario;
    }
    constructor(router, authService, clienteService, pagoService) {
      this.router = router;
      this.authService = authService;
      this.clienteService = clienteService;
      this.pagoService = pagoService;
      this.currentDate = new Date();
      this.monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      this.currentMonthName = this.monthNames[this.currentDate.getMonth()];
      this.currentMonth = this.currentDate.getMonth() + 1; // Sumamos 1 porque los meses en JavaScript son base 0 (enero = 0, febrero = 1, etc.)
      this.currentDay = this.currentDate.getDate();
    }
    ngOnInit() {
      this.clienteService.traerClientes().subscribe(resp => {
        if (Array.isArray(resp)) {
          this.totClientes = resp.length;
          this.totCliActivos = resp.filter(cli => cli.estado).length;
          this.totCliInactivos = resp.filter(cli => !cli.estado).length;
          const clientesConFechaNacimiento = resp.map(cli => ({
            ...cli,
            fechaNacimiento: new Date(cli.fechaNacimiento)
          }));
          this.clientesCumpleanosHoy = clientesConFechaNacimiento.filter(cli => {
            const fechaNacimiento = cli.fechaNacimiento;
            return fechaNacimiento.getMonth() + 1 === this.currentMonth && fechaNacimiento.getDate() + 1 === this.currentDay;
          });
        }
      });
      this.pagoService.traerPagos().subscribe(resp => {
        if (Array.isArray(resp)) {
          // Obtener el mes y año actual
          const currentDate = new Date();
          const currentMonth = currentDate.getMonth() + 1; // Sumamos 1 porque los meses son indexados desde 0
          const currentYear = currentDate.getFullYear();
          // Filtrar los pagos por mes y año actual
          const filteredPayments = resp.filter(pago => {
            const updatedAtDate = new Date(pago.updatedAt);
            return updatedAtDate.getMonth() + 1 === currentMonth && updatedAtDate.getFullYear() === currentYear;
          });
          // Sumar los importes
          const totalImporte = filteredPayments.reduce((total, pago) => total + pago.importe, 0);
          this.sumaPagos = totalImporte;
        }
      });
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      this.data = {
        labels: ['Activos', 'Inactivos', 'Deudores'],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }]
      };
      this.options = {
        cutout: '50%',
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        }
      };
    }
    static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_cliente_service__WEBPACK_IMPORTED_MODULE_1__.ClienteService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_pago_service__WEBPACK_IMPORTED_MODULE_2__.PagoService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 58,
      vars: 16,
      consts: [[1, "card"], [1, "grid", "m-0", "p-0"], [1, "col-12", "md:col-6", "sm:col-6", "lg:col-3", "p-2", "m-0"], [1, "card", "card-small"], [1, "flex", "justify-content-between", "mb-3"], [1, "block", "text-500", "font-medium", "mb-3"], [1, "text-900", "font-medium", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-blue-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-users", "text-blue-500", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-cyan-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-thumbs-up", "text-cyan-500", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-red-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-thumbs-down", "text-red-500", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-green-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-dollar", "text-green-500", "text-xl"], [1, "text-green-500", "font-medium"], [1, "col-12", "md:col-12", "sm:col-12", "lg:col-6", "p-2", "m-0"], [1, "card", "relative"], [1, "block", "text-500", "font-medium", "mb-0"], [1, "block", "text-500", "font-medium", "mt-0"], ["src", "/assets/images/torta.png", "alt", "Torta de cumplea\u00F1os", 2, "opacity", "0.1", "width", "100%", "max-width", "200px", "margin", "0 auto"], [1, "absolute", "top-1/2", "left-1/2", "transform", "-translate-x-1/2", "-translate-y-1/2", "text-orange-400", "font-medium"], ["style", "text-shadow: 1px 1px 2px black", 4, "ngFor", "ngForOf"], [2, "text-shadow", "1px 1px 2px black"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-tool-bar");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 0)(5, "div", 1)(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "div")(10, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Clientes");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 2)(17, "div", 3)(18, "div", 4)(19, "div")(20, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Activos");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 2)(27, "div", 3)(28, "div", 4)(29, "div")(30, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Inactivos");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 2)(37, "div", 3)(38, "div", 4)(39, "div")(40, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 16)(49, "div", 17)(50, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "\u00A1Cumplea\u00F1os de hoy!");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, DashboardComponent_span_56_Template, 3, 2, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "app-footer");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.totClientes);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.totCliActivos);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.totCliInactivos);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", ctx.sumaPagos, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Mes de ", ctx.currentMonthName, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx.currentDay, " de ", ctx.currentMonthName, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.clientesCumpleanosHoy);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _shared_components_tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_3__.ToolBarComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent],
      styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    \r\n    border: 1px solid var(--surface-border);\r\n    border-radius: 12px;\r\n    padding: 2rem;\r\n    overflow: hidden;\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n.card-small[_ngcontent-%COMP%] {\r\n    max-height: 230px !important;\r\n}\r\n.card-content[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n    \r\n}"]
    });
  }
  return DashboardComponent;
})();

/***/ }),

/***/ 1056:
/*!*******************************************************!*\
  !*** ./src/app/protected/protected-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtectedRoutingModule": () => (/* binding */ ProtectedRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);




const routes = [{
  path: '',
  children: [{
    path: '',
    component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
  }, {
    path: '**',
    redirectTo: 'auth'
  }]
}];
let ProtectedRoutingModule = /*#__PURE__*/(() => {
  class ProtectedRoutingModule {
    static #_ = this.ɵfac = function ProtectedRoutingModule_Factory(t) {
      return new (t || ProtectedRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ProtectedRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return ProtectedRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProtectedRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9313:
/*!***********************************************!*\
  !*** ./src/app/protected/protected.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtectedModule": () => (/* binding */ ProtectedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _protected_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./protected-routing.module */ 1056);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4290);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/prime-ng/prime-ng.module */ 3045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4650);






let ProtectedModule = /*#__PURE__*/(() => {
  class ProtectedModule {
    static #_ = this.ɵfac = function ProtectedModule_Factory(t) {
      return new (t || ProtectedModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: ProtectedModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _protected_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProtectedRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_3__.PrimeNgModule]
    });
  }
  return ProtectedModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProtectedModule, {
    declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _protected_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProtectedRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_3__.PrimeNgModule]
  });
})();

/***/ }),

/***/ 4445:
/*!****************************************************!*\
  !*** ./src/app/shared/services/cliente.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClienteService": () => (/* binding */ ClienteService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4004);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 262);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 529);





let ClienteService = /*#__PURE__*/(() => {
  class ClienteService {
    get cliente() {
      return {
        ...this._cliente
      };
    }
    constructor(http) {
      this.http = http;
      this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    }
    traerClientes() {
      const url = `${this.baseUrl}/cliente`;
      return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
        // this._cliente = resp;
        return resp;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false)));
    }
    traerUnCliente(idCliente) {
      const url = `${this.baseUrl}/cliente/${idCliente}`;
      return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
        // this._cliente = resp;
        return resp;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false)));
    }
    crearCliente(cliente) {
      const url = `${this.baseUrl}/cliente`;
      return this.http.post(url, cliente).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => resp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(err.error)));
    }
    modificarCliente(cliente) {
      const url = `${this.baseUrl}/cliente/${cliente.id}`;
      return this.http.put(url, cliente).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => resp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(err.error)));
    }
    eliminarCliente(codCli) {
      const url = `${this.baseUrl}/cliente/${codCli}`;
      return this.http.delete(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => resp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(err.error)));
    }
    static #_ = this.ɵfac = function ClienteService_Factory(t) {
      return new (t || ClienteService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
    };
    static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: ClienteService,
      factory: ClienteService.ɵfac,
      providedIn: 'root'
    });
  }
  return ClienteService;
})();

/***/ })

}]);