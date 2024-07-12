const express = require('express');
const router = express.Router();
const { traerServicios, crearServicio, modificarCobro } = require('../controllers/servicio.controller');

// Todos los Servicios
router.get('/', traerServicios);

// Buscar Servicio
// router.get('/:id', traerUnServicio);

// Crear Servicio
router.post('/', crearServicio);

// Modifica ccobro
router.put('/cobro/:id', modificarCobro);



module.exports = router;