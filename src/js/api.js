class LampApi {
    static get URL() {
        return "https://polls.apiblueprint.org/";
    }

    static get lamps() {
        let url = new URL(LampApi.URL + "lamps");
        return url;
    }
}
