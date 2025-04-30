const buttons = document.querySelectorAll(".btn button");
const icons = document.querySelectorAll(".icons i");

buttons.forEach((button, index) => {
    button.addEventListener("mouseenter", () => {
        if (icons[index]) {
            icons[index].style.color = "rgb(6, 236, 18)";
        }
    });

    button.addEventListener("mouseleave", () => {
        if (icons[index]) {
            icons[index].style.color = "white"; // Reset to original color
        }
    });
});