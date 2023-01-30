const Joi = require('joi');
const jwtUtil = require('../utils/JWT');

const { User } = require('../models');

const schema = Joi.object({
    email: Joi.string().min(1).email(),
    password: Joi.string(),
});

const validateBody = (body) => {
    const { err, value } = schema.validate(body);
    if (err) throw err;
    return value;
};

const validateToken = (token) => {
    if (!token) {
        const err = new Error('Token é obrigatório');
        console.log(err);
    }
    const user = jwtUtil.validateToken(token);
    return user;
};

const validateLogin = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
        const err = new Error('Invalid user or pasword');
        throw err;
    }
    return jwtUtil.createToken(user);
};

module.exports = {
    validateBody,
    validateLogin,
    validateToken,
};