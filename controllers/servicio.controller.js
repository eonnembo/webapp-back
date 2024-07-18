const sequelize = require('../db/config'); // Importa la instancia de Sequelize// Utiliza la instancia de Sequelize
const DiasHorarios = require('../models/DiasHorarios.model');
const { ServicioModel, ClienteModel, PlanModel } = require('../models/Servicio.model');

const traerServicios = async (req, res) => {
    try {
        const servicios = await ServicioModel.findAll({
            include: [
                { model: ClienteModel, attributes: ['nombre', 'apellido', 'dni', 'email', 'telefono'] },
                { model: PlanModel, attributes: ['nombre', 'descripcion', 'plazoValidez', 'importe'] }
            ]
        });
        res.status(200).json(servicios);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
};

const traerUnServicio = async (req, res) => {
    try {
        const servicioEncontrado = await ServicioModel.findByPk(req.params.id);
        if (!servicioEncontrado) {
            return res.status(404).json({ ok: false, msg: 'Servicio no encontrado', icon: 'warning' });
        }

        res.status(200).json(servicioEncontrado);
    } catch (error) {
        console.error('Error al buscar servicio:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const buscarServicioClientePlan = async (req, res) => {
    try {
        const { idCliente, idPlan } = req.query;
        const existeRegistro = await ServicioModel.findOne({
            where: {
                idCliente: idCliente,
                idPlan: idPlan,
            },
        });
        if (existeRegistro) {
            return res.status(200).json({
                ok: true,
                msg: 'Ya se encuentra cargado el servicio, para el cliente seleccionado.',
                icon: 'warning',
            });
        }
    } catch (error) {
        console.error('Error al buscar servicio:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const crearServicio = async (req, res) => {
    const t = await sequelize.transaction(); // Inicia la transacción

    try {
        const { idCliente, idPlan } = req.body;

        const existeRegistro = await ServicioModel.findOne({
            where: {
                idCliente: idCliente,
                idPlan: idPlan,
            },
            transaction: t,
        });

        if (existeRegistro) {
            await t.rollback();
            return res.status(400).json({
                ok: false,
                msg: 'Ya se encuentra cargado el servicio, para el cliente seleccionado.',
                icon: 'warning',
            });
        }

        await ServicioModel.create(req.body, { transaction: t });

        // Supongamos que recibes el objeto actualizado en el body
        const data = req.body.updDiasHorarios;
        for (const item of data) {
            await DiasHorarios.update({ cupoHora: item.cupoHora }, {
                where: { id: item.id },
                transaction: t,
            });
        }

        await t.commit();
        res.status(201).json({
            ok: true,
            msg: 'Servicio creado correctamente',
            icon: 'success',
        });
    } catch (error) {
        await t.rollback();
        console.error('Error al crear el servicio o actualizar el cupo hora:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};


const modificarServicioDiasHorarios = async (req, res) => {
    const t = await sequelize.transaction(); // Iniciar la transacción

    try {
        const { updDiasHorarios, diasHorarios } = req.body; // Supongamos que recibes el objeto actualizado

        // Buscar el servicio por ID y actualizar DiasHorarios
        const servicio = await ServicioModel.findByPk(req.params.id);
        if (!servicio) {
            await t.rollback();
            return res.status(404).json({
                ok: false,
                msg: 'Servicio no encontrado',
                icon: 'warning',
            });
        }

        // Actualizar DiasHorarios en el servicio
        servicio.diasHorarios = diasHorarios;
        await servicio.save({ transaction: t });

        // Iterar sobre cada objeto en el array y actualizar la tabla horarios_dias
        for (const item of updDiasHorarios) {
            await DiasHorarios.update({ cupoHora: item.cupoHora }, {
                where: { id: item.id },
                transaction: t,
            });
        }

        await t.commit(); // Confirmar la transacción
        res.status(200).json({ ok: true, msg: 'Cupo de horas días actualizado correctamente', icon: 'success' });
    } catch (error) {
        console.error('Error al actualizar el cupoHora:', error);
        await t.rollback(); // Revertir la transacción en caso de error
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

module.exports = { traerServicios, traerUnServicio, buscarServicioClientePlan, crearServicio, modificarServicioDiasHorarios }