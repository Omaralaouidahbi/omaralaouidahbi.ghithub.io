const A = document.getElementById("menu");
const B = document.getElementById("actions");

menu.addEventListener("click", () => {
    hundleMenu();
});

function hundleMenu() {
    A.classList.toggle("is-active");
    B.classList.toggle("is-active");
}