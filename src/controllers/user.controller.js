const userService = require('../services/user.service');
const jwtUtil = require('../utils/JWT');

const userServ = async (req, res) => {
    const newUser = await userService.createUser(req.body);
    const token = jwtUtil.createToken({ ...newUser.dataValues, password: undefined });
    return res.status(201).json({ token });
};

const getAll = async (_req, res) => {
    const users = await userService.getAll();

    return res.status(200).json(users);
};

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userService.getById(id);
        if (!user) return res.status(404).json({ message: 'User does not exist' });
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json();
    }
};

module.exports = {
    userServ,
    getAll,
    getById,
};