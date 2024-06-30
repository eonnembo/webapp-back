const Usuario = require('../models/Usuario.model');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Verificar el email en la DB
        const usuario = await Usuario.findOne({ where: { email } }); // Es igual a where: { email: email }
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: "El email ya se encuentra registrado"
            });
        }

        // Guardo usuario con el modelo
        const dbUsuario = new Usuario(req.body);

        // Hashear la contraseña
        const salt = bcrypt.genSaltSync();
        dbUsuario.password = bcrypt.hashSync(password, salt);


        // Guardar usuario en DB
        await dbUsuario.save();

        // Generar el JWT
        const token = await generarJWT(dbUsuario.id, name);

        // Generar respuesta exitosa
        res.status(201).json({
            ok: true,
            ...dbUsuario.dataValues,
            token
        });
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({
            ok: false,
            msg: 'Error interno del servidor'
        });
    }
}

const loginUsuario = async (req, res) => {

    const { email, password } = req.body;

    try {
        const dbUsuario = await Usuario.findOne({ where: { email } }); // Es igual a where: { email: email }
        if (!dbUsuario) {
            return res.status(400).json({
                ok: false,
                msg: "Las credenciales no son válidas"
            });
        }

        //Confirmar si el password hace match
        const validPassword = bcrypt.compareSync(password, dbUsuario.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: "El password no es válido"
            });
        }

        // Generar el JWT
        const token = await generarJWT(dbUsuario.id, dbUsuario.name);

        // Respues del servicio
        res.status(201).json({
            ok: true,
            ...dbUsuario.dataValues,
            token
        });
    } catch (error) {
        console.error("Error: ", error)
        res.status(500).json({
            ok: false,
            msg: 'Error interno del servidor'
        });
    }
}

const revalidarToken = async (req, res) => {
    try {
        const token = await Usuario.findByPk(req.params.token);
        if (!token) {
            return res.status(404).json({ mensaje: 'Token no encontrado' });
        }
        res.json(token);
    } catch (error) {
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
}

module.exports = { crearUsuario, loginUsuario, revalidarToken }