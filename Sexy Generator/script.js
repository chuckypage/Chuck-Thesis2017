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
 
 
$(document).ready(function(){
var imagesthree = [ 
  "watchone.png", 
  "watchtwo.png",
  "watchthree.png",
  "cologneone.png",
  "colognetwo.png",
  "colognethree.png",
];

init();

function random_image(imagesthree) {
  var randomimg = randomize(imagesthree);
  while(imagesthree[randomimg] === document.getElementById("imagethree").src){
    randomimg = randomize(imagesthree)
  }
  document.getElementById("imagethree").src = imagesthree[randomimg].toString();
}

function randomize(array){
  return Math.floor((Math.random() * (array.length)));
}

function init() {
  document.getElementById("imagethree").addEventListener("click", function(){
    random_image(imagesthree);
  });
  random_image(imagesthree);
}
});
 
 
$(document).ready(function(){
var imagesfour = [ 
  "handcheek.png", 
  "handchin.png",
  "girlwater.png",
  "feethand.png",
  "faceribbon.png",
  "handsone.png",
];

init();

function random_image(imagesfour) {
  var randomimg = randomize(imagesfour);
  while(imagesfour[randomimg] === document.getElementById("imagefour").src){
    randomimg = randomize(imagesfour)
  }
  document.getElementById("imagefour").src = imagesfour[randomimg].toString();
}

function randomize(array){
  return Math.floor((Math.random() * (array.length)));
}

function init() {
  document.getElementById("imagefour").addEventListener("click", function(){
    random_image(imagesfour);
  });
  random_image(imagesfour);
}
});

// var imageList = [
//   "handcheek.png", 
//   "handchin.png",
//   "girlwater.png",
//   "feethand.png",
//   "faceribbon.png",
//   "handsone.png",
//   "watchone.png", 
//   "watchtwo.png",
//   "watchthree.png",
//   "cologneone.png",
//   "colognetwo.png",
//   "colognethree.png",
   
// ];

// function updateRandomImages() {
//     var imageElements = $('img');
//     $.each(imageElements, function(index, element) {
//         displayRandomImage(element);
//     });
// }

// function displayRandomImage(element) {
//     var index = getRandomNumber(); 
//     $(element).attr( 'src', imageList[index] );
// }

// function getRandomNumber() {
//     return Math.floor(Math.random() * 10);
// }

// $('.sexybutton').click(function () {
//     updateRandomImages();
// });

// //start off with some random images
// updateRandomImages();