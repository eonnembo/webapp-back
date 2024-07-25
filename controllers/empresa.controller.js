const Empresa = require('../models/Empresa.model');

const traerEmpresas = async (req, res) => {
    try {
        const empresa = await Empresa.findAll();
        res.status(200).json(empresa);
    } catch (error) {
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const traerUnaEmpresa = async (req, res) => {
    try {
        const empresaEncontrada = await Empresa.findByPk(req.params.id);
        if (!empresaEncontrada) {
            return res.status(404).json({ ok: false, msg: 'Empresa no encontrado', icon: 'error' });
        }

        const imgBase64 = empresaEncontrada.img ? Buffer.from(empresaEncontrada.img).toString('base64') : null;
        res.status(200).json({
            ...empresaEncontrada.toJSON(),
            img: imgBase64
        });
    } catch (error) {
        console.error('Error al buscar el Empresa:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const crearEmpresa = async (req, res) => {
    const { cuit, telefono, img } = req.body;
    const cuitSinGuion = cuit ? cuit.replace(/\-/g, '') : '';
    const telefonoSinEspacio = telefono ? telefono.replace(/\s/g, '') : '';

    try {
        const imgBuffer = img ? Buffer.from(img, 'base64') : null;
        const empresa = await Empresa.create({ ...req.body, cuit: cuitSinGuion, telefono: telefonoSinEspacio, img: imgBuffer });
        res.status(201).json({
            ok: true,
            ...empresa,
            msg: 'La empresa se creó correctamente',
            icon: 'success'
        });
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({
            ok: false,
            msg: 'Error interno del servidor',
            icon: 'error'
        });
    }
};


const modificarEmpresa = async (req, res) => {
    const { cuit, telefono, img } = req.body;
    const cuitSinGuion = cuit ? cuit.replace(/\-/g, '') : '';
    const telefonoSinEspacio = telefono ? telefono.replace(/\s/g, '') : '';
    
    try {
        const imgBuffer = img ? Buffer.from(img, 'base64') : null;
        await Empresa.update({ ...req.body, cuit: cuitSinGuion, telefono: telefonoSinEspacio, img: imgBuffer }, {
            where: { id: req.params.id }
        });
        res.status(201).json({ ok: true, msg: 'La empresa se actualizó correctamente', icon: 'success' })
    } catch (error) {
        console.error('Error al modificar la empresa:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const eliminarEmpresa = async (req, res) => {
    try {
        const empresaEncontrada = await Empresa.findByPk(req.params.id);
        if (!empresaEncontrada) {
            return res.status(404).json({ ok: false, msg: 'Posteo no encontrado', icon: 'error' });
        }
        await empresaEncontrada.destroy();
        res.json({ ok: false, msg: 'Empresa eliminada correctamente', icon: 'success' });
    } catch (error) {
        console.error('Error al eliminar empresa:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

module.exports = { traerEmpresas, traerUnaEmpresa, crearEmpresa, modificarEmpresa, eliminarEmpresa }