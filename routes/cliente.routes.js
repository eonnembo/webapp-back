const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { traerClientes, traerUnCliente, crearCliente, modificarCliente, eliminarCliente } = require('../controllers/cliente.controller');
const { validarCampos } = require('../middlewares/validar-campos');

// Todos los Clientes
router.get('/', traerClientes);

// Buscar un Cliente
router.get('/:id', traerUnCliente);

// Crear Cliente
router.post('/', [
    check('nombre')
        .notEmpty().withMessage('El nombre es requerido.'),
    check('apellido')
        .notEmpty().withMessage('El apellido es requerido.'),
    check('dni')
        .notEmpty().withMessage('El DNI es requerido.'),
    check('fechaNacimiento')
        .notEmpty().withMessage('La fecha de nacimiento es requerida.'),
    check('email')
        .notEmpty().withMessage('El email es requerido.')
        .isEmail().withMessage('Ingrese un correo electrónico válido.'),
    check('telefono')
        .notEmpty().withMessage('El teléfono es requerido.'),
    validarCampos
], crearCliente);

// Modificar Cliente
router.put('/:id', [
    check('nombre')
        .notEmpty().withMessage('El nombre es requerido.'),
    check('apellido')
        .notEmpty().withMessage('El apellido es requerido.'),
    check('dni')
        .notEmpty().withMessage('El DNI es requerido.'),
    check('fechaNacimiento')
        .notEmpty().withMessage('La fecha de nacimiento es requerida.'),
    check('email')
        .notEmpty().withMessage('El email es requerido.')
        .isEmail().withMessage('Ingrese un correo electrónico válido.'),
    check('telefono')
        .notEmpty().withMessage('El teléfono es requerido.'),
], modificarCliente);

// Eliminar un Cliente
router.delete("/:id", eliminarCliente)

module.exports = router;