// Geezer AI Tools System


function calculate(expression){

    try{

        let result =
        eval(expression);

        return "Answer: " + result;

    }

    catch{

        return "I couldn't calculate that.";

    }

}




function getTime(){

    let now =
    new Date();


    return (
        "Current time: "
        +
        now.toLocaleTimeString()
    );

}




function getDate(){

    let today =
    new Date();


    return (
        "Today's date: "
        +
        today.toDateString()
    );

}




function setTimer(seconds){

    setTimeout(()=>{

        alert(
        "⏰ Geezer Timer Finished!"
        );

        speak(
        "Your timer is finished."
        );

    },
    seconds * 1000);


    return (
    "Timer set for "
    +
    seconds
    +
    " seconds."
    );

}




function randomNumber(min,max){

    return Math.floor(
        Math.random()
        *
        (max-min+1)
    )
    + min;

}




function openWebsite(site){

    window.open(
        site,
        "_blank"
    );

}