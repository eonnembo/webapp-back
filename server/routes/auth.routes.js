const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validar-campos');

// Crear usuario
router.post('/new', [
    check('name')
        .notEmpty().withMessage('El nombre es requerido'),
    check('email')
        .notEmpty().withMessage('El email es requerido')
        .isEmail().withMessage('El email no es válido'),
    check('password')
        .notEmpty().withMessage('La contraseña es requerida')
        .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    validarCampos
], crearUsuario);

// Login de usuario
router.post('/', [
    check('email')
        .notEmpty().withMessage('El email es requerido')
        .isEmail().withMessage('El email no es válido'),
    check('password')
        .notEmpty().withMessage('La contraseña es requerida')
        .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    validarCampos
], loginUsuario);

// Validar y revalidar token
router.get('/renew', revalidarToken);

module.exports = router;