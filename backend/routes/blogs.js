const express = require("express");
const blogController = require("../controller/blog");
const Auth = require("../middleware/auth");
const multer = require("multer");

const Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/upload/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: Storage });

const router = express.Router();

router.get("/get/allblog", Auth, blogController.getAllBlog);
router.get("/get/commonblog", blogController.getAllUsersBlog);
router.get("/get/blog/:id", Auth, blogController.getBlogById);
router.post(
  "/add/blog",
  upload.single("thumbnail"),
  Auth,
  blogController.addBlog
);
router.post("/delete/:id",blogController.deleteBlog)
router.patch("/update/:id",blogController.updateBlog)

module.exports = router;
