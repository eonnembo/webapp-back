const express = require('express');
const router = express.Router();
const { traerServicios, crearServicio, modificarServicioHorariosDias } = require('../controllers/servicio.controller');

// Todos los Servicios
router.get('/', traerServicios);

// Buscar Servicio
// router.get('/:id', traerUnServicio);

// Crear Servicio
router.post('/', crearServicio);

// Modifica ccobro
router.put('/:id', modificarServicioHorariosDias);



module.exports = router;