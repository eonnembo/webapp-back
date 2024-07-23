const Cliente = require('../models/Cliente.model');
const bcrypt = require('bcryptjs');

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
            return res.status(404).json({ ok: false, msg: 'Cliente no encontrado', icon: 'warning' });
        }

        res.status(200).json(clienteEncontrado);
    } catch (error) {
        console.error('Error al buscar cliente:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const crearCliente = async (req, res) => {
    const { dni, telefono } = req.body;

    // Eliminar espacios del número de teléfono
    const telefonoSinEspacio = telefono.replace(/\s/g, '');

    // Eliminar puntos del DNI
    const dniSinPuntos = dni.replace(/\./g, '');

    try {
        // Verificar el email en la DB
        const clienteEncontrado = await Cliente.findOne({ where: { dni: dniSinPuntos } });
        if (clienteEncontrado) {
            return res.status(400).json({
                ok: false,
                msg: "El cliente ya se encuentra registrado",
                icon: 'warning'
            });
        }

        const salt = bcrypt.genSaltSync();
        const passwordHash = bcrypt.hashSync('123456', salt);
        // Guardar cliente en DB
        const nuevoCliente = await Cliente.create({ ...req.body, password: passwordHash, dni: dniSinPuntos, telefono: telefonoSinEspacio });

        // Generar respuesta exitosa
        res.status(201).json({
            ok: true,
            msg: 'Cliente creado correctamente',
            idCliente: nuevoCliente.id,
            icon: 'success'
        });
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const modificarCliente = async (req, res) => {
    const { id, dni, telefono } = req.body;

    // Eliminar espacios del número de teléfono
    const telefonoSinEspacio = telefono.replace(/\s/g, '');

    // Eliminar puntos del DNI
    const dniSinPuntos = dni.replace(/\./g, '');

    try {
        // Actualizar cliente en DB
        await Cliente.update({ ...req.body, dni: dniSinPuntos, telefono: telefonoSinEspacio }, {
            where: { id: id }
        });

        // Generar respuesta exitosa
        res.status(201).json({
            ok: true,
            msg: 'El cliente se modificó correctamente',
            icon: 'success'
        });
    } catch (error) {
        console.error('Error al modificar el cliente:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};

const eliminarCliente = async (req, res) => {
    try {
        const clienteEncontrado = await Cliente.findByPk(req.params.id);
        if (!clienteEncontrado) {
            return res.status(404).json({ ok: false, msg: 'Cliente no encontrado', icon: 'warning' });
        }
        await clienteEncontrado.destroy()
        res.json({ ok: true, msg: 'El cliente se eliminó correctamente', icon: 'success' });
    } catch (error) {
        console.error('Error al eliminar el cliente:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
}

module.exports = { traerClientes, traerUnCliente, crearCliente, modificarCliente, eliminarCliente }

// const { Op } = require('sequelize');

// const buscarClientes = async (req, res) => {
//     const cadena = req.params.cadena;

//     try {
//         // Crea un objeto con las condiciones de búsqueda
//         const condiciones = {
//             where: {
//                 [Op.or]: [
//                     { nombre: { [Op.like]: `%${cadena}%` } },
//                     { apellido: { [Op.like]: `%${cadena}%` } },
//                     { dni: { [Op.like]: `%${cadena}%` } },
//                 ],
//             },
//         };

//         // Realiza la búsqueda en la base de datos
//         const clientesEncontrados = await Cliente.findAll(condiciones);

//         if (clientesEncontrados.length === 0) {
//             return res.status(404).json({ ok: false, msg: 'Clientes no encontrados' });
//         }

//         res.status(200).json(clientesEncontrados);
//     } catch (error) {
//         console.error('Error al buscar clientes:', error);
//         res.status(500).json({ ok: false, msg: 'Error interno del servidor' });
//     }
// };