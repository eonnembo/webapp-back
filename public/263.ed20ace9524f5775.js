"use strict";
(self["webpackChunksistema"] = self["webpackChunksistema"] || []).push([[263],{

/***/ 5802:
/*!*********************************************************************************************!*\
  !*** ./src/app/modulos/usuarios/pages/formulario-usuarios/formulario-usuarios.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormularioUsuariosComponent": () => (/* binding */ FormularioUsuariosComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 805);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 5226);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dynamicdialog */ 4325);
/* harmony import */ var src_app_shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/usuario.service */ 5948);
/* harmony import */ var src_app_shared_services_sucursal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/sucursal.service */ 248);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */ 3608);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 5593);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/confirmpopup */ 369);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 1740);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 2210);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/togglebutton */ 1167);
















function FormularioUsuariosComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Nombre de usuario requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FormularioUsuariosComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " El nombre de usuario debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FormularioUsuariosComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormularioUsuariosComponent_div_9_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FormularioUsuariosComponent_div_9_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.miFormulario.get("usuario")) == null ? null : tmp_0_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.miFormulario.get("usuario")) == null ? null : tmp_1_0.hasError("minlength"));
  }
}
function FormularioUsuariosComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " El email no es v\u00E1lido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FormularioUsuariosComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormularioUsuariosComponent_div_15_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.miFormulario.get("email")) == null ? null : tmp_0_0.hasError("email"));
  }
}
function FormularioUsuariosComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Nombre requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FormularioUsuariosComponent_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " El nombre debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FormularioUsuariosComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormularioUsuariosComponent_div_23_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FormularioUsuariosComponent_div_23_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.miFormulario.get("nombre")) == null ? null : tmp_0_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r2.miFormulario.get("nombre")) == null ? null : tmp_1_0.hasError("minlength"));
  }
}
function FormularioUsuariosComponent_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Perfil requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FormularioUsuariosComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormularioUsuariosComponent_div_35_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.miFormulario.get("idPerfil")) == null ? null : tmp_0_0.hasError("required"));
  }
}
function FormularioUsuariosComponent_div_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Sucursal requerida. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FormularioUsuariosComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormularioUsuariosComponent_div_43_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r4.miFormulario.get("idSucursal")) == null ? null : tmp_0_0.hasError("required"));
  }
}
function FormularioUsuariosComponent_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 23)(2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "p-confirmPopup");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p-toggleButton", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function FormularioUsuariosComponent_ng_container_44_Template_p_toggleButton_onChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.confirm($event, "estado"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 23)(7, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u00BFCambio de contrase\u00F1a?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "p-confirmPopup");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p-toggleButton", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function FormularioUsuariosComponent_ng_container_44_Template_p_toggleButton_onChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.confirm($event, "cambiarPassword"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function () {
  return {
    "margin": ".5em",
    "width": "9rem"
  };
};
let FormularioUsuariosComponent = /*#__PURE__*/(() => {
  class FormularioUsuariosComponent {
    constructor(fb, ref, config, confirmationService, usuarioService, sucursalService) {
      this.fb = fb;
      this.ref = ref;
      this.config = config;
      this.confirmationService = confirmationService;
      this.usuarioService = usuarioService;
      this.sucursalService = sucursalService;
      this.miFormulario = this.fb.group({
        id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
          value: '',
          disabled: false
        }),
        usuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
          value: '',
          disabled: false
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4)]),
        nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
          value: '',
          disabled: false
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4)]),
        apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
          value: '',
          disabled: false
        }),
        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
          value: '',
          disabled: false
        }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email),
        estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
          value: true,
          disabled: false
        }),
        cambiarPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
          value: true,
          disabled: false
        }),
        idPerfil: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
          value: null,
          disabled: false
        }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        idSucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
          value: null,
          disabled: false
        }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
      });
      this.edito = false;
      this.perfiles = [{
        id: 1,
        nombre: 'Administrador'
      }, {
        id: 2,
        nombre: 'Empleado'
      }];
      this.sucursalService.traerSucursales().subscribe(resp => {
        this.sucursales = resp.filter(item => item.estado);
      });
    }
    ngOnInit() {
      const codUsuario = this.config.data;
      if (codUsuario) {
        this.edito = true;
        this.miFormulario.get('usuario')?.disable();
        this.miFormulario.get('idPerfil')?.disable();
        this.miFormulario.get('idEmpresa')?.disable();
        this.usuarioService.traerUnUsuario(codUsuario).subscribe(resp => {
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
        // Habilita los controles nuevamente
        this.miFormulario.get('usuario')?.enable();
        this.miFormulario.get('idPerfil')?.enable();
        this.miFormulario.get('idEmpresa')?.enable();
        this.usuarioService.modificarUsuario(this.miFormulario.value).subscribe(resp => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire(resp.msg, '', resp.icon);
          if (resp.ok) {
            this.closeForm();
          }
        });
      } else {
        this.miFormulario.get('id')?.disable();
        this.usuarioService.crearUsuario(this.miFormulario.value).subscribe(resp => {
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
    static #_ = this.ɵfac = function FormularioUsuariosComponent_Factory(t) {
      return new (t || FormularioUsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__.DynamicDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_sucursal_service__WEBPACK_IMPORTED_MODULE_2__.SucursalService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: FormularioUsuariosComponent,
      selectors: [["app-formulario-usuarios"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_6__.ConfirmationService])],
      decls: 48,
      vars: 20,
      consts: [["autocomplete", "off", 1, "pt-2", 3, "formGroup", "ngSubmit"], [1, "grid"], [1, "col-12", "lg:col-6", "p-3", "m-0"], ["htmlFor", "usuario"], ["pTooltip", "Requerido", "tooltipPosition", "top", 1, "required"], ["pInputText", "", "id", "usuario", "formControlName", "usuario", "placeholder", "Ingrese usuario"], [1, "h-1rem"], ["class", "error-message", 4, "ngIf"], ["htmlFor", "email"], ["pInputText", "", "id", "email", "formControlName", "email", "placeholder", "Ingrese email"], ["htmlFor", "nombre"], ["pInputText", "", "id", "nombre", "formControlName", "nombre", "placeholder", "Ingrese nombre"], ["htmlFor", "apellido"], ["pInputText", "", "id", "apellido", "formControlName", "apellido", "placeholder", "Ingrese apellido"], ["htmlFor", "perfil"], ["formControlName", "idPerfil", "optionLabel", "nombre", "optionValue", "id", "filterBy", "nombre", "placeholder", "Seleccione perfil", "appendTo", "body", "emptyFilterMessage", "Sin resultados", "emptyMessage", "Sin resultados", 3, "options", "filter", "showClear"], ["htmlFor", "idSucursal"], ["formControlName", "idSucursal", "optionLabel", "nombre", "optionValue", "id", "filterBy", "nombre", "placeholder", "Seleccione sucursal", "appendTo", "body", "emptyFilterMessage", "Sin resultados", "emptyMessage", "Sin resultados", 3, "options", "filter", "showClear"], [4, "ngIf"], [1, "text-center", "col-12", "p-3", "m-0"], ["label", "Guardar", "type", "submit", "icon", "pi pi-check", 3, "disabled"], ["label", "Cancelar", "icon", "pi pi-times", "styleClass", "p-button-secondary", 3, "onClick"], [1, "error-message"], [1, "flex", "flex-column", "col-12", "lg:col-6", "p-3", "m-0"], ["htmlFor", "estado"], ["formControlName", "estado", "onLabel", "ACTIVO", "offLabel", "INACTIVO", 3, "onChange"], ["htmlFor", "cambiarPassword"], ["formControlName", "cambiarPassword", "onLabel", "S\u00CD", "offLabel", "NO", 3, "onChange"]],
      template: function FormularioUsuariosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function FormularioUsuariosComponent_Template_form_ngSubmit_0_listener() {
            return ctx.guardar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Nombre de usuario");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, FormularioUsuariosComponent_div_9_Template, 3, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 2)(11, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, FormularioUsuariosComponent_div_15_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 2)(17, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Nombre");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, FormularioUsuariosComponent_div_23_Template, 3, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 2)(25, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Apellido");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 2)(29, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Perfil del sistema");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "p-dropdown", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, FormularioUsuariosComponent_div_35_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 2)(37, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Sucursal");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "p-dropdown", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, FormularioUsuariosComponent_div_43_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, FormularioUsuariosComponent_ng_container_44_Template, 11, 0, "ng-container", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "p-button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "p-button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function FormularioUsuariosComponent_Template_p_button_onClick_47_listener() {
            return ctx.closeForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_3_0;
          let tmp_7_0;
          let tmp_11_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.miFormulario);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.miFormulario.get("usuario")) == null ? null : tmp_1_0.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.miFormulario.get("email")) == null ? null : tmp_2_0.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.miFormulario.get("nombre")) == null ? null : tmp_3_0.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.perfiles)("filter", true)("showClear", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.miFormulario.get("idPerfil")) == null ? null : tmp_7_0.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.sucursales)("filter", true)("showClear", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.miFormulario.get("idSucursal")) == null ? null : tmp_11_0.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.edito);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.miFormulario.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__.Tooltip, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_10__.ConfirmPopup, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.Dropdown, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_13__.ToggleButton]
    });
  }
  return FormularioUsuariosComponent;
})();

