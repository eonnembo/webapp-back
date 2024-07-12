const db = require("../db/config")
const { DataTypes } = require("sequelize")
const ClienteModel = require('../models/Cliente.model');
const PlanModel = require('../models/Plan.model');

//Nombre de la tabla, nombre de las columnas
const ServicioModel = db.define('servicio', {
    idCliente: { type: DataTypes.INTEGER },
    idPlan: { type: DataTypes.INTEGER },
    cobro: { type: DataTypes.DOUBLE(10,2) },
    horariosDias: { type: DataTypes.JSON },
    fechaInicio: { type: DataTypes.DATEONLY },
    fechaFin: { type: DataTypes.DATEONLY },
});

ClienteModel.hasMany(ServicioModel, { foreignKey: 'idCliente' });
PlanModel.hasMany(ServicioModel, { foreignKey: 'idPlan' });
ServicioModel.belongsTo(ClienteModel, { foreignKey: 'idCliente' });
ServicioModel.belongsTo(PlanModel, { foreignKey: 'idPlan' });

module.exports = { ServicioModel, ClienteModel, PlanModel }