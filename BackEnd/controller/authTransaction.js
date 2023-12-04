const { sql } = require("../config/pgDb");

const transaction = async (req, res) => {
  try {
    const { user_id, name, amount, description, category_id } = req.body;
    await sql`INSERT INTO transaction( name, amount, description,category_id,user_id) 
    VALUES(${name}, ${amount}, ${description} , ${category_id}, ${user_id})`;
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
//  transaction_type, description, category_id
// ${transaction_type}, ${description}, ${category_id},
// transaction_type, description, category_id
module.exports = { transaction };
