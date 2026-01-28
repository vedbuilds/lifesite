console.log("HELLO NINA");

function updateClock(){
let dateOne =new Date();

let finalDate = new Date('2026-02-05T00:00:00');

if(true){
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

updateClock();

setInterval(updateClock,1000);

