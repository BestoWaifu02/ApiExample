const { Router } = require("express");
const router = Router();
const _=require('underscore')
const movies = require("../sample.json");

router.get("/", (req, res) => {
  res.json(movies);
});

router.post("/", (req, res) => {
  //Espress validator sirve para validar los que se te envia
  const { Movie, Director, Year, Raiting } = req.body;
  if (Movie && Director && Year && Raiting) {
    const id = movies.length + 1;
    const newMovie = {
        id,
        ...req.body,
      
    };
    movies.push(newMovie)
    res.json(movies)

    res.send('Pelicula guardad');
  } else {
    res.send("No Valido");
  }
});

router.delete('/:id',(req,res)=>{
    const{id}=req.params
    _.each(movies,(movie,i)=>{
        if(movie.id==id){
            movies.splice(i,1)
        }
    })
    res.send('Deleted')
})



router.put('/:id',(req,res)=>{
    const{id}=req.params
    const { Movie, Director, Year, Raiting } = req.body;
  if (Movie && Director && Year && Raiting) {
    _.each(movies,(movie,i)=>{
        if(movie.id==id){
            movie.title=title,
            movie.director=director,
            movie.rating=rating,
            movie.year=year
        }
    })
    res.send('Pelicula 0k')
   
  } else {
    res.send('Error')
  }
})
module.exports = router;
