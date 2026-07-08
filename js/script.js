async function loadWeather(city = "Navsari") {
    try {
        let res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e83bd0764fab8cd436f4e94172de6b63&units=metric`
        );

        let data = await res.json();

        if (data.cod == "404") {
            alert("City not found!");
            return;
        }

        document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
        document.getElementById("desc").innerText = data.weather[0].description;
        document.getElementById("city").innerText = data.name;
        document.getElementById("humidity").innerText = data.main.humidity + "%";
        document.getElementById("wind").innerText = data.wind.speed + " km/h";

        document.getElementById("icon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    } catch (err) {
        console.log(err);
    }
}

function searchCity() {
    let city = document.getElementById("searchInput").value;
    if (city.trim() !== "") {
        loadWeather(city);
    }
}

document.getElementById("searchInput").addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        searchCity();
    }
});

loadWeather(); 