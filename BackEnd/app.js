const express = require("express");
require("dotenv").config();
const cors = ("cors")

const authRoutes = require("./routes/authRoutes");
const cathRoutes = require("./routes/cathRoutes");
const imageRoutes = require("./routes/imageRoutes");
const transacRouter = require("./routes/transacRouter");

const PORT = process.env.PORT;

const app = express();

app.use(cors())
app.use(express.json());

// Authentication
app.use("/auth", authRoutes);
app.use("/auth", cathRoutes);
app.use("/api/image", imageRoutes);
app.use("/auth", transacRouter);

app.listen(PORT, () => {
  console.log(`==Server ${PORT} deer aslaa==`);
});
