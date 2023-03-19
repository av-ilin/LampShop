class LampManager {
    static update() {
        LampManager.loadOn();
        LampApi.get().then((data) => {
            console.log(data);
            console.log(data.length);

            data.forEach((lamp, index) => {
                let img = document.createElement("img");
                let item = document.createElement("div");
                item.className = "collection__item";
                item.append(img);
                let imageSrc = "images/loader.gif";
                img.src = imageSrc;

                fetch(lamp.image)
                    .then((response) => response.blob())
                    .then((blb) => {
                        imageSrc = URL.createObjectURL(blb);
                        img.src = imageSrc;

                        if (index == LampManager.activeLamp) {
                            LampManager.elems.lampReview.src = imageSrc;
                            LampManager.elems.lampReview.classList.remove(
                                "load"
                            );
                            LampManager.elems.lampInterier.src = imageSrc;
                            LampManager.elems.lampInterier.classList.remove(
                                "load"
                            );
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
                    LampManager.elems.lampReview.src = imageSrc;
                    LampManager.elems.lampInterier.src = imageSrc;
                };

                LampManager.elems.lampsBox.append(item);
            });

            LampManager.loadOff();
        });
    }

    static activeLamp = 0;

    static loadOn() {
        console.log("start load");
    }

    static loadOff() {
        console.log("end load");
        LampManager.elems.lampDesc.classList.remove("load");
        LampManager.elems.lampsBox.children[0].onclick();
    }

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
}
