const express = require("express");
const cors = require("cors");

const app = express();
const port = 5500;
let tim = 0;

app.use(express.json());
app.use(cors());

app.use("/api", (req, res) => {
  res.json(tim);
  tim++;
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
