const { sql } = require("../config/pgDb");

const transaction = async (req, res) => {
  try {
    const { user_id, name, amount, description, category_id } = req.body;
    await sql`INSERT INTO transaction( name, amount, description, category_id, user_id) 
    VALUES(${name}, ${amount}, ${description} , ${category_id}, ${user_id})`;
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const gettransaction = async (req, res) => {
  try {
    const { user_id } = req.body;
    const findTrans =
      await sql`SELECT user_id, name FROM transaction WHERE  user_id=${user_id}`;

    if (findTrans.length === 0) {
      return res.status(400).json({ message: "user not found" });
    }
    res.status(201).json({ message: "success", user_id });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deletetransaction = async (req, res) => {
  try {
    const { user_id } = req.body;

    const findTrans =
      await sql`DELETE user_id name FROM transaction WHERE user_id=${user_id}`;
    if (findTrans.length === 0) {
      return res.status(400).json({ message: "user not found" });
    }
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { transaction, gettransaction, deletetransaction };
