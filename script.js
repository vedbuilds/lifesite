console.log("HELLO NINA");

function updateClock(){
let dateOne =new Date();

let finalDate = new Date('2026-02-05T00:00:00');

if(dateOne > finalDate){
    document.querySelector("#main-site").classList.remove("hidden");
    document.querySelector("#counting").style.display="none";
}else{
    document.querySelector("#main-site").classList.add("hidden");
    document.querySelector("#counting").style.display="flex";
};


let diff = finalDate - dateOne;
    

const days = Math.floor((diff/(1000*60*60*24)));
const hours =Math.floor( ((diff % (1000*60*60*24))/ (1000*60*60)));
const mins = Math.floor(((diff % (1000*60*60))/ (1000*60)));
const secs = Math.floor(((diff % (1000*60))/ (1000)));



document.querySelector("#counter").innerHTML = days + " : " +hours + " : " + mins + " : " +secs ;

};

function keystrokes(){
    document.addEventListener("keydown", function(event) {
        let keyPressed = event.key;
        console.log(keyPressed);
        if(keyPressed == 's'){
            //alert("S");
            document.querySelector("#imgElementX").setAttribute("src","img/star.gif"); 
            document.querySelector("#imgElementY").setAttribute("src","img/star.gif"); 
        }else if(keyPressed=='w'){
            document.querySelector("#imgElementY").setAttribute("src","img/asset2.gif"); 
            document.querySelector("#imgElementX").setAttribute("src","img/asset2.gif"); 
        }else if(keyPressed == 'a'){
            document.querySelector("#imgElementX").setAttribute("src","img/nina.gif"); 
            document.querySelector("#imgElementY").setAttribute("src","img/nina.gif"); 
        }else if(keyPressed == 'd'){
            document.querySelector("#imgElementX").setAttribute("src","img/assetSquiggle.gif"); 
            document.querySelector("#imgElementY").setAttribute("src","img/assetSquiggle.gif"); 
        }
    });
}

keystrokes();
updateClock();

setInterval(updateClock,keystrokes,1000);