/***/ }),

/***/ 5911:
/*!***********************************************************************************!*\
  !*** ./src/app/modulos/usuarios/pages/tabla-usuarios/tabla-usuarios.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablaUsuariosComponent": () => (/* binding */ TablaUsuariosComponent)
/* harmony export */ });
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dynamicdialog */ 4325);
/* harmony import */ var _formulario_usuarios_formulario_usuarios_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../formulario-usuarios/formulario-usuarios.component */ 5802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_app_shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/usuario.service */ 5948);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ 3608);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 805);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 5593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 1765);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tag */ 6679);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 1740);
/* harmony import */ var _shared_components_tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/tool-bar/tool-bar.component */ 1904);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/footer/footer.component */ 6526);













function TablaUsuariosComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function TablaUsuariosComponent_ng_template_7_Template_input_input_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span")(5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TablaUsuariosComponent_ng_template_7_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.show());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function TablaUsuariosComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TablaUsuariosComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td")(6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td")(10, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td")(14, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td", 12)(18, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "p-tag", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 12)(22, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "p-tag", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td", 12)(26, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TablaUsuariosComponent_ng_template_9_Template_button_click_26_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const user_r9 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.show(user_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r9.usuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r9.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r9.apellido ? user_r9.apellido : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r9.email ? user_r9.email : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r3.getNombrePerfil(user_r9.idPerfil))("severity", ctx_r3.getSeverity(user_r9.perfil));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", user_r9.estado ? "ACTIVO" : "INACTIVO")("severity", ctx_r3.getSeverity(user_r9.estado));
  }
}
function TablaUsuariosComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No se encontraron registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", 7);
  }
}
const _c0 = function () {
  return {
    "min-width": "20rem"
  };
};
const _c1 = function () {
  return ["nombre", "apellido", "email", "estado"];
};
const _c2 = function () {
  return [10, 25, 50];
};
let TablaUsuariosComponent = /*#__PURE__*/(() => {
  class TablaUsuariosComponent {
    constructor(usuarioService, dialogService) {
      this.usuarioService = usuarioService;
      this.dialogService = dialogService;
      this.usuarios = [];
      this.perfiles = [{
        id: 1,
        nombre: 'Administrador'
      }, {
        id: 2,
        nombre: 'Empleado'
      }];
    }
    ngOnInit() {
      this.traerUsuarios();
    }
    traerUsuarios() {
      this.subscription = this.usuarioService.traerUsuarios().subscribe(resp => {
        this.usuarios = resp.sort((a, b) => b.id - a.id);
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
    getNombrePerfil(idPerfil) {
      const nombre = this.perfiles.filter(el => el.id === idPerfil);
      return nombre[0].nombre;
    }
    show(codUsuario) {
      this.ref = this.dialogService.open(_formulario_usuarios_formulario_usuarios_component__WEBPACK_IMPORTED_MODULE_0__.FormularioUsuariosComponent, {
        header: codUsuario ? 'Editar usuario' : 'Nuevo usuario',
        width: '70%',
        contentStyle: {
          overflow: 'auto'
        },
        maximizable: true,
        styleClass: 'customer-dialog-form',
        data: codUsuario
      });
      this.ref.onClose.subscribe(() => {
        this.traerUsuarios();
      });
    }
    ngOnDestroy() {
      if (this.ref) {
        this.ref.close();
      }
      this.subscription.unsubscribe();
    }
    static #_ = this.ɵfac = function TablaUsuariosComponent_Factory(t) {
      return new (t || TablaUsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__.DialogService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: TablaUsuariosComponent,
      selectors: [["app-tabla-usuarios"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__.DialogService])],
      decls: 12,
      vars: 10,
      consts: [[1, "card"], ["dataKey", "id", "responsiveLayout", "stack", "currentPageReportTemplate", "{first} al {last} de {totalRecords}", 3, "value", "tableStyle", "paginator", "rows", "showCurrentPageReport", "globalFilterFields", "rowsPerPageOptions"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "flex", "align-items-center", "justify-content-between", "my-0", "py-0"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Buscar...", 3, "input"], ["pButton", "", "pRipple", "", "icon", "pi pi-plus", "pTooltip", "Nuevo usuario", "tooltipPosition", "left", 1, "p-button-success", "mr-2", 3, "click"], [1, "text-center"], [1, "p-column-title"], [1, "uppercase", 3, "value", "severity"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-help", 3, "click"], [1, "text-center", 2, "color", "grey"]],
      template: function TablaUsuariosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-tool-bar");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Usuarios");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 0)(5, "p-table", 1, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TablaUsuariosComponent_ng_template_7_Template, 6, 0, "ng-template", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TablaUsuariosComponent_ng_template_8_Template, 14, 0, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, TablaUsuariosComponent_ng_template_9_Template, 27, 8, "ng-template", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, TablaUsuariosComponent_ng_template_10_Template, 3, 1, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "app-footer");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.usuarios)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c0))("paginator", ctx.usuarios.length > 10)("rows", 5)("showCurrentPageReport", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c1))("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c2));
        }
      },
      dependencies: [primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.Tooltip, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_tag__WEBPACK_IMPORTED_MODULE_10__.Tag, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, _shared_components_tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_2__.ToolBarComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
      styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    border: 1px solid var(--surface-border) !important;\r\n    border-radius: 12px !important;\r\n}"]
    });
  }
  return TablaUsuariosComponent;
})();

