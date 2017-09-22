$(document).ready(function() {
    $(".girlone").draggable().resizable();
    $( ".girltwo" ).draggable().resizable();
    $( ".girlthree" ).draggable().resizable();
    $( ".girlfour" ).draggable().resizable();
    $( ".girlfive" ).draggable().resizable();
    $( ".girlsix" ).draggable().resizable();
    $( ".girlseven" ).draggable().resizable();
    $( ".girleight" ).draggable().resizable();
    $( ".girlnine" ).draggable().resizable();
    $( ".girlten" ).draggable().resizable();
    $( ".girleleven" ).draggable().resizable();
    $( ".girltwelve" ).draggable().resizable();
    $( ".house" ).draggable({containment: "html"});
    $( ".housetwo" ).draggable({containment: "html"});
    $( ".housethree" ).draggable({containment: "html"});
    $( ".housefour" ).draggable({containment: "html"});
  });


    $(document).on('mousemove', function(e){
        $('#cursor').css({
            left:  e.pageX,
            top:   e.pageY,
            pointerEvents: 'none'

    });

// });
    $('.girltwelve, .girleleven, .girlten, .girlnine, .girleight, .girlseven, .girlsix, .girlfive, .girlfour, .girlthree, .girltwo, .girlone').hover(
    function() {
        sound = $(this).children()[0];
        sound.play();
    }, function() {
        sound.pause();
        sound.currentTime = 0;
    });

});

    $(document).ready(
    function() {
        $(".house").click(function() {
            $(".housetwo").show();
            $(".house").hide();
            });
        $(".housetwo").click(function() {
            $(".housethree").show();
            $(".housetwo").hide();
            });
        $(".housethree").click(function() {
            $(".housefour").show();
            $(".housethree").hide();
            });
         $(".buttonone").click(function() {
            $(".buttontwo").show();
        
            });


});






