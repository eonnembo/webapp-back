const { ServicioModel, ClienteModel, PlanModel  } = require('../models/Servicio.model');

const traerServicios = async (req, res) => {
    try {
        const servicios = await ServicioModel.findAll({
            include: [
                { model: ClienteModel, attributes: ['nombre', 'apellido', 'dni', 'email', 'telefono']},
                { model: PlanModel, attributes: ['nombre', 'descripcion', 'importe']}
            ]
        });
        res.status(200).json(servicios);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
};

const crearServicio = async (req, res) => {
    try {

        await ServicioModel.create(req.body)

        // Generar respuesta exitosa
        res.status(201).json({
            ok: true,
            msg: 'Servicio creado correctamente',
            icon: 'success'
        });
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

module.exports = { traerServicios, crearServicio }