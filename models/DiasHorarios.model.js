const db = require("../db/config")
const { DataTypes } = require("sequelize")

//Nombre de la tabla, nombre de las columnas
const DiasHorariosModel = db.define('dias_horarios', {
    dias: { type: DataTypes.STRING, allowNull: false },
    horas: { type: DataTypes.INTEGER, allowNull: false },
    cupoHora: { type: DataTypes.INTEGER, allowNull: false },
    idSucursal: { type: DataTypes.INTEGER, allowNull: false },
    // diasAsistencia: { type: DataTypes.INTEGER, allowNull: false },
    // plazoValidez: { type: DataTypes.INTEGER, allowNull: false },
    // idPlan: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = DiasHorariosModel