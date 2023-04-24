const router = require("express").Router();

router.get("/", (req, res, next) => {
    res.send("Here are the movies");
  });
  
module.exports = router;

