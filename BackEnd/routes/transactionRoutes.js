const { Router } = require("express");
const {
  createTransaction,
  getAllTransaction,
  getTotalIncomeExpense,
  getChartData,
} = require("../controller/transactionController");

const router = Router();

router.route("/chartData/:userId").get(getChartData);
router.route("/total").get(getTotalIncomeExpense);
router.route("/").post(createTransaction);
router.route("/:userId").get(getAllTransaction);

module.exports = router;
