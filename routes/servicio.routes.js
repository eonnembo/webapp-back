const express = require('express');
const router = express.Router();
const { traerServicios, traerUnServicio, buscarServicioClientePlan, crearServicio, modificarServicioDiasHorarios } = require('../controllers/servicio.controller');

// Todos los Servicios
router.get('/', traerServicios);

// Buscar servicio por cliente y plan
router.get('/buscar', buscarServicioClientePlan);

// Buscar Servicio
router.get('/:id', traerUnServicio);

// Crear Servicio
router.post('/', crearServicio);

// Modifica ccobro
router.put('/:id', modificarServicioDiasHorarios);



module.exports = router;