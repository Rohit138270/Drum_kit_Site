var numofbtns = document.querySelectorAll(".drum").length;
for(var i=0;i<numofbtns;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
}
    function handleclick(){
        var btnpress = this.innerHTML;
        makesound(btnpress);
        btnanimation(btnpress);
        
        
    }
     document.addEventListener("keydown",function(event){
        makesound(event.key);
        btnanimation(event.key);
     });

     function makesound(key){
        switch (key) {
            case "w":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
                break;
        }
     }


function btnanimation(crentkey){
    var active = document.querySelector("." + crentkey);
    active.classList.add("pressed");

    setTimeout(function(){
        active.classList.remove("pressed");
    },150);
}
