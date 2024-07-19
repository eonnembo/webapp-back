"use strict";
(self["webpackChunksistema"] = self["webpackChunksistema"] || []).push([[251],{

/***/ 9193:
/*!*************************************************************!*\
  !*** ./src/app/modulos/clientes/clientes-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesRoutingModule": () => (/* binding */ ClientesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _pages_tabla_clientes_tabla_clientes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/tabla-clientes/tabla-clientes.component */ 1322);
/* harmony import */ var _pages_formulario_clientes_formulario_clientes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/formulario-clientes/formulario-clientes.component */ 7140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);





const routes = [{
  path: '',
  children: [{
    path: '',
    component: _pages_tabla_clientes_tabla_clientes_component__WEBPACK_IMPORTED_MODULE_0__.TablaClientesComponent
  }, {
    path: 'form-clientes',
    component: _pages_formulario_clientes_formulario_clientes_component__WEBPACK_IMPORTED_MODULE_1__.FormularioClientesComponent
  }, {
    path: '**',
    redirectTo: 'auth'
  }]
}];
let ClientesRoutingModule = /*#__PURE__*/(() => {
  class ClientesRoutingModule {
    static #_ = this.ɵfac = function ClientesRoutingModule_Factory(t) {
      return new (t || ClientesRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ClientesRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
  return ClientesRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClientesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 1251:
/*!*****************************************************!*\
  !*** ./src/app/modulos/clientes/clientes.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesModule": () => (/* binding */ ClientesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _clientes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientes-routing.module */ 9193);
/* harmony import */ var _pages_tabla_clientes_tabla_clientes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/tabla-clientes/tabla-clientes.component */ 1322);
/* harmony import */ var _pages_formulario_clientes_formulario_clientes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/formulario-clientes/formulario-clientes.component */ 7140);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var src_app_shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/prime-ng/prime-ng.module */ 3045);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _pages_tabla_reserva_cliente_tabla_reserva_cliente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/tabla-reserva-cliente/tabla-reserva-cliente.component */ 5384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4650);









let ClientesModule = /*#__PURE__*/(() => {
  class ClientesModule {
    static #_ = this.ɵfac = function ClientesModule_Factory(t) {
      return new (t || ClientesModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: ClientesModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _clientes_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientesRoutingModule, src_app_shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_4__.PrimeNgModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
    });
  }
  return ClientesModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ClientesModule, {
    declarations: [_pages_tabla_clientes_tabla_clientes_component__WEBPACK_IMPORTED_MODULE_1__.TablaClientesComponent, _pages_formulario_clientes_formulario_clientes_component__WEBPACK_IMPORTED_MODULE_2__.FormularioClientesComponent, _pages_tabla_reserva_cliente_tabla_reserva_cliente_component__WEBPACK_IMPORTED_MODULE_5__.TablaReservaClienteComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _clientes_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientesRoutingModule, src_app_shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_4__.PrimeNgModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 7140:
/*!*********************************************************************************************!*\
  !*** ./src/app/modulos/clientes/pages/formulario-clientes/formulario-clientes.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormularioClientesComponent": () => (/* binding */ FormularioClientesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 5226);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dynamicdialog */ 4325);
/* harmony import */ var src_app_shared_services_cliente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/cliente.service */ 4445);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 3608);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 5593);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/confirmpopup */ 369);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 1740);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/togglebutton */ 1167);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputmask */ 3520);















function FormularioClientesComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Nombre requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FormularioClientesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FormularioClientesComponent_div_9_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.miFormulario.get("nombre")) == null ? null : tmp_0_0.hasError("required"));
  }
}
function FormularioClientesComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Apellido requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FormularioClientesComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FormularioClientesComponent_div_17_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.miFormulario.get("apellido")) == null ? null : tmp_0_0.hasError("required"));
  }
}
function FormularioClientesComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " DNI requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FormularioClientesComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FormularioClientesComponent_div_25_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.miFormulario.get("dni")) == null ? null : tmp_0_0.hasError("required"));
  }
}
function FormularioClientesComponent_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Fecha de nacimiento requerida. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FormularioClientesComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FormularioClientesComponent_div_33_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.miFormulario.get("fechaNacimiento")) == null ? null : tmp_0_0.hasError("required"));
  }
}
function FormularioClientesComponent_div_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El email no es v\u00E1lido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FormularioClientesComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FormularioClientesComponent_div_41_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r4.miFormulario.get("email")) == null ? null : tmp_0_0.hasError("email"));
  }
}
function FormularioClientesComponent_div_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FormularioClientesComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FormularioClientesComponent_div_42_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r5.miFormulario.get("email")) == null ? null : tmp_0_0.hasError("required"));
  }
}
function FormularioClientesComponent_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Tel\u00E9fono requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FormularioClientesComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FormularioClientesComponent_div_50_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r6.miFormulario.get("telefono")) == null ? null : tmp_0_0.hasError("required"));
  }
}
function FormularioClientesComponent_ng_container_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10)(2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "p-confirmPopup");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p-toggleButton", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function FormularioClientesComponent_ng_container_51_Template_p_toggleButton_onChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.confirm($event, "estado"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function () {
  return {
    "margin": ".5em",
    "width": "9rem"
  };
};
let FormularioClientesComponent = /*#__PURE__*/(() => {
  class FormularioClientesComponent {
    constructor(ref, config, fb, clienteService, confirmationService) {
      this.ref = ref;
      this.config = config;
      this.fb = fb;
      this.clienteService = clienteService;
      this.confirmationService = confirmationService;
      this.miFormulario = this.fb.group({
        id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({
          value: '',
          disabled: false
        }),
        nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({
          value: '',
          disabled: false
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({
          value: '',
          disabled: false
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({
          value: '',
          disabled: false
        }),
        dni: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({
          value: null,
          disabled: false
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        fechaNacimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({
          value: null,
          disabled: false
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({
          value: '',
          disabled: false
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
        telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({
          value: '',
          disabled: false
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({
          value: true,
          disabled: false
        })
      });
      this.edito = false;
    }
    ngOnInit() {
      const codCliente = this.config.data;
      if (codCliente) {
        this.edito = true;
        this.miFormulario.get('dni')?.disable();
        this.clienteService.traerUnCliente(codCliente).subscribe(resp => {
          this.miFormulario.patchValue(resp);
        });
      }
    }
    confirm(event, boton) {
      this.confirmationService.confirm({
        target: event.originalEvent.target,
        message: '¿Cancelar cambio?',
        icon: 'pi pi-exclamation-triangle',
        defaultFocus: 'none',
        accept: () => {
          this.miFormulario.get(boton)?.setValue(!event.checked);
        }
      });
    }
    guardar() {
      if (this.edito) {
        this.miFormulario.get('id')?.enable();
        this.miFormulario.get('dni')?.enable();
        this.clienteService.modificarCliente(this.miFormulario.value).subscribe(resp => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire(resp.msg, '', resp.icon);
          if (resp.ok) {
            this.closeForm();
          }
        });
      } else {
        this.miFormulario.get('id')?.disable();
        this.clienteService.crearCliente(this.miFormulario.value).subscribe(resp => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire(resp.msg, '', resp.icon);
          if (resp.ok) {
            this.closeForm();
          }
        });
      }
    }
    closeForm() {
      this.edito = false;
      this.ref.close();
    }
    static #_ = this.ɵfac = function FormularioClientesComponent_Factory(t) {
      return new (t || FormularioClientesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DynamicDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_cliente_service__WEBPACK_IMPORTED_MODULE_1__.ClienteService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FormularioClientesComponent,
      selectors: [["app-formulario-clientes"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService])],
      decls: 55,
      vars: 16,
      consts: [["autocomplete", "off", 1, "pt-2", 3, "formGroup", "ngSubmit"], [1, "grid"], [1, "col-12", "lg:col-6", "p-3", "m-0"], ["htmlFor", "nombre"], ["pTooltip", "Requerido", "tooltipPosition", "top", 1, "required"], ["pInputText", "", "id", "nombre", "formControlName", "nombre", "placeholder", "Ingrese nombre"], [1, "h-1rem"], ["class", "error-message", 4, "ngIf"], ["htmlFor", "apellido"], ["pInputText", "", "id", "apellido", "formControlName", "apellido", "placeholder", "Ingrese apellido"], [1, "flex", "flex-column", "col-12", "lg:col-6", "p-3", "m-0"], ["htmlFor", "dni"], ["id", "dni", "mask", "99.999.999", "formControlName", "dni", "placeholder", "99.999.999"], ["htmlFor", "fechaNacimiento"], ["formControlName", "fechaNacimiento", "mask", "9999-99-99", "placeholder", "AAAA-MM-DD", "slotChar", "AAAA-MM-DD"], ["htmlFor", "email"], ["pInputText", "", "id", "email", "formControlName", "email", "placeholder", "Ingrese email"], ["htmlFor", "telefono"], ["id", "telefono", "mask", "15 9999 9999", "formControlName", "telefono", "placeholder", "15 9999 9999"], [4, "ngIf"], [1, "text-center", "col-12", "p-3", "m-0"], ["label", "Guardar", "type", "submit", "icon", "pi pi-check", 3, "disabled"], ["label", "Cancelar", "icon", "pi pi-times", "styleClass", "p-button-secondary", 3, "onClick"], [1, "error-message"], ["htmlFor", "estado"], ["formControlName", "estado", "onLabel", "ACTIVO", "offLabel", "INACTIVO", 3, "onChange"]],
      template: function FormularioClientesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FormularioClientesComponent_Template_form_ngSubmit_0_listener() {
            return ctx.guardar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Nombre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, FormularioClientesComponent_div_9_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2)(11, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Apellido");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, FormularioClientesComponent_div_17_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10)(19, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "DNI");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "p-inputMask", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, FormularioClientesComponent_div_25_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 2)(27, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Fecha de nacimiento");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "p-inputMask", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, FormularioClientesComponent_div_33_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 2)(35, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, FormularioClientesComponent_div_41_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, FormularioClientesComponent_div_42_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 2)(44, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Tel\u00E9fono");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "p-inputMask", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, FormularioClientesComponent_div_50_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, FormularioClientesComponent_ng_container_51_Template, 6, 0, "ng-container", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "p-button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p-button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function FormularioClientesComponent_Template_p_button_onClick_54_listener() {
            return ctx.closeForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.miFormulario);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.miFormulario.get("nombre")) == null ? null : tmp_1_0.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.miFormulario.get("apellido")) == null ? null : tmp_2_0.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.miFormulario.get("dni")) == null ? null : tmp_3_0.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.miFormulario.get("fechaNacimiento")) == null ? null : tmp_4_0.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.miFormulario.get("email")) == null ? null : tmp_5_0.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.miFormulario.get("email")) == null ? null : tmp_6_0.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.miFormulario.get("telefono")) == null ? null : tmp_7_0.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edito);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.miFormulario.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](15, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_9__.ConfirmPopup, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_11__.ToggleButton, primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__.InputMask],
      styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    text-align: center;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    background-color: #f2f2f2;\r\n}\r\n\r\n\r\n.cupo-disponible[_ngcontent-%COMP%] {\r\n    background-color: #aaffaa;\r\n    \r\n}\r\n\r\n\r\n.cupo-agotado[_ngcontent-%COMP%] {\r\n    background-color: #ffaaaa;\r\n    \r\n}"]
    });
  }
  return FormularioClientesComponent;
})();

