var searchForm = document.querySelector("#searchForm");
var historyArray = []
searchForm.addEventListener("click", function(){
    console.log("hit")
var cityInput = document.querySelector("#cityInput").value
historyArray.push(cityInput)
localStorage.setItem("history", JSON.stringify(historyArray))
console.log(historyArray)


});

