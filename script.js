var searchForm = document.querySelector("#searchForm");
var historyArray = JSON.parse(localStorage.getItem("history")) ?JSON.parse(localStorage.getItem("history")):[]
searchForm.addEventListener("click", function(){
    console.log("hit")
var cityInput = document.querySelector("#cityInput").value
historyArray.push(cityInput)
localStorage.setItem("history", JSON.stringify(historyArray))
for (let i = 0; i < historyArray.length; i++) {
    console.log(historyArray [i])
}



});

