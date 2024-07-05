const db = require("../db/config")
const { DataTypes } = require("sequelize")

//Nombre de la tabla, nombre de las columnas
const ClienteModel = db.define('cliente', {
    nombre: { type: DataTypes.STRING, required: true },
    apellido: { type: DataTypes.STRING, required: true },
    dni: { type: DataTypes.DOUBLE(8), required: true },
    fechaNacimiento: { type: DataTypes.STRING, required: true },
    email: { type: DataTypes.STRING, required: true },
    estado: { type: DataTypes.ENUM('ACTIVO', 'INACTIVO', 'PENDIENTE'), defaultValue: 'PENDIENTE'},
    telefono: { type: DataTypes.STRING, required: true },
    idEmpresa: { type: DataTypes.INTEGER, required: true }
});

module.exports = ClienteModel