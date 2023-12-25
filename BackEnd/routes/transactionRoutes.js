const { Router } = require("express");
const {
  createTransaction,
  getAllTransaction,
} = require("../controller/transactionController");

const router = Router();

router.route("/").post(createTransaction);
router.route("/:userId").get(getAllTransaction)

module.exports = router;
