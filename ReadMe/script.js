$(document).ready(function(){

    $('.container').animate({'margin-top': '-200000px'}, 10000000, 'linear');
    
});

 
     $('.container').click(function(){
        $('.popup').toggle();
      
     });

$('.popup').click(function(){
        $('.popup').hide();
      
     });



$('#titicon').click(function () {
    window.location = '../HornyBoys/index.html';
});


$('#strippericon').click(function () {
    window.location = '../Dreamhouse/index.html';
});

$('#fileicon').click(function () {
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
// $( ".container" ).hover(function() {
//  $(this).stop(); //Stop the animation when mouse in


// });

// $('.container').mouseover(function(){
//       $(this).cycle('pause');
//     }).mouseout(function(){
//       $(this).cycle('resume');
//     });
    

// $(document).ready(function () {

//         $('.container')
        
//         .mouseover(function () { $(this).pauseAnimation(); })
//         .mouseout(function () { $(this).resumeAnimation(); })
//         .startAnimation({'margin-top': '-8000px'}, 90000);

//     });

$('.fadein img:gt(0)').hide();

setInterval(function () {
    $('.fadein :first-child').fadeOut()
                             .next('img')
                             .fadeIn()
                             .end()
                             .appendTo('.fadein');
                             
}, 7000); // 4 seconds


window.speechSynthesis.onvoiceschanged = function() {
    
var utterance = new SpeechSynthesisUtterance('Why have there been no great women artists? The question tolls reproachfully in the background of most discussions of the so-called woman problem. But like so many other so-called questions involved in the feminist "controversy," it falsifies the nature of the issue at the same time that it insidiously supplies its own answer: "There are no great women artists because women are incapable of greatness. The assumptions behind such a question are varied in range and sophistication, running anywhere from "scientifically proven" demonstrations of the inability of human beings with wombs rather than penises to create anything significant, to relatively open minded wonderment that women, despite so many years of near equality and after all, a lot of men have had their disadvantages too have still not achieved anything of exceptional significance in the visual arts. The feminists first reaction is to swallow the bait, hook, line and sinker, and to attempt to answer the question as it is put: that is, to dig up examples of worthy or insufficiently appreciated women artists throughout history; to rehabilitate rather modest, if interesting and productive careers; to "rediscover" forgotten flower painters or David followers and make out a case for them; to demonstrate that Berthe Morisot was really less dependent upon Manet than one had been led to think-in other words, to engage in the normal activity of the specialist scholar who makes a case for the importance of his very own neglected or minor master. Such attempts, whether undertaken from a feminist point of view, like the ambitious article on women artists which appeared in the 1858 Westminster Review, or more recent scholarly studies on such artists as Angelica Kauffmann and Artemisia Gentileschi, are certainly worth the effort, both in adding to our knowledge of womens achievement and of art history generally. But they do nothing to question the assumptions lying behind the question "Why have there been no great women artists?" On the contrary, by attempting to answer it, they tacitly reinforce its negative implications.');
var voices = speechSynthesis.getVoices();
var voice = voices.filter(function(voice) { return voice.name == 'Victoria'; })[0];
console.log(voice, voices, window);

utterance.voice = voice

speechSynthesis.speak(utterance);

};


   


    