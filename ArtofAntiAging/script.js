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
    
    
$('#titicon').click(function () {
    window.location = 'https://chuckypage.github.io/Chuck-Thesis2017/HornyBoys/index.html';
});


$('#strippericon').click(function () {
    window.location = 'https://chuckypage.github.io/Chuck-Thesis2017/Dreamhouse/index.html';
});

$('#fileicon').click(function () {
    window.location = 'https://chuckypage.github.io/Chuck-Thesis2017/ReadMe/index.html';
});

$('#handicon').click(function () {
    window.location = 'https://chuckypage.github.io/Chuck-Thesis2017/VanityMirror/index.html';
});

$('#buynowicon').click(function () {
    window.location = 'http://chuckypage.github.io/coreinteraction-studio-CHUCK/project3/index.html';
});

$('#soapicon').click(function () {
    window.location = 'https://chuckypage.github.io/Chuck-Thesis2017/MagicCleanEraser/index.html';
});

$('#antiageicon').click(function () {
    window.location = 'https://chuckypage.github.io/Chuck-Thesis2017/ArtofAntiAging/index.html';
});

$('#houseicon').click(function () {
    window.location = 'http://chuckypage.github.io/coreinteraction-studio-CHUCK/project3/index.html';
});
    
    
  