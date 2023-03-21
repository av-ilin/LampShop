class LampManager {
    static loaderSrc = "images/loader.gif";
    static _status = { data: false, images: [] };
    static activeLamp = 0;
    static data = undefined;

    static elems = {
        lampsBox: document.getElementById("lampsBox"),
        lampReview: document.getElementById("lampReview"),
        lampInterier: document.getElementById("lampInterier"),
        interier: document.getElementById("interier"),
        lampDesc: document.getElementById("lampDesc"),

        material: document.getElementById("material"),
        dimensions: document.getElementById("dimensions"),
        weight: document.getElementById("weight"),
        electrification: document.getElementById("electrification"),
    };

    static async update() {
        console.log("start upd");
        let data = await LampApi.get();

        if (data == undefined) {
            console.log("Повторный запрос через 5 секунд!");
            setTimeout(() => {
                LampManager.update();
            }, 5000);
            return;
        }

        console.log(data);
        LampManager.data = data;
        LampManager._status.data = true;
        LampManager._status.images = new Array(data.length, false);

        data.forEach((lamp, index) => {
            let item = LampManager.createLamp(lamp, index);
            LampManager.elems.lampsBox.append(item);
        });
        LampManager.loadOff();

        console.log("end upd");
    }

    static createLamp(lamp, index) {
        let imageSrc = LampManager.loaderSrc;
        let img = document.createElement("img");
        img.src = imageSrc;

        let item = document.createElement("div");
        item.className = "collection__item";
        item.append(img);

        fetch(lamp.image)
            .then((response) => response.blob())
            .then((blb) => {
                imageSrc = URL.createObjectURL(blb);
                img.src = imageSrc;
                LampManager._status.images[index] = true;
                if (index == LampManager.activeLamp) {
                    LampManager.elems.lampReview.src = imageSrc;
                    LampManager.elems.lampReview.classList.remove("load");
                    LampManager.elems.lampInterier.src = imageSrc;
                    LampManager.elems.lampInterier.classList.remove("load");
                    setTimeout(() => {
                        Lighter.upd();
                    }, 100);
                }
            });

        item.onclick = () => {
            LampManager.elems.lampsBox.children[
                LampManager.activeLamp
            ].classList.remove("active");
            item.classList.add("active");
            LampManager.activeLamp = index;

            LampManager.elems.material.textContent = lamp.material;
            LampManager.elems.dimensions.textContent = `H ${lamp.height} x W ${lamp.width}`; //x D ${"?"}
            LampManager.elems.weight.textContent = `${lamp.weight} kg`;
            LampManager.elems.electrification.textContent =
                lamp.electrification;

            if (
                imageSrc == LampManager.loaderSrc &&
                !LampManager.elems.lampReview.classList.contains("load")
            ) {
                LampManager.elems.lampReview.classList.add("load");
                LampManager.elems.lampInterier.classList.add("load");
            } else if (
                imageSrc != LampManager.loaderSrc &&
                LampManager.elems.lampReview.classList.contains("load")
            ) {
                LampManager.elems.lampReview.classList.remove("load");
                LampManager.elems.lampInterier.classList.remove("load");
            }
            LampManager.elems.lampReview.src = imageSrc;
            LampManager.elems.lampInterier.src = imageSrc;

            Lighter.switch();
            setTimeout(() => {
                Lighter.upd();
            }, 100);
        };

        return item;
    }

    static loadOff() {
        LampManager.elems.lampDesc.classList.remove("load");
        LampManager.elems.lampsBox.children[0].onclick();
    }

    static get status() {
        return (
            LampManager._status.data &&
            LampManager._status.images.every((state) => state == true)
        );
    }

    static isDark() {
        if (LampManager.data == undefined) return false;
        return LampManager.data[LampManager.activeLamp].isDarkMode;
    }
}
