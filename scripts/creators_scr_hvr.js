const scrollDown = document.querySelector(".scroll-down");

window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight / 1.75) {

        scrollDown.style.display = "none";
    }
});


const content = document.querySelector(".content");
window.addEventListener("scroll", () => {
    if (window.scrollY > 1200) {
        content.style.zIndex = "10";
        content.style.transition = "all 0.8s ease 0s";
    }
    if (window.scrollY <= 1200) {
        content.style.zIndex = "0";
        content.style.transition = "all 0.8s ease 0s";
    }
});