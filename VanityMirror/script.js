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


var msg = new SpeechSynthesisUtterance('Woman should show skin but not so much it looks trashy. Woman should wear makeup but not too much. It is attractive when women eat a lot but can still remain thin! It is attractive when women can eat as much as men. We like when women have big tits and big ass. Wear sexy lingerie once and a while. Woman should have good manners and be ladylike. women should shave regularly or be waxed. women should have smaller waste. women should try and be less emotional. a woman should dress sexy and look sexy. women should not be shy in bed but not be too crazy. a woman should know how to cook  ');
	msg.rate = .8; // 0.1 to 10
  msg.pitch = 0; //0 to 2
	msg.lang = "english";
window.speechSynthesis.speak(msg);
