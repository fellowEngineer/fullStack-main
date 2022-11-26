/// function for playing the relavent sound .... 
function playSound(key) 
{
    var audio;
    var flag = true;
    switch (key) 
    {
        case 'w':
            audio = new Audio("sounds/tom-1.mp3");
            break;
        
        case 'a':
            audio = new Audio("sounds/tom-2.mp3");
            break;
    
        case 's':
            audio = new Audio("sounds/tom-3.mp3");
            break;

        case 'd':
            audio = new Audio("sounds/tom-4.mp3");
            break;

        case 'j':
            audio = new Audio("sounds/snare.mp3");
            break;

        case 'k':
            audio = new Audio("sounds/crash.mp3");
            break;

        case 'l':
            audio = new Audio("sounds/kick-bass.mp3");
            break;

        default :
            flag = false;
            ///console.log("from playSound default section ....");
    }
    if(flag)
    {
        audio.play();
    }
}


function btnAnimation(key) 
{
    var activeBtn = document.querySelector("." + key);
    activeBtn.classList.add("pressed");   
    
    setTimeout(function()
    {
        activeBtn.classList.remove("pressed"); 
    }, 100);
}

var btns = document.querySelectorAll(".drum");
var totalDrumButton = btns.length;


/// for mouse click event ..
for(var i = 0; i < totalDrumButton; i++)
{
    btns[i].addEventListener("click", function ()
    {
        var btn = this.innerHTML;
        playSound(btn);
        btnAnimation(btn);
    });
}


/// keyboard events
document.addEventListener("keypress", function (event)
{
    playSound(event.key);
    btnAnimation(event.key) 

})
