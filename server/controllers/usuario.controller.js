const Usuario = require('../models/Usuario.model');

const traerUsuarios = async (req, res) => {}
const traerUnUsuario = async (req, res) => {}
const crearUsuario = async (req, res) => {
    const { idEmpresa, nombre, email, password, cambiarPassword } = req.body;

    try {
        // Verificar el email en la DB
        const usuario = await Usuario.findOne({ where: { idEmpresa: idEmpresa, email: email } }); // Es igual a where: { email: email }
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
        // const token = await generarJWT(dbUsuario.id, nombre);

        // Generar respuesta exitosa
        res.status(201).json({
            ok: true,
            ...dbUsuario.dataValues,
            // token
        });
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({
            ok: false,
            msg: 'Error interno del servidor'
        });
    }
}
const modificarUsuario = async (req, res) => {}
const eliminarUsuario = async (req, res) => {}

module.exports = { traerUsuarios, traerUnUsuario, crearUsuario, modificarUsuario, eliminarUsuario }