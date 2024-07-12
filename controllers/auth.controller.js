const Auth = require('../models/Usuario.model');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const loginUsuario = async (req, res) => {
    const { usuario, password } = req.body;

    try {
        const dbUsuario = await Auth.findOne({ where: { usuario: usuario } }); // Es igual a where: { email: email }
        console.log("😏 ~ loginUsuario ~ dbUsuario:", dbUsuario)
        if (!dbUsuario) {
            return res.status(400).json({
                ok: false,
                msg: "El usuario no existe",
                icon: 'warning'
            });
        }

        if (!dbUsuario.estado) {
            return res.status(400).json({
                ok: false,
                msg: "El usuario no tiene acceso",
                icon: 'error'
            });
        }

        //Confirmar si el password hace match
        const validPassword = bcrypt.compareSync(password, dbUsuario.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: "La contraseña es incorrecta",
                icon: 'warning'
            });
        }

        // Generar el JWT
        const token = await generarJWT(dbUsuario.id, dbUsuario.idSucursal);

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
            msg: 'Error interno del servidor',
            icon: 'error'
        });
    }
};

const revalidarToken = async (req, res) => {
    const { id } = req;

    // Leer la DB busco por id para obtener email
    const dbUsuario = await Auth.findByPk(id);

    // Generar el JWT
    const token = await generarJWT(id, dbUsuario.idSucursal);

    return res.json({
        ok: true,
        id,
        usuario: dbUsuario.usuario,
        token
    })
};

const newPassword = async (req, res) => {
    const { id, password, confirmNewPassword, cambiarPassword } = req.body;

    try {
        const dbUsuario = await Auth.findOne({ where: { id: id } }); 
        if (!dbUsuario) {
            return res.status(400).json({
                ok: false,
                msg: "Usuario no encontrado",
                icon: 'error'
            });
        }
        
        const validPassword = bcrypt.compareSync(password, dbUsuario.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: "La contraseña actual es incorrecta",
                icon: 'warning'
            });
        }

        const validPasswordAnt = bcrypt.compareSync(confirmNewPassword, dbUsuario.password);
        if (validPasswordAnt) {
            return res.status(400).json({
                ok: false,
                msg: "La contraseña nueva debe ser diferente a la anterior",
                icon: 'warning'
            });
        }
        
        // Hashear la nueva contraseña
        const salt = bcrypt.genSaltSync();
        const confirmNewPasswordHash = bcrypt.hashSync(confirmNewPassword, salt);
        await Auth.update(
            {
                password: confirmNewPasswordHash,
                cambiarPassword: cambiarPassword
            },
            { where: { id: id } }
        );
        res.status(201).json({ ok: true, msg: "Se modificó la contraseña correctamente", icon: 'success' });
    } catch (error) {
        console.error('Error al modificar contraseña:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

module.exports = { loginUsuario, revalidarToken, newPassword }