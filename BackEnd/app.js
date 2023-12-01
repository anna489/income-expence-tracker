const express = require("express");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const cathRoutes = require("./routes/cathRoutes");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

// Authentication
app.use("/auth", authRoutes);
app.use("/auth", cathRoutes);
app.listen(PORT, () => {
  console.log(`==Server ${PORT} deer aslaa==`);
});
