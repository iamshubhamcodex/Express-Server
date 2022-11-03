const express = require("express");
const router = express.Router();
let tim = 0;

router.get("/", (req, res) => {
  tim++;
  res.json(tim);
});
router.get("/projects/web", (req, res) => {
  res.send(require("./Projects/web"));
});

module.exports = router;
