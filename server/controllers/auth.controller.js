const Auth = require('../models/Auth.model');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const loginUsuario = async (req, res) => {
    const { idEmpresa, email, password } = req.body;

    try {
        const dbUsuario = await Auth.findOne({ where: { idEmpresa: idEmpresa, email: email } }); // Es igual a where: { email: email }
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
                msg: "La contraseña no es válida"
            });
        }

        // Generar el JWT
        const token = await generarJWT(dbUsuario.id, dbUsuario.idEmpresa);

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
    const { id } = req;

    // Leer la DB busco por id para obtener email
    const dbUsuario = await Auth.findByPk(id);

    // Generar el JWT
    const token = await generarJWT(id, dbUsuario.idEmpresa);

    return res.json({
        ok: true,
        id,
        email: dbUsuario.email,
        token
    })
}

module.exports = { loginUsuario, revalidarToken }
// module.exports = { crearUsuario, loginUsuario, revalidarToken }