var images = [ 
  "drill.png", 
  "fridge.png",
  "car1.png",
  "car2.png"];

init();

function random_image(images) {
  var random = randomize(images);
  while(images[random] === document.getElementById("image").src){
    random = randomize(images)
  }
  document.getElementById("image").src = images[random].toString();
}

function randomize(array){
  return Math.floor((Math.random() * (array.length)));
}

function init() {
  document.getElementById("image").addEventListener("click", function(){
    random_image(images);
  });
  random_image(images);
}

$(document).ready(function(){
var imagestwo = [ 
  "girl1.png", 
  "girl2.png",
  "girl3.png",
  "girl4.png",
  "girl5.png",
  "girl6.png",
  "girl7.png",
  "girl8.png",
  "girl9.png",
  "girl10.png",
  "girl11.png",
  "girl12.png",
  "girl13.png",
  "girl14.png",
  "girl15.png",
  "girl16.png",
  "girl17.png"];

init();

function random_image(imagestwo) {
  var randomimg = randomize(imagestwo);
  while(imagestwo[randomimg] === document.getElementById("imagetwo").src){
    randomimg = randomize(imagestwo)
  }
  document.getElementById("imagetwo").src = imagestwo[randomimg].toString();
}

function randomize(array){
  return Math.floor((Math.random() * (array.length)));
}

function init() {
  document.getElementById("imagetwo").addEventListener("click", function(){
    random_image(imagestwo);
  });
  random_image(imagestwo);
}
 });