const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {

    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'Error en el token'
        });
    }
    try {
        const { id, codSuc } = jwt.verify(token, process.env.SECRET_JWT_SEED);
        req.id = id;
        req.codSuc = codSuc;
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }

    next();
}

module.exports = {
    validarJWT
}

