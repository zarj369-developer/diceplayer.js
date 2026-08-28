var player1 = Math.floor(6*Math.random())+1;

var imdice1 = 
[   "./Image/dice1.png",
    "./Image/dice2.png",
    "./Image/dice3.png",
    "./Image/dice4.png",
    "./Image/dice5.png",
    "./Image/dice6.png",
]
document.querySelector(".img1").setAttribute("src" ,imdice1[player1 - 1]);

var player2 = Math.floor(6*Math.random())+1;

var imdice2 = 
[   "./Image/dice1.png",
    "./Image/dice2.png",
    "./Image/dice3.png",
    "./Image/dice4.png",
    "./Image/dice5.png",
    "./Image/dice6.png",
]
document.querySelector(".img2").setAttribute("src" ,imdice2[player2 - 1]);

if (player1<player2){
    document.querySelector("h1").innerHTML ="player 2 is winner"
}
else if(player1===player2){
    document.querySelector("h1").innerHTML= "drawww"
}
else{
    document.querySelector("h1").innerHTML="playe1 is winnerr"
}