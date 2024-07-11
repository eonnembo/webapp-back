const express = require('express');
const router = express.Router();
const { traerPagos, traerPagoServicio, crearPago, modificarPago, eliminarPago } = require('../controllers/pago.controller');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');

// Todas los pagos
router.get('/', traerPagos);

// Buscar pagos por servicio
router.get('/:id', traerPagoServicio);

// Crear pago
router.post('/', crearPago);

// Modificar pago
router.put('/:id', modificarPago);

// Eliminar un pago
router.delete("/:id", eliminarPago)

module.exports = router;