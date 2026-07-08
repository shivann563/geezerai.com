// Geezer AI Games


function guessNumber(){

    let number =
    Math.floor(Math.random()*10)+1;


    let guess =
    prompt(
    "Guess a number between 1 and 10"
    );


    if(guess == number){

        alert(
        "Correct! 🎉"
        );

    }

    else{

        alert(
        "Wrong! The answer was "
        + number
        );

    }

}




function coinFlip(){

    let result =
    Math.random();


    if(result < .5){

        return "Heads 🪙";

    }

    else{

        return "Tails 🪙";

    }

}




function joke(){

    let jokes=[

    "Why did the computer go to the doctor? It had a virus 😂",

    "Why was the robot tired? It had too many tasks 🤖",

    "Why did the programmer quit? Too many bugs 🐛"

    ];


    return jokes[
    Math.floor(
    Math.random()*jokes.length
    )
    ];

}