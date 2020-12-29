const express = require('express');

const router = express.Router();

const userController = require('../controllers/users-controllers');

router.get('/', userController.getUsers);

router.post('/', userController.signup);

module.exports = router;