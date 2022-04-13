var searchForm = document.querySelector("#searchForm");
var historyArray = JSON.parse(localStorage.getItem("history")) ? JSON.parse(localStorage.getItem("history")) : []
var prevCity = document.querySelector("#prevCity")

searchForm.addEventListener("click", function () {
    console.log("hit")
    var cityInput = document.querySelector("#cityInput").value
    historyArray.push(cityInput)

    localStorage.setItem("history", JSON.stringify(historyArray))
    for (let i = 0; i < historyArray.length; i++) {
    }

});

searchForm.addEventListener("click", insertCity)
function insertCity(event) {
    event.preventDefault();
    var cityListEl = document.createElement("button")
    cityListEl.textContent = cityInput.value;
    cityInput.className = "list-group-item";
    prevCity.appendChild(cityListEl)
}

;