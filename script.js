const swap = document.querySelector("#swap");
const app = document.querySelector("#app");

function swapTheme() {
    if (swap.classList.contains("button_day")) {

        // Switch to night mode
        swap.classList.remove("button_day");
        swap.classList.add("button_night");

        app.classList.remove("day");
        app.classList.add("night");

    } else {

        // Switch to day mode
        swap.classList.remove("button_night");
        swap.classList.add("button_day");

        app.classList.remove("night");
        app.classList.add("day");
    }
}
