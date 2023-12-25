const { sql } = require("../config/pgDb");

const getAllCategory = async (req, res) => {
  try {
    const categories = await sql`SELECT * FROM category`;
// console.log("categories",categories)
    res.status(200).json({ message: "success", categories });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

const createCategory = async (req, res) => {
  const { name,  color, avatarimg } = req.body;
  try {
    const data =
      await sql`INSERT INTO category (name, color, avatarimg) VALUES(${name}, ${color}, ${avatarimg}) `;
    res.status(200).json({ message: "success", data });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

module.exports = { getAllCategory, createCategory };
