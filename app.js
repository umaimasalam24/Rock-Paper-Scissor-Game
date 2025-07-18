function rollGame (){
    let result = document.getElementById("result");
    let game = Math.floor(Math.random()*3);
    let diceFace = ["👊","✌️" , "✋"];
    result.innerHTML = diceFace[game]
}
