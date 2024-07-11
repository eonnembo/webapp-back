const db = require("../db/config")
const { DataTypes } = require("sequelize")

//Nombre de la tabla, nombre de las columnas
const HorariosDiasModel = db.define('horarios_dias', {
    diasDisponibles: { type: DataTypes.STRING, allowNull: false },
    horasDisponibles: { type: DataTypes.STRING, allowNull: false },
    diasAsistencia: { type: DataTypes.INTEGER, allowNull: false },
    plazoValidez: { type: DataTypes.INTEGER, allowNull: false },
    cupoHora: { type: DataTypes.INTEGER, allowNull: false },
    idPlan: { type: DataTypes.INTEGER, allowNull: false },
    idSucursal: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = HorariosDiasModel