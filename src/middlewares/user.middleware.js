const { User } = require('../models');

const nameValid = (req, res, next) => {
    const { displayName } = req.body;

    if (displayName.length <= 7) {
        return res
            .status(400)
            .json({ message: '"displayName" length must be at least 8 characters long' });
    }

    next();
};

const emailValid = (req, res, next) => {
    const { email } = req.body;

    if (!email.includes('@') || !email.endsWith('.com')) {
        return res.status(400).json({
            message: '"email" must be a valid email',
        });
    }
    next();
};

const registeredEmail = async (req, res, next) => {
    const user = await User.findOne({
        where: { email: req.body.email },
    });

    if (user) return res.status(409).json({ message: 'User already registered' });

    next();
};

const passwordLeng = (req, res, next) => {
    const { password } = req.body;
    if (password.length <= 5) {
        return res.status(400)
            .json({ message: '"password" length must be at least 6 characters long' });
    }

    next();
};

module.exports = {
    nameValid,
    emailValid,
    passwordLeng,
    registeredEmail,
};