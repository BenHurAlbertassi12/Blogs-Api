const postService = require('../services/post.service');

const getAll = async (_req, res) => {
    const get = await postService.getAll();

    return res.status(200).json(get);
};

module.exports = {
    getAll,
};