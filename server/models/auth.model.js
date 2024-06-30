const db = require("../db/config.js")
const { DataTypes } = require("sequelize")

//Nombre de la tabla, nombre de las columnas
const authModel = db.define('users', {
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING }
})

module.exports = authModel