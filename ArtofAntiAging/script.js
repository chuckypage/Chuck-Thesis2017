var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
} 

 $('.title').hover(
    function() {
        sound = $(this).children()[0];
        sound.play();
    }, function() {
        sound.pause();
        sound.currentTime = 0;
    });
    
    
     $('.next').hover(
    function() {
        sound = $(this).children()[0];
        sound.play();
    }, function() {
        sound.pause();
        sound.currentTime = 0;
    });
    
    
     $('.prev').hover(
    function() {
        sound = $(this).children()[0];
        sound.play();
    }, function() {
        sound.pause();
        sound.currentTime = 0;
    });
    
   var ads = [
       "antiage1.jpg",
       "antiage2.jpg",
       "antiage3.jpg",
       "antiage4.jpg",
       "antiage5.jpg",
       "antiage6.jpg",
       "antiage7.jpg",
       "antiage8.jpg",
       "antiage9.jpg",
       "antiage10.jpg",
       "antiage11.jpg",
       "antiage12.jpg",
       "antiage13.jpg",
       "antiage14.jpg",
       "antiage15.jpg",
       "antiage16.jpg",
       "antiage17.jpg",
       "antiage18.jpg",
       "antiage19.jpg",
       "antiage20.jpg",
       "antiage21.jpg",
       
       ]
       
     function randomElement (list){ 
        var randomNumber = Math.random();
        var randomWithinArrayLength = randomNumber * list.length;
        var randomArrayIndex = Math.floor(randomWithinArrayLength);
        var random = list[randomArrayIndex];
        return random
     }  
     
     setInterval(function() {
         var item = $('.item')
         var container = randomElement (item)
         var ad = randomElement(ads)
         $(container).css("background-image", "url(" + ad + ")")
         
     }, 800);

        
   
   
    
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
    
    
  