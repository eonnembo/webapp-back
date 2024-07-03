const db = require("../db/config")
const { DataTypes } = require("sequelize")

//Nombre de la tabla, nombre de las columnas
const AuthModel = db.define('usuario', {
    usuario: { type: DataTypes.STRING, required: true, unique: true },
    password: { type: DataTypes.STRING, required: true },
    cambiarPassword: { type: DataTypes.BOOLEAN, required: true },
    estado: { type: DataTypes.BOOLEAN, required: true }
});

module.exports = AuthModel