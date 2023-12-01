const { Router } = require("express");
const { category, categorycheck } = require("../category/authCategory");

const router = Router();

router.route("/category").post(category);
router.route("/categorycheck").post(categorycheck);

module.exports = router;