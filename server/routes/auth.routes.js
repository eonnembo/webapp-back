const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { loginUsuario, revalidarToken, newPassword } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

// Login de usuario
router.post('/', [
    check('usuario')
        .notEmpty().withMessage('El usuario es requerido'),
    check('password')
        .notEmpty().withMessage('La contraseña es requerida')
        .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    validarCampos
], loginUsuario);
// Validar y revalidar token
router.get('/renew', validarJWT, revalidarToken);

// Cambiar contraseña
router.put('/new-password', newPassword);

module.exports = router;