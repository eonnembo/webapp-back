const express = require('express');
const router = express.Router();
const { traerDiasHorariosSucursal } = require('../controllers/dias_horarios.controller');

// Buscar Días y horarios por sucursal
router.get('/:id', traerDiasHorariosSucursal);

module.exports = router;