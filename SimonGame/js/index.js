var buttonColours = ["red", "blue", "green", "yellow"];
var comp = [];
var user = [];
var started = false;
var level = 0;

$("body").keypress(function () 
{
    if(!started)
    {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }    
})

$(".btn").click(function()
{
    user.push(this.id);
    playSound(this.id);
    animatePress(this.id);
    checkAnswer(user.length-1);
})


function checkAnswer (currentLever)
{
    if(comp[currentLever] === user[currentLever])
    {
        /// you did chose the right one.

        /// now lets see for the whole sequence
        if(user.length === comp.length)
        {
            setTimeout(nextSequence, 1000);
        }
    }
    else
    {
        /// you typed wrong.
        gameOver();
    }
}


function nextSequence ()
{
    level++;
    user = [];
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    comp.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}






function gameOver()
{
    $("body").css("background-color", "red");
    user = comp = [];
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    level = 0;
    started = false;
}












function animatePress(currentColor) 
{
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () 
    {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function playSound(name) 
{
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}