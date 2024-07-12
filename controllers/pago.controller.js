const sequelize = require('../db/config');
const Pago = require('../models/Pago.model');
const { ServicioModel } = require('../models/Servicio.model');

const traerPagos = async (req, res) => {
    try {
        const pago = await Pago.findAll()
        res.status(200).json(pago)
    } catch (error) {
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const traerPagoServicio = async (req, res) => {
    const { id } = req.params.id;
    try {
        const pagoEncontrado = await Pago.findAll(req.body, {
            where: { idServicio: id }
        });
        if (!pagoEncontrado) {
            return res.status(404).json({ ok: false, msg: 'Pago no encontrado', icon: 'warning' });
        }

        res.status(200).json(pagoEncontrado);
    } catch (error) {
        console.error('Error al buscar Pago:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const crearPago = async (req, res) => {
    const t = await sequelize.transaction();

    try {
        const { idServicio, idUsuario, importe, plazoValidez } = req.body;

        // Crear el registro de pago
        await Pago.create({ idServicio, idUsuario, importe }, { transaction: t });

        // Calcular la fecha de finalización
        const fechaInicio = new Date();
        const fechaFin = new Date(fechaInicio);
        fechaFin.setDate(fechaInicio.getDate() + plazoValidez);

        // Actualizar las fechas en el registro de servicio
        await ServicioModel.update(
            { fechaInicio, fechaFin },
            {
                where: { id: idServicio },
                fields: ['fechaInicio', 'fechaFin'],
                transaction: t,
            }
        );

        // Confirmar la transacción
        await t.commit();
        res.status(201).json({
            ok: true,
            msg: 'Pago cargado correctamente',
            icon: 'success',
        });
    } catch (error) {
        // Revertir la transacción en caso de error
        await t.rollback();
        console.error('Error al registrar pago:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};


const modificarPago = async (req, res) => {
    const { id } = req.body
    try {
        await Pago.update(req.body, {
            where: { id: id }
        })
        res.status(201).json({ ok: true, msg: 'El pago se modificó correctamente', icon: 'success' })
    } catch (error) {
        console.error('Error al modificar el pago:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const eliminarPago = async (req, res) => {
    try {
        const PagoEncontrado = await Pago.findByPk(req.params.id);
        if (!PagoEncontrado) {
            return res.status(404).json({ ok: false, msg: 'Pago no encontrado', icon: 'warning' });
        }
        await PagoEncontrado.destroy()
        res.json({ ok: true, msg: 'El pago se eliminó correctamente', icon: 'success' });
    } catch (error) {
        console.error('Error al eliminar el pago:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
}

module.exports = { traerPagos, traerPagoServicio, crearPago, modificarPago, eliminarPago }