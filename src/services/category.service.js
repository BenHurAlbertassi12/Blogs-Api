const { Category } = require('../models');

const createCategory = async (name) => Category.create({ name });

const getAllCat = async () => Category.findAll();

module.exports = {
    createCategory,
    getAllCat,
};