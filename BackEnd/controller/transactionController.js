const { sql } = require("../config/pgDb");

const getAllTransaction = async (req, res) => {
  const { userId } = req.params;
  console.log("GET userid", userId);
  try {
    const transactions =
      await sql`SELECT tr.name, tr.amount, tr.updatedat,tr.id, tr.transaction_type, ct.avatarimg, ct.color FROM transaction tr INNER JOIN category ct ON tr.category_id=ct.id WHERE tr.user_id=${userId} ORDER BY updatedat DESC `;
    console.log("gettransaction", transactions);
    res.status(200).json({ message: "success", transactions });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

const createTransaction = async (req, res) => {
  try {
    console.log("TRANSACTION-POST");
    const {
      userId,
      category_id,
      amount,
      transaction_type,
      description,
      transaction_name,
      updated_at,
    } = req.body;

    console.log(req.body);

    const data =
      await sql`INSERT INTO transaction(user_id, category_id, name, amount, description, transaction_type, updatedat) VALUES(${userId}, ${category_id}, ${transaction_name}, ${amount}, ${description}, ${transaction_type}, ${updated_at})`;
    console.log("BACKaDDtRAdATA", data);
    res.status(201).json({ message: "success", transaction: data[0] });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

const getTotalIncomeExpense = async (req, res) => {
  try {
    console.log("TOTAL");
    const data =
      await sql`SELECT transaction_type , SUM(amount) as total FROM transaction GROUP BY transaction_type`;
    console.log("data", data);

    const [inc] = data.filter((el) => el.transaction_type === "INC");
    const [exp] = data.filter((el) => el.transaction_type === "EXP");
    console.log("inc", inc);
    console.log("exp", exp);

    res.status(201).json({
      message: "success",
      totalIncome: inc.total,
      totalExpense: exp.total,
    });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: `failed because of ${error}` });
  }
};

const getChartData = async (req, res) => {
  try {
    // const { userId } = req.params;

    const pieChart = await sql`
      SELECT 
        ct.name as category_name, 
        SUM(amount) as total 
      FROM transaction tr 
      INNER JOIN 
        category ct ON tr.category_id=ct.id
      GROUP BY category_name;`;

    const barChart = await sql`
      SELECT
        EXTRACT(MONTH FROM updatedat) AS month,
        TO_CHAR(updatedat, 'Month') AS month_name,
        SUM(CASE WHEN transaction_type = 'INC' THEN amount ELSE 0 END) AS income,
        SUM(CASE WHEN transaction_type = 'EXP' THEN amount ELSE 0 END) AS expense
      FROM
          transaction
      GROUP BY
          month, month_name
      ORDER BY
          month;
      `;
    const labels = barChart.map((row) => row.month_name);
    const incomeData = barChart.map((row) => row.income);
    const expenseData = barChart.map((row) => row.expense);

    const dLabels = pieChart.map((e) => e.category_name);
    const data = pieChart.map((e) => e.total);

    res.status(201).json({
      message: "success",
      pieChart: { labels: dLabels, data },
      barChart: {
        labels,
        incomeData,
        expenseData,
      },
    });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTransaction,
  getAllTransaction,
  getTotalIncomeExpense,
  getChartData,
};
