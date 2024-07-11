const Pago = require('../models/Pago.model');

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
            where: { idServico: id }
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
    try {

        // Guardar Pago en DB
        await Pago.create(req.body)

        // Generar respuesta exitosa
        res.status(201).json({
            ok: true,
            msg: 'Pago creado correctamente',
            icon: 'success'
        });
    } catch (error) {
        console.error("Error: ", error);
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