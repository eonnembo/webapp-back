const DiasHorarios = require('../models/DiasHorarios.model');

const traerDiasHorariosSucursal = async (req, res) => {
    try {
        const idSucursal = req.params.id;
        const encontrados = await DiasHorarios.findAll({
            where: {
                idSucursal: idSucursal
            }
        });

        if (!encontrados || encontrados.length === 0) {
            return res.status(404).json({ ok: false, msg: 'No se encontraron días y horarios para esa sucursal', icon: 'warning' });
        }

        res.status(200).json(encontrados);
    } catch (error) {
        console.error('Error al días y horarios:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};



module.exports = { traerDiasHorariosSucursal }