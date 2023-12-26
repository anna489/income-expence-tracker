const express = require("express");
require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
// const cathRoutes = require("./routes/cathRoutes");
const imageRoutes = require("./routes/imageRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

const PORT = process.env.PORT;


const app = express();

app.use(cors());
app.use(express.json());

// Authentication
app.use("/auth", authRoutes);
// s
app.use("/api/image", imageRoutes);
app.use("/", categoryRoutes);
app.use("/transactions/", transactionRoutes);

app.listen(PORT, () => {
  console.log(`==Server ${PORT} deer aslaa==`);
});
