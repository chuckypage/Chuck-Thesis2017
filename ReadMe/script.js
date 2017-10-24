$('.fadein img:gt(0)').hide();

setInterval(function () {
    $('.fadein :first-child').fadeOut()
                             .next('img')
                             .fadeIn()
                             .end()
                             .appendTo('.fadein');
                             
}, 7000); // 4 seconds



var utterance = new SpeechSynthesisUtterance(' Most.');


var voices = window.speechSynthesis.getVoices();

utterance.voice = voices.filter(function(voice) { return voice.name == 'Victoria'; })[0];

window.speechSynthesis.speak(utterance);


   
    