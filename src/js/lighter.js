class Lighter {
    static lighter = document.getElementsByClassName(
        "shop__interier-lighter"
    )[0];
    static isLight = true;

    static switcherLight = document.getElementsByClassName(
        "collection__switchers-switch"
    )[0];

    static switcherDark = document.getElementsByClassName(
        "collection__switchers-switch"
    )[1];

    static create() {
        Lighter.switcherLight.onclick = () => {
            if (!Lighter.isLight && LampManager.status) {
                LampManager.elems.interier.src = "images/interier_light.png";
                Lighter.switcherLight.classList.add("active");
                Lighter.switcherDark.classList.remove("active");
                Lighter.lighter.classList.remove("active");
                Lighter.isLight = true;
                Lighter.upd();
            }
        };

        Lighter.switcherDark.onclick = () => {
            if (Lighter.isLight && LampManager.status && LampManager.isDark()) {
                LampManager.elems.interier.src = "images/interier_mydark.png";
                Lighter.switcherLight.classList.remove("active");
                Lighter.switcherDark.classList.add("active");
                Lighter.lighter.classList.add("active");
                Lighter.isLight = false;
                Lighter.upd();
            }
        };
    }

    static switch() {
        Lighter.switcherLight.onclick();
    }

    static upd() {
        let lampCoord = LampManager.elems.lampInterier.getBoundingClientRect();
        let roomCoord = LampManager.elems.interier.getBoundingClientRect();
        let lighterCoord = Lighter.lighter.getBoundingClientRect();
        let coord = {
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

        Lighter.lighter.style.left = `${coord.x}px`;
        Lighter.lighter.style.top = `${coord.y}px`;
    }
}
