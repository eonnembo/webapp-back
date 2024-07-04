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
        .notEmpty().withMessage('El nombre es requerido.')
        .isLength({ min: 4 }).withMessage('El nombre debe tener al menos 4 caracteres.'),
    check('apellido')
        .notEmpty().withMessage('El apellido es requerido.')
        .isLength({ min: 4 }).withMessage('El apellido debe tener al menos 4 caracteres.'),
    check('dni')
        .notEmpty().withMessage('El DNI es requerido.')
        .isLength({ min: 8 }).withMessage('El DNI debe tener 8 caracteres.'),
    check('fechaNacimiento')
        .notEmpty().withMessage('La fecha de nacimiento es requerida.')
        .isDate().withMessage('La fecha de nacimiento debe tener un formato válido.'),
    check('email')
        .notEmpty().withMessage('El email es requerido.')
        .isEmail().withMessage('Ingrese un correo electrónico válido.'),
    check('telefono')
        .notEmpty().withMessage('El teléfono es requerido.'),
    // .isLength({ min: 4 }).withMessage('El teléfono debe tener al menos 4 caracteres'),
    validarCampos
], crearCliente);

// Modificar Cliente
router.put('/:id', [
    check('nombre')
        .notEmpty().withMessage('El nombre es requerido.')
        .isLength({ min: 4 }).withMessage('El nombre debe tener al menos 4 caracteres.'),
    check('apellido')
        .notEmpty().withMessage('El apellido es requerido.')
        .isLength({ min: 4 }).withMessage('El apellido debe tener al menos 4 caracteres.'),
    check('dni')
        .notEmpty().withMessage('El DNI es requerido.')
        .isLength({ min: 8 }).withMessage('El DNI debe tener 8 caracteres.'),
    check('fechaNacimiento')
        .notEmpty().withMessage('La fecha de nacimiento es requerida.')
        .isDate().withMessage('La fecha de nacimiento debe tener un formato válido.'),
    check('email')
        .notEmpty().withMessage('El email es requerido.')
        .isEmail().withMessage('Ingrese un correo electrónico válido.'),
    check('telefono')
        .notEmpty().withMessage('El teléfono es requerido.'),
    // .isLength({ min: 4 }).withMessage('El teléfono debe tener al menos 4 caracteres'),
    validarCampos
], modificarCliente);

// Eliminar un Cliente
router.delete("/:id", eliminarCliente)

module.exports = router;