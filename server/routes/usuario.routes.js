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
    check('usuario')
        .notEmpty().withMessage('El usuario es requerido.')
        .isLength({ min: 4 }).withMessage('El usuario debe tener al menos 4 caracteres.'),
    check('nombre')
        .notEmpty().withMessage('El nombre es requerido')
        .isLength({ min: 4 }).withMessage('El nombre debe tener al menos 4 caracteres.'),
    validarCampos
], crearUsuario);

// Modificar usuario
router.put('/:id', [
    check('nombre')
        .notEmpty().withMessage('El nombre es requerido.'),
    validarCampos
], modificarUsuario);

// Eliminar un usuario
router.delete("/:id", eliminarUsuario)

module.exports = router;