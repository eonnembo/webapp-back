const express = require('express');
const router = express.Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth.controller.js');

// Crear usuario
router.post('/new', crearUsuario);

// Login de usuario
router.post('/', loginUsuario);

// Validar y revalidar token
router.get('/renew', revalidarToken);

module.exports = router;