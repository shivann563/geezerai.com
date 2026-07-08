// Geezer AI Voice System

let recognition;

if ("webkitSpeechRecognition" in window) {

    recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.lang = "en-US";


    recognition.onresult = function(event){

        let speech =
        event.results[0][0].transcript;


        document.getElementById("userInput").value =
        speech;


        sendMessage();

    };


}



function startListening(){

    if(recognition){

        recognition.start();

    }
    else{

        alert(
        "Voice recognition is not supported on this browser."
        );

    }

}



function speak(text){

    let voice =
    new SpeechSynthesisUtterance(text);


    voice.rate = 1;
    voice.pitch = 1;


    speechSynthesis.speak(voice);

}