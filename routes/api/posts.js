const express = require("express");
const router = express.Router();

// @route GET api/profile
// @desc Test route
// @access PUBLIC
router.get("/", (req, res) => {
  res.send("Posts routes");
});

module.exports = router;
