"use strict";
(self["webpackChunksistema"] = self["webpackChunksistema"] || []).push([[157],{

/***/ 5384:
/*!*************************************************************************************************!*\
  !*** ./src/app/modulos/clientes/pages/tabla-reserva-cliente/tabla-reserva-cliente.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablaReservaClienteComponent": () => (/* binding */ TablaReservaClienteComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 805);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 5226);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dynamicdialog */ 4325);
/* harmony import */ var src_app_shared_services_dias_horarios_sucursal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/dias-horarios-sucursal.service */ 4449);
/* harmony import */ var src_app_shared_services_servicios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/servicios.service */ 6103);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 5593);









function TablaReservaClienteComponent_th_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dia_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](dia_r2);
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    "cupo-disponible": a0,
    "cupo-agotado": a1,
    "celda-seleccionada": a2
  };
};
function TablaReservaClienteComponent_tr_57_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TablaReservaClienteComponent_tr_57_td_3_Template_td_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const dia_r5 = restoredCtx.$implicit;
      const hora_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.asignarHorasDiasCupo(dia_r5, hora_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dia_r5 = ctx.$implicit;
    const hora_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c0, ctx_r4.getCupoHora(dia_r5, hora_r3) > 0, ctx_r4.getCupoHora(dia_r5, hora_r3) === 0, ctx_r4.isCellSelected(dia_r5, hora_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.getCupoHora(dia_r5, hora_r3), " ");
  }
}
function TablaReservaClienteComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TablaReservaClienteComponent_tr_57_td_3_Template, 2, 6, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hora_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", hora_r3, " hs.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.diasDisponibles);
  }
}
const _c1 = function () {
  return {
    "margin": ".5em",
    "width": "9rem"
  };
};
let TablaReservaClienteComponent = /*#__PURE__*/(() => {
  class TablaReservaClienteComponent {
    constructor(ref, config, confirmationService, diasHorariosSucursalService, serviciosService) {
      this.ref = ref;
      this.config = config;
      this.confirmationService = confirmationService;
      this.diasHorariosSucursalService = diasHorariosSucursalService;
      this.serviciosService = serviciosService;
      this.diasAsistencia = 0;
      this.plazoValidez = 0;
      this.dataDiasHorarios = [];
      this.cambiosDataDiasHorarios = [];
    }
    ngOnInit() {
      this.dataDiasHorarios = this.config.data.diasHorarios;
      this.diasHorariosSucursalService.traerDiasHorariosSucursal(this.config.data.idSucursal).subscribe(resp => {
        this.diasHorasSucursal = resp;
        this.originaldiasHorasSucursal = JSON.parse(JSON.stringify(resp));
        this.plazoValidez = resp[0].plazoValidez;
        this.diasDisponibles = Array.from(new Set(this.diasHorasSucursal.map(item => item.dias)));
        this.horasDisponibles = Array.from(new Set(this.diasHorasSucursal.map(item => item.horas)));
      });
    }
    getCupoHora(dia, hora) {
      const item = this.diasHorasSucursal.find(item => item.dias === dia && item.horas === hora);
      return item ? item.cupoHora : 0;
    }
    asignarHorasDiasCupo(dia, hora) {
      const item = this.diasHorasSucursal.find(item => item.dias === dia && item.horas === hora);
      if (item) {
        const dataArray = Object.values(this.dataDiasHorarios);
        const hasRestadoCupo = dataArray.some(dataItem => dataItem.id === item.id);
        const elementoEncontrado = this.cambiosDataDiasHorarios?.find(data => data.id === item.id);
        if (!elementoEncontrado) {
          this.cambiosDataDiasHorarios.push(item);
        } else {
          this.cambiosDataDiasHorarios = this.cambiosDataDiasHorarios.filter(dataItem => dataItem.id !== item.id);
          this.cambiosDataDiasHorarios.push(item);
        }
        if (!hasRestadoCupo) {
          // No se ha restado el cupoHora, permitir la suma solo si hay días de asistencia disponibles
          if (this.diasAsistencia > 0) {
            item.cupoHora++;
            this.diasAsistencia--;
            this.dataDiasHorarios.push({
              id: item.id,
              dia: item.dias,
              hora: item.horas,
              cupoHora: 1
            });
          }
        } else {
          if (item.cupoHora > 0) {
            item.cupoHora--;
            this.diasAsistencia++;
            // Elimina el registro de dataHorariosDias para permitir futuras restas
            this.dataDiasHorarios = this.dataDiasHorarios.filter(dataItem => dataItem.id !== item.id);
          }
        }
      }
    }
    isCellSelected(dia, hora) {
      const dataArray = Object.values(this.dataDiasHorarios);
      const isSelected = dataArray.some(selectedItem => selectedItem.dia === dia && selectedItem.hora === hora);
      return isSelected;
      // console.log("😏 ~ isCellSelected ~ this.dataDiasHorarios:", this.dataDiasHorarios)
      // const dataArray = Object.values(this.dataDiasHorarios);
      // return dataArray.some((selectedItem: any) => selectedItem.dia === dia && selectedItem.hora === hora);
      // return this.dataDiasHorarios.some((selectedItem: any) => selectedItem.dia === dia && selectedItem.hora === hora);
    }

    trackByHora(index, item) {
      return item; // o algún identificador único
    }

    trackByDia(index, item) {
      return item; // o algún identificador único
    }

    confirmarCambiosCupo() {
      this.idServicio = this.config.data.id;
      const newCambioDataHorasDias = this.cambiosDataDiasHorarios.map(el => {
        return {
          id: el.id,
          cupoHora: el.cupoHora,
          dia: el.dias,
          hora: el.horas
        };
      });
      this.serviciosService.modificarServicioDiasHorarios({
        id: this.idServicio,
        updDiasHorarios: newCambioDataHorasDias,
        diasHorarios: this.dataDiasHorarios
      }).subscribe(resp => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire(resp.msg, '', resp.icon);
        if (resp.ok) {
          this.closeForm();
        }
      });
    }
    closeForm() {
      this.ref.close();
    }
    static #_ = this.ɵfac = function TablaReservaClienteComponent_Factory(t) {
      return new (t || TablaReservaClienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DynamicDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_dias_horarios_sucursal_service__WEBPACK_IMPORTED_MODULE_1__.DiasHorariosSucursalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_servicios_service__WEBPACK_IMPORTED_MODULE_2__.ServiciosService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: TablaReservaClienteComponent,
      selectors: [["app-tabla-reserva-cliente"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService])],
      decls: 60,
      vars: 14,
      consts: [[1, "col-12", "px-0", "mx-0", "mb-3", "w-100"], [1, "data-box"], [1, "data-item"], [1, "data-label"], [1, "data-value"], [1, "flex", "justify-content-between", "legend"], [1, "legend-item"], [1, "legend-color", 2, "background-color", "#ffaaaa"], [1, "legend-code"], [1, "legend-color", 2, "background-color", "#aaffaa"], [1, "legend-color", 2, "background-color", "#8bcae7"], [4, "ngFor", "ngForOf"], [1, "text-center", "col-12", "p-3", "m-0"], ["label", "Confirmar", 3, "disabled", "onClick"], ["class", "cursor-pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "cursor-pointer", 3, "ngClass", "click"]],
      template: function TablaReservaClienteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Nombre:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2)(8, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Apellido:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 2)(13, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "DNI:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 2)(18, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Email:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 2)(23, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Tel\u00E9fono:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 2)(28, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Plan:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 2)(33, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Descripci\u00F3n del plan:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 5)(38, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Sin asignar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Asignados ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Seleccionado ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "table")(51, "thead")(52, "tr")(53, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, TablaReservaClienteComponent_th_55_Template, 2, 1, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, TablaReservaClienteComponent_tr_57_Template, 4, 2, "tr", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 12)(59, "p-button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function TablaReservaClienteComponent_Template_p_button_onClick_59_listener() {
            return ctx.confirmarCambiosCupo();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.config.data.cliente.nombre);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.config.data.cliente.apellido);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.config.data.cliente.dni);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.config.data.cliente.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.config.data.cliente.telefono);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.config.data.plan.nombre);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.config.data.plan.descripcion);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Resta ", ctx.diasAsistencia == 1 ? ctx.diasAsistencia + " d\u00EDa" : ctx.diasAsistencia + " d\u00EDas", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.diasDisponibles);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.horasDisponibles);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.diasAsistencia !== 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button],
      styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    text-align: center;\r\n    border: 1px solid #ddd;\r\n    width: 100px;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    background-color: #f2f2f2;\r\n}\r\n\r\n\r\n.cupo-disponible[_ngcontent-%COMP%] {\r\n    background-color: #aaffaa;\r\n    \r\n}\r\n\r\n\r\n.cupo-agotado[_ngcontent-%COMP%] {\r\n    background-color: #ffaaaa;\r\n    \r\n}\r\n\r\n.celda-seleccionada[_ngcontent-%COMP%] {\r\n    background-color: #8bcae7 !important; \r\n}\r\n\r\n.grid[_ngcontent-%COMP%] {\r\n    display: flex !important;\r\n    justify-content: center !important;\r\n}"]
    });
  }
  return TablaReservaClienteComponent;
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

