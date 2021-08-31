const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookieParser());

const origin = ["http://localhost:3000"];
app.use(cors({ origin, credentials: true }));

mongoose
  .connect(process.env.DB)
  .then(() => console.log("DB Connected..."))
  .catch((err) => console.log(err));

app.use("/api/auth", require("./routes/user"));
app.use("/api/admin", require("./routes/admin"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
