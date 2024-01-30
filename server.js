const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
