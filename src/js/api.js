class LampApi {
    static get URL() {
        return "https://private-anon-e05495aa0f-lampshop.apiary-mock.com/";
    }

    static async get() {
        let url = new URL(LampApi.URL + "lamps");

        let response = undefined;

        try {
            response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) response = await response.json();
            else console.log("Ошибка HTTP: " + response.status);
        } catch (e) {
            console.log("Ошибка Fetch!\n" + e);
        }

        return response;
    }
}
