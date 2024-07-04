const Cliente = require('../models/Cliente.model');

const traerClientes = async (req, res) => {
    try {
        const cliente = await Cliente.findAll()
        res.status(200).json(cliente)
    } catch (error) {
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const traerUnCliente = async (req, res) => {
    try {
        const clienteEncontrado = await Cliente.findByPk(req.params.id);
        if (!clienteEncontrado) {
            return res.status(404).json({ ok: true, msg: 'Cliente no encontrado', icon: 'warning' });
        }

        res.status(200).json(clienteEncontrado);
    } catch (error) {
        console.error('Error al buscar cliente:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const crearCliente = async (req, res) => {
    const { dni } = req.body;
    try {
        // Verificar el email en la DB
        const clienteEncontrado = await Cliente.findOne({ where: { dni: dni } });
        if (clienteEncontrado) {
            return res.status(400).json({
                ok: false,
                msg: "El cliente ya se encuentra registrado",
                icon: 'warning'
            });
        }

        const dbCliente = {
            ...req.body,
            estado: 'PENDIENTE',
        };

        // Guardar cliente en DB
        await Cliente.create(dbCliente)

        // Generar respuesta exitosa
        res.status(201).json({ 
            ok: true, 
            msg: 'Cliente creado correctamente', 
            icon: 'success' 
        });
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const modificarCliente = async (req, res) => { 
    const { id } = req.body
    try {
        await Cliente.update(req.body, {
            where: { id: id }
        })
        res.status(201).json({ ok: true, msg: 'El cliente se modificó correctamente', icon: 'success' })
    } catch (error) {
        console.error('Error al modificar el cliente:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const eliminarCliente = async (req, res) => { }

module.exports = { traerClientes, traerUnCliente, crearCliente, modificarCliente, eliminarCliente }