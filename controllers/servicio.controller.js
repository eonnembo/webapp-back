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
        const { idCliente, idPlan } = req.body;

        // Verifica si ya existe un registro con el mismo idCliente e idPlan
        const existeRegistro = await ServicioModel.findOne({
            where: {
                idCliente: idCliente,
                idPlan: idPlan,
            },
        });

        if (existeRegistro) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya se encuentra cargado el servicio, para el cliente seleccionado.',
                icon: 'warning',
            });
        }

        // Si no existe, crea el nuevo servicio
        await ServicioModel.create(req.body);

        // Generar respuesta exitosa
        res.status(201).json({
            ok: true,
            msg: 'Servicio creado correctamente',
            icon: 'success',
        });
    } catch (error) {
        console.error('Error al crear el servicio:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};


module.exports = { traerServicios, crearServicio }