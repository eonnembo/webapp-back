const express = require('express');
const router = express.Router();
const { traerPlanes, traerUnPlan, crearPlan, modificarPlan, eliminarPlan } = require('../controllers/plan.controller');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

// Todas los Planes
router.get('/', traerPlanes);

// Buscar un Plan
router.get('/:id', traerUnPlan);

// Crear Plan
router.post('/', [
    check('nombre')
        .notEmpty().withMessage('Nombre requerido'),
    validarCampos,
], crearPlan);

// Modificar Plan
router.put('/:id', [
    check('nombre')
        .notEmpty().withMessage('Nombre requerido'),
    validarCampos,
], modificarPlan);

// Eliminar un Plan
router.delete("/:id", eliminarPlan)

module.exports = router;