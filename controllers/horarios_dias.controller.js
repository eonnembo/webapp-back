const HorariosDias = require('../models/HorariosDias.model');

const traerHorariosDiasPlan = async (req, res) => {
    try {
        const idPlan = req.params.id;
        const planesEncontrados = await HorariosDias.findAll({
            where: {
                idPlan: idPlan
            }
        });

        if (!planesEncontrados || planesEncontrados.length === 0) {
            return res.status(404).json({ ok: false, msg: 'No se encontraron planes', icon: 'warning' });
        }

        res.status(200).json(planesEncontrados);
    } catch (error) {
        console.error('Error al buscar los planes:', error);
        res.status(500).json({ ok: false, msg: 'Error interno del servidor', icon: 'error' });
    }
};



module.exports = { traerHorariosDiasPlan }