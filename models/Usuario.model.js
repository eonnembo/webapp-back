const db = require("../db/config");
const { DataTypes } = require("sequelize");
const bcrypt = require('bcryptjs');

const UsuarioModel = db.define('usuario', {
    usuario: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    nombre: { type: DataTypes.STRING, allowNull: false },
    apellido: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    estado: { type: DataTypes.BOOLEAN, allowNull: false },
    idPerfil: { type: DataTypes.INTEGER, allowNull: false },
    idSucursal: { type: DataTypes.INTEGER, allowNull: false },
    cambiarPassword: { type: DataTypes.BOOLEAN, allowNull: false }
});

// Crear un registro inicial (por ejemplo, el primer usuario)
const salt = bcrypt.genSaltSync();
const passwordHash = bcrypt.hashSync('123456', salt);
UsuarioModel.sync()
    .then(async () => {
        const [usuario, created] = await UsuarioModel.findOrCreate({
            where: { id: 1 }, // Cambia esto según tus necesidades
            defaults: {
                usuario: 'admin',
                password: passwordHash,
                nombre: 'Administrador',
                apellido: null,
                email: null,
                estado: true,
                idPerfil: 1,
                idSucursal: 1,
                cambiarPassword: true
            }
        });

        if (created) {
            console.log("Registro inicial creado:", usuario.toJSON());
        } else {
            console.log("El registro inicial ya existe:", user.toJSON());
        }
    })
    .catch((error) => {
        console.error("Error al crear el registro inicial:", error);
    });

module.exports = UsuarioModel;
