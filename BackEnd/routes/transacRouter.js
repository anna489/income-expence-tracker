const { Router } = require("express");
const { transaction } = require("../controller/authTransaction");

const router = Router();

router.route("/transaction").post(transaction);

module.exports = router;
