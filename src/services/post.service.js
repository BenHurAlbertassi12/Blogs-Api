const { BlogPost, User, Category } = require('../models');

const getAll = async () => BlogPost.findAll({
        include: [
            { model: Category, as: 'categories', through: { attributes: [] } },
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
        ],
    });

module.exports = {
    getAll,
};