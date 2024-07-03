const db = require("../db/config")
const { DataTypes } = require("sequelize")

//Nombre de la tabla, nombre de las columnas
const UsuarioModel = db.define('usuario', {
    usuario: { type: DataTypes.STRING, required: true, unique: true },
    password: { type: DataTypes.STRING, required: true },
    nombre: { type: DataTypes.STRING, required: true },
    apellido: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    estado: { type: DataTypes.BOOLEAN, required: true },
    idPerfil: { type: DataTypes.INTEGER, required: true },
    idEmpresa: { type: DataTypes.INTEGER, required: true },
    cambiarPassword: { type: DataTypes.BOOLEAN, required: true }
});

module.exports = UsuarioModel