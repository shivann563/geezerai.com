// Geezer Memory System


let geezerMemory =
JSON.parse(
localStorage.getItem("GeezerMemory")
)
|| {};



function remember(key,value){

    geezerMemory[key]=value;


    localStorage.setItem(
        "GeezerMemory",
        JSON.stringify(geezerMemory)
    );

}



function recall(key){

    return geezerMemory[key];

}



function showMemory(){

    return JSON.stringify(
        geezerMemory,
        null,
        2
    );

}