LampManager.update();

const switchLight = document.getElementsByClassName(
    "collection__switchers-switch"
)[0];

const switchDark = document.getElementsByClassName(
    "collection__switchers-switch"
)[1];

const lighter = document.getElementsByClassName("shop__interier-lighter")[0];

switchLight.onclick = () => {
    if (!switchLight.classList.contains("active"))
        switchLight.classList.add("active");

    if (switchDark.classList.contains("active"))
        switchDark.classList.remove("active");

    if (lighter.classList.contains("active"))
        lighter.classList.remove("active");

    LampManager.elems.interier.src = "images/interier_light.png";
};

switchDark.onclick = () => {
    if (switchLight.classList.contains("active"))
        switchLight.classList.remove("active");
    if (!switchDark.classList.contains("active"))
        switchDark.classList.add("active");

    if (!lighter.classList.contains("active")) lighter.classList.add("active");

    LampManager.elems.interier.src = "images/interier_mydark.png";
};
