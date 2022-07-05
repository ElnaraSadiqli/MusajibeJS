// Select Html elements
let input = document.querySelector(".list-input");
let buttonIn = document.querySelector("#btnInsert");
let buttonDel = document.querySelector(".del-btn");
let listAll = document.querySelector("#list-all");
let li;


eventListeners();

function eventListeners() {

    buttonIn.addEventListener("click", addEvent);
}


function addEvent(event) {

    condition();

    event.preventDefault;
}

function condition(event) {

 if (isNaN(input.value) === false || input.value == " " ) {
        alert("Please Insert String");
    } else {
        li = `<li class="list-group-item">
        <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
      ${input.value}
    </li>`

        listAll.insertAdjacentHTML("beforeEnd", li);

        input.value = " ";
    }

    event.preventDefault;


}
console.log(condition());