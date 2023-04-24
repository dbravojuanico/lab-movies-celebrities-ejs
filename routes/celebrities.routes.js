
const Celeb = require("../models/Celebrity.model");

const router = require("express").Router();

router.get("/", (req, res) => {
    Celeb.find()
    .then((data)=>{
        console.log(data)
        res.render("celebrities/celebrities", {data})
    })
})

router.get("/create", (req, res, next) => {
       res.render("celebrities/new-celebrity")  
  });
  
router.post("/create", (req, res, next) => {
    Celeb.create(req.body)
    .then(()=>{
        res.redirect("/celebrities")
    })
   error => {
    res.redirect("/create")
   }
});  

module.exports = router;
