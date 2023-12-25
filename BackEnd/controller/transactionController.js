const { sql } = require("../config/pgDb");

const getAllTransaction = async (req, res) => {
  const {userId} = req.params
  console.log("GET userid",userId)
  try{
    const transactions = await sql`SELECT tr.name, tr.amount, tr.createdat,tr.id, tr.transaction_type, ct.avatarimg, ct.color FROM transaction tr INNER JOIN category ct ON tr.category_id=ct.id WHERE tr.user_id=${userId} ORDER BY createdat DESC `;
    console.log("gettransaction", transactions)
    res.status(200).json({ message: "success", transactions });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
  }


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
    } = req.body;

    console.log(req.body);

    const data =
      await sql`INSERT INTO transaction(user_id, category_id, name, amount, description, transaction_type) VALUES(${userId}, ${category_id}, ${transaction_name}, ${amount}, ${description}, ${transaction_type})`;
      console.log("BACKaDDtRAdATA",data)
    res.status(201).json({ message: "success", transaction: data[0] });
   
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

module.exports = { createTransaction, getAllTransaction };
