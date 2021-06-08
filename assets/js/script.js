var APIKey = "e16523d04c63d1ae7214ce72c3259465";
var city;
var state;
var country;
var cityInput= document.querySelector('#cityInput');
var searchCity = document.querySelector('#searchButton');

//var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

//fetch(queryURL)
/*
$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(weather) {
    console.log(queryURL);
})

*/

function getWeather(event) {
    event.preventDefault();
    city =cityInput.value;
    currentWeather(city);
}

function currentWeather(city){
    var queryURL ="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
      $.ajax({
          url:queryURL,
          method:"GET",
      })
      .then(function(response){
          console.log(response);
      })
}

searchCity.addEventListener("click", getWeather);
/*
$("#searchButton").on("click",function(event){
    event.preventDefault();
    var city = $("userInput")
      .val()
      .trim()

})
*/


/*
// with only city
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// with city, state, country
// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
*/