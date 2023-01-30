const { User } = require('../models');

const createUser = async (body) => User.create(body);

const getAll = async () => User.findAll({
    attributes: { exclude: ['password'] },
});

const getById = async (id) => User
    .findOne(id, { attributes: { exclude: ['password'] } });

module.exports = {
    createUser,
    getAll,
    getById,
};