const express = require("express");
const categoryController = require("../controller/category");

const router = express.Router();

router.post("/add/category", categoryController.addNewCategories);
router.get("/get/category", categoryController.getAllCategories);

module.exports = router;
