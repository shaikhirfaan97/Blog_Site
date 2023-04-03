const express = require("express");
const authController = require("../controller/auth");

const router = express.Router();

router.post("/user/register", authController.userRegistration);
router.post("/user/login", authController.userLogin);

module.exports = router;
