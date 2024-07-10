const db = require("../db/config")
const { DataTypes } = require("sequelize")

//Nombre de la tabla, nombre de las columnas
const ClienteModel = db.define('cliente', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    apellido: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    dni: { type: DataTypes.STRING(10), allowNull: false },
    fechaNacimiento: { type: DataTypes.DATEONLY, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    estado: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
    telefono: { type: DataTypes.STRING(15), allowNull: false }
});

module.exports = ClienteModel