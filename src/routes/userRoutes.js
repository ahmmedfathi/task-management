const express = require('express');
const { register, login } = require('../controllers/userController');
const { registerValidator, loginValidator } = require('../validations/userValidation');

const router = express.Router();

router.post('/register', registerValidator, register);
router.post('/login', loginValidator, login);

module.exports = router;
