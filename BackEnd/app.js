const express = require("express");
const cors = require("cors");

const { sql } = require("./config/pgDb");

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const result = await sql`SELECT * FROM employee LIMIT 5`;
    console.log("answer", { result });
    res.status(200).send("send");
  } catch (error) {
    res.status(400).send("aldaa garlaa" + error);
  }
});

app.send("/SignUp", async (req, res) => {
  try {
    const user = await sql`INSERT INTO  users`;
    console.log("user", { user });
    res.status(200).send("send");
  } catch (error) {
    res.status(400).send("aldaa garlaa");
  }
});

app.listen(PORT, () => {
  console.log(`==Server ${PORT} deer aslaas==`);
});
