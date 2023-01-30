const express = require('express');
const auth = require('../controllers/auth.controller');
const loginValidate = require('../middlewares/loginValidate');

const router = express.Router();

router.post('/',
    loginValidate,
    auth.auth);

module.exports = router;