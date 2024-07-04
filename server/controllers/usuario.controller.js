const Usuario = require('../models/Usuario.model');
const bcrypt = require('bcryptjs');

const traerUsuarios = async (req, res) => {
    try {
        const usuario = await Usuario.findAll()
        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const traerUnUsuario = async (req, res) => {
    try {
        const usuarioEncontrado = await Usuario.findByPk(req.params.id);
        if (!usuarioEncontrado) {
            return res.status(404).json({ ok: true, msg: 'Usuario no encontrado', icon: 'warning' });
        }

        res.status(200).json(usuarioEncontrado);
    } catch (error) {
        console.error('Error al buscar el usuario:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const crearUsuario = async (req, res) => {
    const { usuario, nombre, apellido, email, idPerfil, idEmpresa } = req.body;
    try {
        // Verificar el email en la DB
        const usuarioEncontrado = await Usuario.findOne({ where: { usuario: usuario } });
        if (usuarioEncontrado) {
            return res.status(400).json({
                ok: false,
                msg: "El usuario ya se encuentra registrado",
                icon: 'warning'
            });
        }

        const salt = bcrypt.genSaltSync();
        const passwordHash = bcrypt.hashSync('123456', salt);
        const dbUsuario = {
            usuario: usuario,
            password: passwordHash,
            nombre: nombre,
            apellido: apellido,
            email: email,
            estado: true,
            idPerfil: idPerfil,
            idEmpresa: idEmpresa,
            cambiarPassword: true
        };

        // Guardar usuario en DB
        await Usuario.create(dbUsuario)

        // Generar respuesta exitosa
        res.status(201).json({ 
            ok: true, 
            msg: 'Usuario creado correctamente', 
            icon: 'success' 
        });
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const modificarUsuario = async (req, res) => { 
    const { id } = req.body
    try {
        await Usuario.update(req.body, {
            where: { id: id }
        })
        res.status(201).json({ ok: true, msg: 'La usuario se modificó correctamente', icon: 'success' })
    } catch (error) {
        console.error('Error al modificar el usuario:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const eliminarUsuario = async (req, res) => { }

module.exports = { traerUsuarios, traerUnUsuario, crearUsuario, modificarUsuario, eliminarUsuario }