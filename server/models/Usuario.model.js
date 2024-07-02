const db = require("../db/config")
const { DataTypes } = require("sequelize")

//Nombre de la tabla, nombre de las columnas
const UsuarioModel = db.define('usuario', {
    nombre: { type: DataTypes.STRING, required: true },
    apellido: { type: DataTypes.STRING, required: true },
    email: { type: DataTypes.STRING, required: true, unique: true },
    password: { type: DataTypes.STRING, required: true },
    idPerfil: { type: DataTypes.INTEGER, required: true },
    idEmpresa: { type: DataTypes.INTEGER, required: true },
});

module.exports = UsuarioModel