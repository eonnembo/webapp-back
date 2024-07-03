const db = require("../db/config")
const { DataTypes } = require("sequelize")

//Nombre de la tabla, nombre de las columnas
const EmpresaModel = db.define('empresa', {
    nombre: { type: DataTypes.STRING, required: true },
    razonSocial: { type: DataTypes.STRING },
    telefono: { type: DataTypes.STRING },
});

module.exports = EmpresaModel