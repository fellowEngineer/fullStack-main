var playerA = Math.floor(Math.random()*6)+1;
var playerB = Math.floor(Math.random()*6)+1;


var img1 = document.querySelector("img.img1");
img1.setAttribute("src", "images/dice"+playerA+".png");

var img2 = document.querySelector("img.img2");
img2.setAttribute("src", "images/dice"+playerB+".png");

var massage = "";
if(playerA > playerB)
{
    massage = "Player A wins!";
}
else if (playerA < playerB)
{
    massage = "Player B wins!";
}
else
{
    massage = "Both Players wins!";
}

document.querySelector(".winningMassage").textContent = massage;