/***/ }),

/***/ 754:
/*!*************************************************************!*\
  !*** ./src/app/modulos/usuarios/usuarios-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuariosRoutingModule": () => (/* binding */ UsuariosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _pages_tabla_usuarios_tabla_usuarios_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/tabla-usuarios/tabla-usuarios.component */ 5911);
/* harmony import */ var _pages_formulario_usuarios_formulario_usuarios_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/formulario-usuarios/formulario-usuarios.component */ 5802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);





const routes = [{
  path: '',
  children: [{
    path: '',
    component: _pages_tabla_usuarios_tabla_usuarios_component__WEBPACK_IMPORTED_MODULE_0__.TablaUsuariosComponent
  }, {
    path: 'form-usuarios',
    component: _pages_formulario_usuarios_formulario_usuarios_component__WEBPACK_IMPORTED_MODULE_1__.FormularioUsuariosComponent
  }, {
    path: '**',
    redirectTo: 'auth'
  }]
}];
let UsuariosRoutingModule = /*#__PURE__*/(() => {
  class UsuariosRoutingModule {
    static #_ = this.ɵfac = function UsuariosRoutingModule_Factory(t) {
      return new (t || UsuariosRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UsuariosRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
  return UsuariosRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UsuariosRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 9263:
/*!*****************************************************!*\
  !*** ./src/app/modulos/usuarios/usuarios.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuariosModule": () => (/* binding */ UsuariosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuarios-routing.module */ 754);
/* harmony import */ var src_app_shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/prime-ng/prime-ng.module */ 3045);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _pages_tabla_usuarios_tabla_usuarios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/tabla-usuarios/tabla-usuarios.component */ 5911);
/* harmony import */ var _pages_formulario_usuarios_formulario_usuarios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/formulario-usuarios/formulario-usuarios.component */ 5802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4650);








