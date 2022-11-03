const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5500;

app.use(express.json());
app.use(cors());

app.use("/api", require("./route"));

app.listen(port, () => {
  console.log(`Listening at ${port} port`);
});
