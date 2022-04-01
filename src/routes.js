const express = require("express");

const SendEmailClientController = require("../src/Controllers/SendEmailClientController");

const router = express.Router();

router.post("/", SendEmailClientController.ToSendClientConfirm);

module.exports = router