const btn = document.querySelector(".btn");
const navBar = document.querySelector("nav");
btn.addEventListener("click", bascule);
function bascule(){
    btn.classList.toggle("active");
    navBar.classList.toggle("active");
};
