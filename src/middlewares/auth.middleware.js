const { authenticateToken } = require('../utils/JWT');

const validateToken = async (req, res, next) => {
    const token = req.headers.authorization;
    const user = await authenticateToken(token);
    if (!user) {
        const error = new Error('jwt malformed');
        error.status = 401;
        throw error;
    }
    res.locals.user = user;
    next();
};

module.exports = {
    validateToken,
};