const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5500;
let tim = 0;

app.use(express.json());
app.use(cors());

app.use("/api", (req, res) => {
  tim++;
  res.json(tim);
});

app.listen(port, () => {
  console.log(`Listening at ${port} port`);
});
