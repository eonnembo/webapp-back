const express = require('express');
const router = express.Router();
const { traerHorariosDiasPlan } = require('../controllers/horarios_dias.controller');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

// Buscar Horarios Dias Plan
router.get('/:id', traerHorariosDiasPlan);

module.exports = router;