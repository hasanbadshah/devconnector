const express = require("express");
const router = express.Router();

// @route GET  api/posts/test
// @desc  Tests profile router
// @access public
router.get("/test", (req, res) =>
  res.json({
    msg: "Profile Works"
  })
);

module.exports = router;
