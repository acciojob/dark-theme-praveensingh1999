const swap = document.querySelector("#swap");

function swapTheme() {
    if (swap.classList.contains("button_day")) {
        swap.classList.remove("button_day");
        swap.classList.add("button_night");
    } else {
        swap.classList.remove("button_night");
        swap.classList.add("button_day");
    }
}
