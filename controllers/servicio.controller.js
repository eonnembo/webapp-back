const sequelize = require('../db/config'); // Importa la instancia de Sequelize// Utiliza la instancia de Sequelize
const HorariosDias = require('../models/HorariosDias.model');
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
        const data = req.body.horariosDias;
        for (const item of data) {
            await HorariosDias.update({ cupoHora: item.cupoHora }, {
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


const modificarServicioHorariosDias = async (req, res) => {
    const t = await sequelize.transaction(); // Iniciar la transacción

    try {
        const { updHorariosDias, horariosDias } = req.body; // Supongamos que recibes el objeto actualizado

        // Buscar el servicio por ID y actualizar horariosDias
        const servicio = await ServicioModel.findByPk(req.params.id);
        if (!servicio) {
            await t.rollback();
            return res.status(404).json({
                ok: false,
                msg: 'Servicio no encontrado',
                icon: 'warning',
            });
        }

        // Actualizar horariosDias en el servicio
        servicio.horariosDias = horariosDias;
        await servicio.save({ transaction: t });

        // Iterar sobre cada objeto en el array y actualizar la tabla horarios_dias
        for (const item of updHorariosDias) {
            await HorariosDias.update({ cupoHora: item.cupoHora }, {
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


module.exports = { traerServicios, crearServicio, modificarServicioHorariosDias }