let UsuariosModule = /*#__PURE__*/(() => {
  class UsuariosModule {
    static #_ = this.ɵfac = function UsuariosModule_Factory(t) {
      return new (t || UsuariosModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: UsuariosModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsuariosRoutingModule, src_app_shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_1__.PrimeNgModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
  return UsuariosModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UsuariosModule, {
    declarations: [_pages_tabla_usuarios_tabla_usuarios_component__WEBPACK_IMPORTED_MODULE_3__.TablaUsuariosComponent, _pages_formulario_usuarios_formulario_usuarios_component__WEBPACK_IMPORTED_MODULE_4__.FormularioUsuariosComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsuariosRoutingModule, src_app_shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_1__.PrimeNgModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 5948:
/*!****************************************************!*\
  !*** ./src/app/shared/services/usuario.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioService": () => (/* binding */ UsuarioService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4004);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 262);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 529);





let UsuarioService = /*#__PURE__*/(() => {
  class UsuarioService {
    get usuario() {
      return {
        ...this._usuario
      };
    }
    constructor(http) {
      this.http = http;
      this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    }
    traerUsuarios() {
      const url = `${this.baseUrl}/usuario`;
      return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
        // this._empresa = resp;
        return resp;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false)));
    }
    traerUnUsuario(idUsuario) {
      const url = `${this.baseUrl}/usuario/${idUsuario}`;
      return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
        this._usuario = resp;
        return resp;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false)));
    }
    crearUsuario(usuario) {
      const url = `${this.baseUrl}/usuario`;
      return this.http.post(url, usuario).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => resp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(err.error)));
    }
    modificarUsuario(usuario) {
      const url = `${this.baseUrl}/usuario/${usuario.id}`;
      return this.http.put(url, usuario).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => resp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(err.error)));
    }
    static #_ = this.ɵfac = function UsuarioService_Factory(t) {
      return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
    };
    static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: UsuarioService,
      factory: UsuarioService.ɵfac,
      providedIn: 'root'
    });
  }
  return UsuarioService;
})();

/***/ })

}]);