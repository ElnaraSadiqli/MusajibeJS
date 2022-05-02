// let time = document.querySelector("#time");
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

let time = new Date();

hour.innerHTML = time.getHours();
minute.innerHTML = time.getMinutes();
second.innerHTML = time.getSeconds();