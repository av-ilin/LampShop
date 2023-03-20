LampManager.update();

const switchLight = document.getElementsByClassName(
    "collection__switchers-switch"
)[0];
const switchDark = document.getElementsByClassName(
    "collection__switchers-switch"
)[1];
const lighter = document.getElementsByClassName("shop__interier-lighter")[0];

let lightMode = true;

switchLight.onclick = () => {
    if (!lightMode) {
        switchLight.classList.add("active");
        switchDark.classList.remove("active");
        lighter.classList.remove("active");
        LampManager.elems.interier.src = "images/interier_light.png";
        lightMode = true;
    }
};

switchDark.onclick = () => {
    if (lightMode) {
        switchLight.classList.remove("active");
        switchDark.classList.add("active");
        lighter.classList.add("active");
        LampManager.elems.interier.src = "images/interier_mydark.png";
        lightMode = false;
    }
};
