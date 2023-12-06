const { Router } = require("express");
const { transaction } = require("../controller/authTransaction");
const { gettransaction } = require("../controller/authTransaction");
// const { puttransaction } = require("../controller/authTransaction");
const router = Router();

router.route("/transaction").post(transaction);
router.route("/gettransaction").get(gettransaction);
router.route("/transaction").delete(transaction);
// router.route("/transaction").put(puttransaction);

module.exports = router;
