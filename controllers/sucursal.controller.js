const Sucursal = require('../models/Sucursal.model');

const traerSucursales = async (req, res) => {
    try {
        const sucursal = await Sucursal.findAll()
        res.status(200).json(sucursal)
    } catch (error) {
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const traerUnaSucursal = async (req, res) => {
    try {
        const sucursalEncontrada = await Sucursal.findByPk(req.params.id);
        if (!sucursalEncontrada) {
            return res.status(404).json({ ok: false, msg: 'Sucursal no encontrada', icon: 'warning' });
        }

        res.status(200).json(sucursalEncontrada);
    } catch (error) {
        console.error('Error al buscar sucursal:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const crearSucursal = async (req, res) => {
    const { telefono } = req.body;
    const telefonoSinEspacio = telefono.replace(/\s/g, '');
    try {

        // Guardar Sucursal en DB
        await Sucursal.create({ ...req.body, telefono: telefonoSinEspacio })

        // Generar respuesta exitosa
        res.status(201).json({
            ok: true,
            msg: 'Sucursal creado correctamente',
            icon: 'success'
        });
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const modificarSucursal = async (req, res) => {
    const { id, telefono } = req.body
    const telefonoSinEspacio = telefono.replace(/\s/g, '');
    try {
        await Sucursal.update({ ...req.body, telefono: telefonoSinEspacio }, {
            where: { id: id }
        })
        res.status(201).json({ ok: true, msg: 'El sucursal se modificó correctamente', icon: 'success' })
    } catch (error) {
        console.error('Error al modificar la sucursal:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const eliminarSucursal = async (req, res) => {
    try {
        const sucursalEncontrada = await Sucursal.findByPk(req.params.id);
        if (!sucursalEncontrada) {
            return res.status(404).json({ ok: false, msg: 'Sucursal no encontrada', icon: 'warning' });
        }
        await sucursalEncontrada.destroy()
        res.json({ ok: true, msg: 'La sucursal se eliminó correctamente', icon: 'success' });
    } catch (error) {
        console.error('Error al eliminar la sucursal:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
}

module.exports = { traerSucursales, traerUnaSucursal, crearSucursal, modificarSucursal, eliminarSucursal }