class LampApi {
    static get URL() {
        return "https://private-anon-e05495aa0f-lampshop.apiary-mock.com/";
    }

    static async get() {
        let url = new URL(LampApi.URL + "lamps");
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return await response.json();
    }
}
