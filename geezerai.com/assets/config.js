// Geezer AI Configuration


const GeezerConfig = {


    name:
    "Geezer AI",


    version:
    "1.0",


    creator:
    "Developer",


    theme:
    "Neon Purple",


    voiceEnabled:
    true,


    memoryEnabled:
    true,


    gamesEnabled:
    true,


    maxMemory:
    100,


    greeting:

    [
        "Hello! I'm Geezer AI 🤖",
        "Ready to help!",
        "What can I do for you?"
    ]

};




// Get random greeting

function getGreeting(){

    let greetings =
    GeezerConfig.greeting;


    return greetings[
    Math.floor(
    Math.random()
    *
    greetings.length
    )
    ];

}