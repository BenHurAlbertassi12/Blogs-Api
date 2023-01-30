const userService = require('../services/user.service');
const jwtUtil = require('../utils/JWT');

const userServ = async (req, res) => {
    const newUser = await userService.createUser(req.body);
    const token = jwtUtil.createToken({ newUser, password: undefined });
    return res.status(201).json({ token });
};

const getAll = async (_req, res) => {
    const user = await userService.getAll();
    return res.status(200).json(user);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getById(id);

    if (!user) return res.status(404).json();

    return res.status(200).json(user);
};

module.exports = {
    userServ,
    getAll,
    getById,
};