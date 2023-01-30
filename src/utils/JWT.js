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
    const valToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!valToken) throw new Error('Token inválido');
    return valToken.data;
};

module.exports = {
    createToken,
    validateToken,
};