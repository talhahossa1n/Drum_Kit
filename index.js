for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", soundPlayer);
    
    function soundPlayer(){
        var buttonLetter = this.innerHTML;
        makeSound(buttonLetter);
        buttonAnimation(buttonLetter);
    }
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "a":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "s":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
            
        case "f":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;sss

        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
                                                                                            
        default:
            alert(buttonLetter + " is not assigned to any sound.")
            break;
    }
}

function buttonAnimation(pressedKey) {
    var pressedButton = document.querySelector("." + pressedKey);
    pressedButton.classList.add("pressed");

    setTimeout(function () {
        pressedButton.classList.remove("pressed");
    },170)
}