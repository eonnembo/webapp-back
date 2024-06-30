const authModel = require('../models/auth.model');

const crearUsuario = async (req, res) => {
    try {
        const user = await authModel.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
}

const loginUsuario = async (req, res) => {
    try {
        const user = await authModel.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
}

const revalidarToken = async (req, res) => {
    try {
        const token = await authModel.findByPk(req.params.token);
        if (!token) {
            return res.status(404).json({ mensaje: 'Token no encontrado' });
        }
        res.json(token);
    } catch (error) {
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
}

module.exports = { crearUsuario, loginUsuario, revalidarToken }