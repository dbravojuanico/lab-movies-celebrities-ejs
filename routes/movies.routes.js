const Movie = require("../models/Movie.model");
const Celeb = require("../models/Celebrity.model");


const router = require("express").Router();

router.get("/", (req, res) => {
  Movie.find()
  .then((data)=>{
      console.log(data)
      res.render("movies/movies", {data})
  })
})

router.get("/create", (req, res, next) => {
    Celeb.find()
    .then((data)=>{
      res.render("movies/new-movie", {data})  
    })
});

router.post("/create", (req, res, next) => {
  Movie.create(req.body)
  .then(()=>{
      res.redirect("/movies")
  })
 error => {
  res.redirect("/create")
 }
});  
  
module.exports = router;

