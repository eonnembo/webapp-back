const Plan = require('../models/Plan.model');

const traerPlanes = async (req, res) => {
    try {
        const plan = await Plan.findAll()
        res.status(200).json(plan)
    } catch (error) {
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const traerUnPlan = async (req, res) => {
    try {
        const planEncontrado = await Plan.findByPk(req.params.id);
        if (!planEncontrado) {
            return res.status(404).json({ ok: false, msg: 'Plan no encontrado', icon: 'warning' });
        }

        res.status(200).json(planEncontrado);
    } catch (error) {
        console.error('Error al buscar plan:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const crearPlan = async (req, res) => {
    // const { telefono } = req.body;
    // const telefonoSinEspacio = telefono.replace(/\s/g, '');
    try {

        // Guardar Plan en DB
        await Plan.create(req.body)

        // Generar respuesta exitosa
        res.status(201).json({
            ok: true,
            msg: 'Plan creado correctamente',
            icon: 'success'
        });
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const modificarPlan = async (req, res) => {
    const { id } = req.body
    try {
        await Plan.update(req.body, {
            where: { id: id }
        })
        res.status(201).json({ ok: true, msg: 'El plan se modificó correctamente', icon: 'success' })
    } catch (error) {
        console.error('Error al modificar el plan:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const eliminarPlan = async (req, res) => {
    try {
        const planEncontrado = await Plan.findByPk(req.params.id);
        if (!planEncontrado) {
            return res.status(404).json({ ok: false, msg: 'Plan no encontrado', icon: 'warning' });
        }
        await planEncontrado.destroy()
        res.json({ ok: true, msg: 'El plan se eliminó correctamente', icon: 'success' });
    } catch (error) {
        console.error('Error al eliminar el plan:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
}

module.exports = { traerPlanes, traerUnPlan, crearPlan, modificarPlan, eliminarPlan }