const express = require("express");
const router = express.Router();

// @route GET api/auth
// @desc Test route
// @access PUBLIC
router.get("/", (req, res) => {
  res.send("Auth routes");
});

module.exports = router;