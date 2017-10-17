$('.fadein img:gt(0)').hide();

setInterval(function () {
    $('.fadein :first-child').fadeOut()
                             .next('img')
                             .fadeIn()
                             .end()
                             .appendTo('.fadein');
                             
}, 7000); // 4 seconds



// var msg = new SpeechSynthesisUtterance(' Most men, despite lip service to equality, are reluctant to give up this "natural" order of things in which their advantages are so great; for women, the case is further complicated by the fact that, as Mill astutely pointed out, unlike other oppressed groups or castes, men demand of them not only submission but unqualified affection as well; thus women are often weakened by the internalized demands of the male-dominated society itself, as well as by a plethora of material goods and comforts: the middle-class woman has a great deal more to lose than her chains.');
// 	msg.rate = .8; // 0.1 to 10
//   msg.pitch = 0; //0 to 2
// 	msg.lang = "english";
// window.speechSynthesis.speak(msg);

// var utterance = new SpeechSynthesisUtterance('Hello Treehouse');
// var voices = window.speechSynthesis.getVoices();

// utterance.voice = voices.filter(function(voice) { return voice.name == 'Agnes'; })[1];

// window.speechSynthesis.speak(utterance);


   
    