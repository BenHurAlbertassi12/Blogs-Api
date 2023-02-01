const express = require('express');

const auth = require('../middlewares/auth.middleware');

const postController = require('../controllers/post.controller');

const router = express.Router();

router.get('/', auth.validateTokens, postController.getAll);

module.exports = router;