// Assignment

let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let time = new Date();
timer();


function timer() {

    hour.innerHTML = time.getHours();
    minute.innerHTML = time.getMinutes();
    second.innerHTML = time.getSeconds();
    displayTime(e);
}

function displayTime(e) {

    e.preventDefault;
    setTimeout("timer()", 1000);
}