<script src="voice.js"></script>

function sendMessage(){

    let input =
    document.getElementById("userInput");


    let text =
    input.value;


    if(text=="")
    return;


    addMessage(
        text,
        "user"
    );


    input.value="";


    setTimeout(()=>{

        let reply =
        geezerReply(text);


        addMessage(
        reply,
        "bot"
        );


    },500);

}



function addMessage(text,type){

    let chat =
    document.getElementById("chatbox");


    let message =
    document.createElement("div");


    message.className =
    "message "+type;


    message.innerHTML =
    text;


    chat.appendChild(message);


    chat.scrollTop =
    chat.scrollHeight;

}



function geezerReply(input){

    input =
    input.toLowerCase();


    if(input.includes("hello")
    || input.includes("hi")){

        return "Hello! Great to see you 😎";

    }


    if(input.includes("name")){

        return "My name is Geezer AI 🤖";

    }


    if(input.includes("game")){

        return "I can add games like trivia and guessing games!";

    }


    if(input.includes("roblox")){

        return "Roblox is awesome! I can help with Roblox Studio too.";

    }


    if(input.includes("time")){

        return "I can learn real-time tools later!";

    }


    return "I'm still learning, but I will become smarter soon! 🧠";

}