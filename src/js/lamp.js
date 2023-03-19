class LampManager {
    static update() {
        let lamps = LampApi.lamps;
    }

    static elems = {
        lampsBox: document.getElementById("lampsBox"),
        lampReview: document.getElementById("lampReview"),
        lampInterier: document.getElementById("lampInterier"),
        interier: document.getElementById("interier"),

        material: document.getElementById("material"),
        dimensions: document.getElementById("dimensions"),
        weight: document.getElementById("weight"),
        material: document.getElementById("electrification"),
    };
}
