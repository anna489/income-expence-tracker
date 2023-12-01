const { sql } = require("../config/pgDb");
const bcrypt = require("bcrypt");

const category = async (req, res) => {
  try {
    const { name, color, avatarImage } = req.body;
    await sql`INSERT INTO category(color, name, avatarImg) VALUES(${color}, ${name}, ${avatarImage})`;
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const categorycheck = async (req, res) => {
  try {
    const { userAvatariImage, userName } = req.body;

    const findUser =
      await sql`SELECT name, color, avatarImage FROM category WHERE name=${userName}`;

    if (findUser.length === 0) {
      return res.status(400).json({ message: "category not found" });
    }

    const isCheck = bcrypt.compareSync(
      userAvatariImage,
      findUser[0].avatarImage
    );

    if (!isCheck) {
      return res.status(400).json({ message: "wrong username or password" });
    }

    const { avatarImage, ...category } = findUser[0];

    res.status(201).json({ message: "success", category });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

module.exports = { category, categorycheck };
