const express = require("express");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT;


const app = express();

app.use(express.json());

// Authentication
app.use("/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`==Server ${PORT} deer aslaa==`);
});

