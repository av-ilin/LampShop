LampManager.update();

const switchLight = document.getElementsByClassName(
    "collection__switchers-switch"
)[0];
const switchDark = document.getElementsByClassName(
    "collection__switchers-switch"
)[1];
const lighter = document.getElementsByClassName("shop__interier-lighter")[0];

let lightMode = true;

function lighterCoord() {
    let lampCoord = LampManager.elems.lampInterier.getBoundingClientRect();
    let roomCoord = LampManager.elems.interier.getBoundingClientRect();
    let lighterCoord = lighter.getBoundingClientRect();
    return {
        x:
            lampCoord.x -
            roomCoord.x +
            lampCoord.width / 2 -
            lighterCoord.width / 2,
        y:
            lampCoord.y -
            roomCoord.y +
            lampCoord.height * 0.9 -
            lighterCoord.height / 2,
    };
}

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

        let coord = lighterCoord();
        lighter.style.left = `${coord.x}px`;
        lighter.style.top = `${coord.y}px`;
        lightMode = false;
    }
};
