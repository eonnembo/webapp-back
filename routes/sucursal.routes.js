const express = require('express');
const router = express.Router();
const { traerSucursales, traerUnaSucursal, crearSucursal, modificarSucursal, eliminarSucursal } = require('../controllers/sucursal.controller');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

// Todas las Sucursales
router.get('/', traerSucursales);

// Buscar una Sucursal
router.get('/:id', traerUnaSucursal);

// Crear Sucursal
router.post('/', [
    check('nombre')
        .notEmpty().withMessage('Nombre requerido'),
    validarCampos,
], crearSucursal);

// Modificar Sucursal
router.put('/:id', [
    check('nombre')
        .notEmpty().withMessage('Nombre requerido'),
    validarCampos,
], modificarSucursal);

// Eliminar una Sucursal
router.delete("/:id", eliminarSucursal)

module.exports = router;