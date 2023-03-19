LampManager.update();

const switchLight = document.getElementsByClassName(
    "collection__switchers-switch"
)[0];

const switchDark = document.getElementsByClassName(
    "collection__switchers-switch"
)[1];

switchLight.onclick = () => {
    if (!switchLight.classList.contains("active"))
        switchLight.classList.add("active");
    if (switchDark.classList.contains("active"))
        switchDark.classList.remove("active");
};

switchDark.onclick = () => {
    if (switchLight.classList.contains("active"))
        switchLight.classList.remove("active");
    if (!switchDark.classList.contains("active"))
        switchDark.classList.add("active");
};
