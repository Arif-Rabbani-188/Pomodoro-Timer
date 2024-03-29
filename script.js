let pTime = document.getElementById("pTime");
let setTime = document.getElementById("setTime");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let hreset = document.getElementById("reset.show");

let min = setTime.innerHTML*1;
let sec = min*60;
let interval;

function add(){
    min++;
    setTime.innerHTML = min;
    sec = min * 60;
    pTime.innerHTML = min +":00";
}
function sub(){
    min--;
    if(min < 0){
        min = 0;
    }
    setTime.innerHTML = min;
    sec = min * 60;
    pTime.innerHTML = min +":00";
}
function pomodoro(){
    sec--;
    pTime.innerHTML = Math.floor(sec/60) + ":" + sec%60;
    if (sec < 0) {
        sec = 0;
        pTime.innerHTML = "00:00";
        alert("Time UP")
        clearInterval(interval);
    }
}
function rst(){
    clearInterval(interval);
    min = 25;
    sec=min*60;
    pTime.innerHTML = "25:00";
    setTime.innerHTML = "25";
    start.value = "Start";
    reset.id = "reset";
}

minus.addEventListener("click", sub);
plus.addEventListener("click", add);
reset.addEventListener("click", rst);


start.addEventListener("click", ()=>{
    if (start.value == "Start") {
        interval = setInterval(pomodoro, 1000);
        start.value = "Stop";
        reset.id = "reset.show";

    }else{
        start.value = "Start";
        clearInterval(interval);
    }
});




document.querySelector("#toggle").addEventListener("click", function (event) {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }
    document.querySelector("#container").requestFullscreen();
  });
