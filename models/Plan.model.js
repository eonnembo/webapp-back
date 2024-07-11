const db = require("../db/config")
const { DataTypes } = require("sequelize")

const PlanModel = db.define('plan', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.STRING },
    importe: { type: DataTypes.DOUBLE(10,2) },
    diasDisponibles: { type: DataTypes.JSON },
    horasDisponibles: { type: DataTypes.JSON },
    diasAsistencia: { type: DataTypes.INTEGER },
    plazoValidez: { type: DataTypes.INTEGER },
    cupoHora: { type: DataTypes.INTEGER },
    estado: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
    idSucursal: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = PlanModel;