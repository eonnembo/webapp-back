const db = require("../db/config")
const { DataTypes } = require("sequelize")

//Nombre de la tabla, nombre de las columnas
const UsuarioModel = db.define('users', {
    name: { type: DataTypes.STRING, required: true },
    email: { type: DataTypes.STRING, required: true, unique: true },
    password: { type: DataTypes.STRING, required: true }
});

module.exports = UsuarioModel