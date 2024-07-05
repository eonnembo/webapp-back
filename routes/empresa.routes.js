const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { traerEmpresas, traerUnaEmpresa, crearEmpresa, modificarEmpresa, eliminarEmpresa } = require('../controllers/empresa.controller');
const { validarCampos } = require('../middlewares/validar-campos');

// Todos las Empresas
router.get('/', traerEmpresas);

// Buscar una Empresa
router.get('/:id', traerUnaEmpresa);

// Crear Empresa
router.post('/', [
    check('nombre')
        .notEmpty().withMessage('El nombre es requerido'),
    validarCampos
], crearEmpresa);

// Modificar Empresa
router.put('/:id', [
    check('nombre')
        .notEmpty().withMessage('El nombre es requerido'),
    validarCampos
], modificarEmpresa);

// Eliminar un Empresa
router.delete("/:id", eliminarEmpresa)

module.exports = router;