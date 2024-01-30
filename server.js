import express from "express";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running on ${PORT} IN ${process.env.MES}`.bgCyan.white);
});
