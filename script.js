var apiKey = "2419a3ded7ba28224e0657fad5a212ce"
var searchForm = document.querySelector("#searchForm");
var historyArray = JSON.parse(localStorage.getItem("history")) ? JSON.parse(localStorage.getItem("history")) : []
var prevCity = document.querySelector("#prevCity")
var currentDay = document.querySelector('#currentDay')
var tempEl = document.createElement('p')
var windEl = document.createElement('p')
var humidityEl = document.createElement("p")
var cityName = document.createElement("p")
var dateEl = document.createElement("p")
var uviEl = document.createElement("p")
var futureForecastEl = document.querySelector("#futureForecast");

searchForm.addEventListener("click", function () {
    console.log("hit")
    var cityInput = document.querySelector("#cityInput").value
    var query = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&limit=1&appid=" + apiKey
    fetch(query)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            var lon = data[0].lon
            var lat = data[0].lat
            var weatherQ = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=minutely,hourly,alerts&appid=" + apiKey
            fetch(weatherQ)
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    console.log(data)



                    currentDay.innerHTML = ""

                    cityName.textContent = cityInput;
                    cityName.className - "list-group-item";

                    dateEl.textContent = moment().format("M/D/YY");
                    dateEl.className = "list-group-item";

                    tempEl.textContent = "Temp: " + data.current.temp + " °F";
                    tempEl.className = "list-group-item";

                    windEl.textContent = "Wind: " + data.current.wind_speed + " MPH";
                    windEl.className = "list-group-item";

                    humidityEl.textContent = "Humidity: " + data.current.humidity + " %";
                    humidityEl.className = "list-group-item";

                    uviEl.textContent = "UV Index: " + data.current.uvi;
                    uviEl.className = "list-group-item";

                    currentDay.append(cityName, dateEl, tempEl, windEl, humidityEl, uviEl)

                    futureForecast(data.daily);
                })

        }
        )
    historyArray.push(cityInput)

    localStorage.setItem("history", JSON.stringify(historyArray))

    displayHistory();

});
function insertCity(city) {
    var cityListEl = document.createElement("button")
    cityListEl.textContent = city;
    cityListEl.className = "list-group-item";
    prevCity.appendChild(cityListEl)
}
function displayHistory() {
    prevCity.innerHTML = "";
    for (let i = 0; i < 8; i++) {
        insertCity(
            historyArray[i]
        )
    }
}
displayHistory();
;

function futureForecast(futureArray) {
    futureForecastEl.innerHTML = "";
    for (let i = 1; i < 6; i++) {
        console.log(futureArray[i])

        console.log(moment().add(i,"days").format("M/D/YY"))

        var cardEl = document.createElement('div')
        cardEl.className = "col";

        var futureDate = document.createElement('p');
        futureDate.textContent = moment().add(i,"days").format("M/D/YY");

        var futureTemp = document.createElement('p');
        futureTemp.textContent = "Temp: " + futureArray[i].temp + " °F";
       
        var futureWind = document.createElement('p');
        futureWind.textContent = "Wind: " + futureArray[i].wind_speed + " MPH";

        var humidEl = document.createElement('p')
        humidEl.textContent = "Humidity: " + futureArray[i].humidity + " %";
        
        cardEl.append(futureDate, futureTemp, futureWind, humidEl);

        futureForecastEl.appendChild(cardEl);
    }   
};