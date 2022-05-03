// Assignment

let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let session = document.querySelector(".sessions");

setInterval(timer, 1000);



function setZero() {

    if (minute < 10) {

        minute.innerHTML = "0" + minute;

    } if (second < 10) {

        second.innerHTML = "0" + second;
    }
}


function timer() {
    let time = new Date();

    hour.innerHTML = time.getHours();
    minute.innerHTML = time.getMinutes();
    second.innerHTML = time.getSeconds();

    setZero();
}