/***/ }),

/***/ 4449:
/*!*******************************************************************!*\
  !*** ./src/app/shared/services/dias-horarios-sucursal.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiasHorariosSucursalService": () => (/* binding */ DiasHorariosSucursalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4004);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 262);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 529);





let DiasHorariosSucursalService = /*#__PURE__*/(() => {
  class DiasHorariosSucursalService {
    constructor(http) {
      this.http = http;
      this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    }
    traerDiasHorariosSucursal(id) {
      const url = `${this.baseUrl}/dias-horarios/${id}`;
      return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
        // this._plan = resp;
        return resp;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false)));
    }
    static #_ = this.ɵfac = function DiasHorariosSucursalService_Factory(t) {
      return new (t || DiasHorariosSucursalService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
    };
    static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: DiasHorariosSucursalService,
      factory: DiasHorariosSucursalService.ɵfac,
      providedIn: 'root'
    });
  }
  return DiasHorariosSucursalService;
})();

/***/ }),

/***/ 6103:
/*!******************************************************!*\
  !*** ./src/app/shared/services/servicios.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiciosService": () => (/* binding */ ServiciosService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4004);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 262);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 529);





let ServiciosService = /*#__PURE__*/(() => {
  class ServiciosService {
    constructor(http) {
      this.http = http;
      this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    }
    traerServicios() {
      const url = `${this.baseUrl}/servicio`;
      return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
        return resp;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false)));
    }
    traerUnServicio(idServicio) {
      const url = `${this.baseUrl}/servicio/${idServicio}`;
      return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
        return resp;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false)));
    }
    buscarServicioClientePlan(servicio) {
      const url = `${this.baseUrl}/servicio/buscar`;
      // Cambia el método a GET y pasa los parámetros como query params
      return this.http.get(url, {
        params: servicio
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
        return resp;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false)));
    }
    crearServicio(servicio) {
      const url = `${this.baseUrl}/servicio`;
      return this.http.post(url, servicio).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => resp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(err.error)));
    }
    modificarServicioDiasHorarios(servicio) {
      const url = `${this.baseUrl}/servicio/${servicio.id}`;
      return this.http.put(url, servicio).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => resp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(err.error)));
    }
    static #_ = this.ɵfac = function ServiciosService_Factory(t) {
      return new (t || ServiciosService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
    };
    static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: ServiciosService,
      factory: ServiciosService.ɵfac,
      providedIn: 'root'
    });
  }
  return ServiciosService;
})();

/***/ })

}]);