/***/ }),

/***/ 1322:
/*!***********************************************************************************!*\
  !*** ./src/app/modulos/clientes/pages/tabla-clientes/tabla-clientes.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablaClientesComponent": () => (/* binding */ TablaClientesComponent)
/* harmony export */ });
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dynamicdialog */ 4325);
/* harmony import */ var _formulario_clientes_formulario_clientes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../formulario-clientes/formulario-clientes.component */ 7140);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 5226);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_app_shared_services_cliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/cliente.service */ 4445);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ 3608);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 5593);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ 2137);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 1765);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tag */ 6679);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 1740);
/* harmony import */ var _shared_components_tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/tool-bar/tool-bar.component */ 1904);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/footer/footer.component */ 6526);
/* harmony import */ var _shared_pipes_dni_format_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/pipes/dni-format.pipe */ 5793);

















function TablaClientesComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function TablaClientesComponent_ng_template_7_Template_input_input_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r0.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span")(5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TablaClientesComponent_ng_template_7_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.show());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function TablaClientesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "DNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TablaClientesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td")(6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td")(10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "DNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "dniFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td")(15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "td")(19, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "td", 13)(23, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "p-tag", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "td", 13)(27, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TablaClientesComponent_ng_template_9_Template_button_click_27_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const cli_r9 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.show(cli_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TablaClientesComponent_ng_template_9_Template_button_click_28_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const cli_r9 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.eliminar(cli_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const cli_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](cli_r9.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](cli_r9.apellido);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 7, cli_r9.dni));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](cli_r9.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](cli_r9.telefono);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", cli_r9.estado ? "activo" : "inactivo")("severity", ctx_r3.getSeverity(cli_r9.estado));
  }
}
function TablaClientesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No se encontraron registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", 6);
  }
}
const _c0 = function () {
  return {
    "min-width": "20rem"
  };
};
const _c1 = function () {
  return ["nombre", "apellido", "dni", "email"];
};
const _c2 = function () {
  return [10, 25, 50];
};
let TablaClientesComponent = /*#__PURE__*/(() => {
  class TablaClientesComponent {
    constructor(clienteService, dialogService, confirmationService) {
      this.clienteService = clienteService;
      this.dialogService = dialogService;
      this.confirmationService = confirmationService;
      this.clientes = [];
    }
    ngOnInit() {
      this.traerClientes();
    }
    traerClientes() {
      this.subscription = this.clienteService.traerClientes().subscribe(resp => {
        this.clientes = resp.sort((a, b) => b.id - a.id);
      });
    }
    show(codCliente) {
      this.ref = this.dialogService.open(_formulario_clientes_formulario_clientes_component__WEBPACK_IMPORTED_MODULE_0__.FormularioClientesComponent, {
        header: codCliente ? 'Editar cliente' : 'Nuevo cliente',
        width: '70%',
        contentStyle: {
          overflow: 'auto'
        },
        maximizable: true,
        styleClass: 'customer-dialog-form',
        data: codCliente
      });
      this.ref.onClose.subscribe(cliente => {
        this.traerClientes();
      });
    }
    getSeverity(estado) {
      switch (estado) {
        case true:
          return 'success';
        case false:
          return 'danger';
        default:
          return '';
      }
    }
    eliminar(codCli) {
      this.confirmationService.confirm({
        message: '¿Desea eliminar al cliente?',
        header: 'Confirmación',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.clienteService.eliminarCliente(codCli).subscribe(resp => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire(resp.msg, '', resp.icon);
            this.traerClientes();
          });
        }
      });
    }
    ngOnDestroy() {
      if (this.ref) {
        this.ref.close();
      }
      this.subscription.unsubscribe();
    }
    static #_ = this.ɵfac = function TablaClientesComponent_Factory(t) {
      return new (t || TablaClientesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_cliente_service__WEBPACK_IMPORTED_MODULE_2__.ClienteService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__.ConfirmationService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: TablaClientesComponent,
      selectors: [["app-tabla-clientes"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__.DialogService, primeng_api__WEBPACK_IMPORTED_MODULE_8__.ConfirmationService])],
      decls: 13,
      vars: 10,
      consts: [[1, "card"], ["dataKey", "id", "responsiveLayout", "stack", "currentPageReportTemplate", "{first} al {last} de {totalRecords}", 3, "value", "tableStyle", "paginator", "rows", "showCurrentPageReport", "globalFilterFields", "rowsPerPageOptions"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "confirmation"], [1, "flex", "align-items-center", "justify-content-between", "my-0", "py-0"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Buscar...", 3, "input"], ["pButton", "", "pRipple", "", "icon", "pi pi-plus", "pTooltip", "Nuevo cliente", "tooltipPosition", "left", 1, "p-button-success", "mr-2", 3, "click"], [1, "text-center"], [1, "p-column-title"], [1, "uppercase", 3, "value", "severity"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-help", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-help", 3, "click"], [1, "text-center", 2, "color", "grey"]],
      template: function TablaClientesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-tool-bar");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Clientes");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 0)(5, "p-table", 1, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, TablaClientesComponent_ng_template_7_Template, 6, 0, "ng-template", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, TablaClientesComponent_ng_template_8_Template, 14, 0, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, TablaClientesComponent_ng_template_9_Template, 29, 9, "ng-template", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, TablaClientesComponent_ng_template_10_Template, 3, 1, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "app-footer")(12, "p-confirmDialog", 7);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.clientes)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c0))("paginator", ctx.clientes.length > 10)("rows", 5)("showCurrentPageReport", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c1))("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c2));
        }
      },
      dependencies: [primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.Tooltip, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialog, primeng_table__WEBPACK_IMPORTED_MODULE_12__.Table, primeng_tag__WEBPACK_IMPORTED_MODULE_13__.Tag, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, _shared_components_tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_3__.ToolBarComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _shared_pipes_dni_format_pipe__WEBPACK_IMPORTED_MODULE_5__.DniFormatPipe],
      styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    border: 1px solid var(--surface-border) !important;\r\n    border-radius: 12px !important;\r\n}"]
    });
  }
  return TablaClientesComponent;
})();

/***/ })

}]);