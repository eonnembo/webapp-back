const express = require('express');
const router = express.Router();
const { traerHorariosDiasPlan } = require('../controllers/horarios_dias.controller');

// Buscar Horarios Dias Plan
router.get('/:id', traerHorariosDiasPlan);

module.exports = router;