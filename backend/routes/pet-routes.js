const express = require("express");

const router = express.Router();

const petsController = require("../controllers/pets-controllers");

router.post("/", petsController.postCreatePet);

module.exports = router;
