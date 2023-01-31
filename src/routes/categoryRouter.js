const express = require('express');

// const { nameValidate } = require('../middlewares/newUserValid');

const auth = require('../middlewares/auth.middleware');

const controller = require('../controllers/category.controller');

const router = express.Router();

router.post('/', auth.validateTokens, controller.createCategory);

router.get('/', auth.validateTokens, controller.getAllCat);

module.exports = router;