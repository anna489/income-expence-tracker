const { Router } = require("express");
const {
  getAllCategory,
  createCategory,
} = require("../controller/categoryController");

const router = Router();

router.route("/categories/").get(getAllCategory);
router.route("/categories/").post(createCategory);

module.exports = router;
