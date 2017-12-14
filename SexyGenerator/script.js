var things = [ 
  "drill.png", 
  "fridge.png",
  "car1.png",
  "car2.png",
  "watchone.png", 
  "watchtwo.png",
  "watchthree.png",
  "cologneone.png",
  "colognetwo.png",
  "colognethree.png"
  
  ];

var sexybody = [ 
  "handsone.png",
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

function random_image() {
  var thing = pickRandom(things)
  var sexy = pickRandom(sexybody)
// console.log()
  document.getElementById("girlimages").src = sexy;
  document.getElementById("thingimages").src = thing;
}


function pickRandom(arr) {
	// ... random array element
	
  return arr[Math.floor(Math.random() * arr.length)];
}


function init() {
    
  document.getElementById("gobutton").addEventListener("click", function(){
      
    //   doBounce($(girlimages), 3, '10px', 300);
    random_image();
    
  });
  random_image();
}


 
 
 
// $(document).ready(function(){
// var imagesthree = [ 
//   "watchone.png", 
//   "watchtwo.png",
//   "watchthree.png",
//   "cologneone.png",
//   "colognetwo.png",
//   "colognethree.png",
// ];

// init();

// function random_image(imagesthree) {
//   var randomimg = randomize(imagesthree);
//   while(imagesthree[randomimg] === document.getElementById("imagethree").src){
//     randomimg = randomize(imagesthree)
//   }
//   document.getElementById("imagethree").src = imagesthree[randomimg].toString();
// }

// function randomize(array){
//   return Math.floor((Math.random() * (array.length)));
// }

// function init() {
//   document.getElementById("imagethree").addEventListener("click", function(){
//     random_image(imagesthree);
//   });
//   random_image(imagesthree);
// }
// });
 
 
// $(document).ready(function(){
// var imagesfour = [ 
//   "handcheek.png", 
//   "handchin.png",
//   "girlwater.png",
//   "feethand.png",
//   "faceribbon.png",
//   "handsone.png",
// ];

// init();

// function random_image(imagesfour) {
//   var randomimg = randomize(imagesfour);
//   while(imagesfour[randomimg] === document.getElementById("imagefour").src){
//     randomimg = randomize(imagesfour)
//   }
//   document.getElementById("imagefour").src = imagesfour[randomimg].toString();
// }

// function randomize(array){
//   return Math.floor((Math.random() * (array.length)));
// }

// function init() {
//   document.getElementById("imagefour").addEventListener("click", function(){
//     random_image(imagesfour);
//   });
//   random_image(imagesfour);
// }
// });

$('#titicon').click(function () {
    window.location = '../HornyBoys/index.html';
});


$('#strippericon').click(function () {
    window.location = '../Dreamhouse/index.html';
});

$('#bouncyicon').click(function () {
    window.location = '../ReadMe/index.html';
});

$('#handicon').click(function () {
    window.location = '../VanityMirror/index.html';
});

$('#buynowicon').click(function () {
    window.location = '../BuyNow/index.html';
});

$('#soapicon').click(function () {
    window.location = '../MagicCleanEraser/index.html';
});

$('#antiageicon').click(function () {
    window.location = '../ArtofAntiAging/index.html';
});

$('#houseicon').click(function () {
    window.location = '../index.html';
});

$('#sexy').click(function () {
    window.location = '../SexyGenerator/index.html';
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