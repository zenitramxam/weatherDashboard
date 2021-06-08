var APIKey = "e16523d04c63d1ae7214ce72c3259465";
var city;
var state;
var country;
var cityInput = document.querySelector('#cityInput');
var searchButt = document.querySelector('#searchButton');
var searchedCity = document.querySelector('#searchedCity'); 
var currentTemp = document.querySelector('#temp');
var currentHumid = document.querySelector('#humid');
var currentWind = document.querySelector('#wind')
var currentUv = document.querySelector('#uv');
var cityList=[];

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
          var weatherIcon= response.weather[0].icon;
          var iconURL= "https://openweathermap.org/img/wn/" + weatherIcon + ".png";
          var date= new Date(response.dt*1000).toLocaleDateString();
            $(searchedCity).html(response.name + "("+date+")" + "<img src="+iconURL+">");
          var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            $(currentTemp).html((tempF).toFixed(2)+"&#8457");
          var windSpeed=response.wind.speed;
          var windMph= (windSpeed*2.237).toFixed(1);
            $(currentWind).html(windMph+"MPH");
            $(currentHumid).html(response.main.humidity+"%");
          UVIndex(response.coord.lon, response.coord.lat);

      })
}
function UVIndex(ln,lt) {
    var uvURL="https://api.openweathermap.org/data/2.5/uvi?appid="+ APIKey + "&lat="+ lt + "&lon=" + ln;
    $.ajax({
        url:uvURL,
        method:"GET"
    })
    .then(function(response) {
        $(currentUv).html(response.value);
    });
}
searchButt.addEventListener("click", getWeather);
