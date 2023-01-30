const authService = require('../services/auth.service');

const validateTokens = (req, res, next) => {
    const { authorization: token } = req.headers;

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }

    try {
        const { user } = authService.validateToken(token);
        req.auth = { user };
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    validateTokens,
};
