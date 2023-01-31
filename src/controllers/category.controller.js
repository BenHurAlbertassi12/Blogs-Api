const catService = require('../services/category.service');

const createCategory = async (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    try {
        const newCategory = await catService.createCategory(name);
        return res.status(201).json(newCategory);
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
};

const getAllCat = async (_req, res) => {
    try {
        const categories = await catService.getAll();
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createCategory,
    getAllCat,
};