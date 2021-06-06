var APIKey = "e16523d04c63d1ae7214ce72c3259465";
var city;
var state;
var country;

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)
// with only city
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// with city, state, country
// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}