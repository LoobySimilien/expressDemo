
const router = require('express').Router();

let puppies = [{
  id:1, 
  name:'Tommy', 
  image:"https://cdn.pixabay.com/photos/puppy-dog-pet-animal-cute-white-1903313/"
},{
  id:2, 
  name: "Speedy",
  image: "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__480.jpg"
},
{
  id:3,
  name: "Roger",
  image: "https://cdn.pixabay.com/photo/2015/11/17/13/13/bulldog-1047518__480.jpg"
},{
  id: 4,
  name: "Richard",
  image: "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__480.jpg",
  
},{
  id:5,
  name:"Spot",
  image: "https://cdn.pixabay.com/photo/2015/11/03/12/58/dog-1020790__480.jpg"
}]




module.exports = router;
