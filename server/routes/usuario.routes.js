const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { traerUsuarios, traerUnUsuario, crearUsuario, modificarUsuario, eliminarUsuario } = require('../controllers/usuario.controller');
const { validarCampos } = require('../middlewares/validar-campos');

// Todos los usuarios
router.get('/', traerUsuarios);

// Buscar un usuario
router.get('/:id', traerUnUsuario);

// Crear usuario
router.post('/', [
    check('nombre')
        .notEmpty().withMessage('El nombre es requerido'),
    check('email')
        .notEmpty().withMessage('El email es requerido')
        .isEmail().withMessage('El email no es válido'),
    check('password')
        .notEmpty().withMessage('La contraseña es requerida')
        .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    validarCampos
], crearUsuario);

// Modificar usuario
router.put('/:id', [
    check('nombre')
        .notEmpty().withMessage('El nombre es requerido'),
    check('email')
        .notEmpty().withMessage('El email es requerido')
        .isEmail().withMessage('El email no es válido'),
    check('password')
        .notEmpty().withMessage('La contraseña es requerida')
        .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    validarCampos
], modificarUsuario);

// Eliminar un usuario
router.delete("/:id", eliminarUsuario)

module.exports = router;