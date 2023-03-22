LampManager.update();
Lighter.create();

const nav = document.getElementsByClassName("nav")[0];
const burger = document.getElementsByClassName("nav__burger")[0];
burger.onclick = () => {
    if (nav.classList.contains("burger")) {
        document.body.style.overflow = "";
        nav.classList.remove("burger");
    } else {
        document.body.style.overflow = "hidden";
        nav.classList.add("burger");
    }
};

window.addEventListener("resize", () => {
    Lighter.upd();
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) nav.classList.add("active");
    else nav.classList.remove("active");
});
