const db = require("../db/config")
const { DataTypes } = require("sequelize")

const PagoModel = db.define('pago', {
    importe: { type: DataTypes.DOUBLE(10,2) },
    idServicio: { type: DataTypes.INTEGER, allowNull: false },
    idUsuario: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = PagoModel;