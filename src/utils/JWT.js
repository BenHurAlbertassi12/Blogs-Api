require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (data) => {
    const token = jwt.sign({ data }, process.env.JWT_SECRET, {
        expiresIn: '15d',
        algorithm: 'HS256',
    });

    return token;
};

const validateToken = (token) => {
    try {
        const valToken = jwt.verify(token, process.env.JWT_SECRET);
        return valToken.data;
    } catch (err) {
        if (err instanceof jwt.JsonWebTokenError) {
            throw new Error('Token inválido');
        } else if (err instanceof jwt.TokenExpiredError) {
            throw new Error('Token expirado');
        } else {
            throw err;
        }
    }
};

module.exports = {
    createToken,
    validateToken,
};