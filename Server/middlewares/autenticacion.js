const jwt = require('jsonwebtoken');
/**
 * VERIFICAR TOKEN
 */
let verificaToken = (req, res, next) => {
    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'token invalido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });

};


/**
 * VERIFICA ADMIN ROL
 */

let verificaAdmin_Role = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'el usuario no es Admin'
            }
        });
    }
};


/**
 * VERIFICAR TOKEN en imagen 
 */
let verificaTokenImg = (req, res, next) => {
    let token = req.query.token;

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'token invalido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });
}


module.exports = {
    verificaToken,
    verificaAdmin_Role,
    verificaTokenImg
}