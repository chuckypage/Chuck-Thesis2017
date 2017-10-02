// var synth = window.speechSynthesis;
// var allVoices = synth.getVoices();

// var sampleText = " Woman should show skin but not so much it looks trashy. Woman should wear makeup but not too much. It is attractive when women eat a lot but can still remain thin! It is attractive when women can eat as much as men. We like when women have big tits and big ass. Wear sexy lingerie once and a while. Woman should have good manners and be ladylike. women should shave regularly or be waxed. women should have smaller waste. women should try and be less emotional. a woman should dress sexy and look sexy. women should not be shy in bed but not be too crazy. a woman should know how to cook  ";
// var utterance = new SpeechSynthesisUtterance(sampleText);



// if (speechSynthesis.onvoiceschanged !== undefined) {
//   speechSynthesis.onvoiceschanged = synth.getVoices;
// }

// utterance.voice = allVoices.filter(
//   function(allVoices) 
//   { 
    
//     return voice.name == 'Monica';
//   })[0];
  
  
// window.speechSynthesis.speak(utterance);


// var msg = new SpeechSynthesisUtterance('Woman should show skin but not so much it looks trashy. Woman should wear makeup but not too much. It is attractive when women eat a lot but can still remain thin! It is attractive when women can eat as much as men. We like when women have big tits and big ass. Wear sexy lingerie once and a while. Woman should have good manners and be ladylike. women should shave regularly or be waxed. women should have smaller waste. women should try and be less emotional. a woman should dress sexy and look sexy. women should not be shy in bed but not be too crazy. a woman should know how to cook  ');
// 	msg.rate = .8; // 0.1 to 10
//   msg.pitch = 0; //0 to 2
// 	msg.lang = "english";
// window.speechSynthesis.speak(msg);

// var msg = new SpeechSynthesisUtterance('My name is stuart i am a slut and a half fuck the world');
// 	msg.rate = .4; // 0.1 to 10
//   msg.pitch = 0; //0 to 2
// 	msg.lang = "english";
// window.speechSynthesis.speak(msg);
// $(document).ready(
//     function() {
//          $(".console-forward").click(function() {
//             $(".frame-two").show();
//             $(".frame-one").hide();
//             });
//         $(".console-back").click(function() {
//             $(".frame-three").show();
//             $(".frame-one").hide();
//             });
       
//         $(".housethree").click(function() {
//             $(".housefour").show();
//             $(".housethree").hide();
//             });
//          $(".buttonone").click(function() {
//             $(".buttontwo").show();
        
//             });
//  });
// $(function () {
//     $('.frame div').hide();
//     $('.frame .one').show();
//     var index = 1;
//     var count = $('.frame').children().length;
//     $('.console-forward').click(function () {
//         console.log('clicked');
//         index++;
//         if (index <= count) {
//             $('.frame div').hide();
//             $('.frame .' + index).show();
//             $('.console-back').show();
//         } else if (index > count) {
//             index = count;
//         }
//     });
//     $('.console-back').click(function () {
//         index--;
//         if (index > 0 && index <= count) {
//             $('.frame div').hide();
//             $('.frame .' + index).show();
//         } else if (index < 1) {
//             index = 1;
//             $('.console-forward').hide();
//         }
//     });
// });

var interval = undefined;
$(document).ready(function () {
    interval = setInterval(getNext, 10000000); // milliseconds
    $('.console-forward').on('click', getNext);
    $('.console-back').on('click', getPrev);
});

function getNext() {
    var $curr = $('.slideshow img:visible'),
        $next = ($curr.next().length) ? $curr.next() : $('.slideshow img').first();

    transition($curr, $next);
}

function getPrev() {
    var $curr = $('.slideshow img:visible'),
        $next = ($curr.prev().length) ? $curr.prev() : $('.slideshow img').last();
    transition($curr, $next);
}

function transition($curr, $next) {
    clearInterval(interval);

    $next.css('z-index', 2).fadeIn('slow', function () {
        $curr.hide().css('z-index', 0);
        $next.css('z-index', 1);
    });

}
