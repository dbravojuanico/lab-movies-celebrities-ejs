
const Celeb = require("../models/Celebrity.model");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("celebrities/celebrities")
})

router.get("/create", (req, res, next) => {
       res.render("celebrities/new-celebrity")  
  });
  
router.post("/create", (req, res, next) => {
    Celeb.create(req.body)
    .then(()=>{
        console.log(req.body)
    })
});  

module.exports = router;
