// initiliaze 
window.onload = function () {
    fetchTime();
    setInterval(() => {
        fetchTime();
    }, 1000);

    getAirQuality()
}

//run functions https://youtu.be/lpDwfwhFuPQ?list=PLWOdyjG6bHl54g4o3V-5ooeGnAfqWH6ja

// get date
function fetchTime() {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }

    let currentDate = new Date();
    y = currentDate.getFullYear();
    m = month[currentDate.getMonth()];
    d = currentDate.getDate();
    t = currentDate.getTime();

    let hr = addZero(currentDate.getHours());
    let min = addZero(currentDate.getMinutes());
    let s = addZero(currentDate.getSeconds());
    let time = hr + ":" + min + ":" + s;
    dayOfWeek = weekday[currentDate.getDay()];
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = d;
    document.getElementById("day").innerHTML = dayOfWeek;
    document.getElementById("month").innerHTML = m;
    document.getElementById("year").innerHTML = y;
}
//charts

var myChart = new Chart(
    document.getElementById('weathersummary'),
    config
);

//fetch location
let city = "nairobi"
let weatherLocation = document.getElementById("weatherlocation")
weatherLocation.onchange = function () {
    let selectedLocation = this.selectedIndex;
    optionSelected = this.options[selectedLocation].value;

    if (optionSelected === 'select') {
        getLocation();
        getAirQuality();
    } else {
        city = optionSelected;
        x.innerHTML = city;
        getAirQuality();
    }
}
var x = document.getElementById("location");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
let currentLocation = {
    lat: 0,
    long: 0,
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    currentLocation.lat = position.coords.latitude;
    currentLocation.long = position.coords.longitude;
    console.log(currentLocation)
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}


//air quality
var airQualityData
function getAirQuality() {
    //var axios = require("axios").default;

    var options = {
        method: 'GET',
        url: 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality',
        params: {
            lat: location.lat,
            lon: location.long,
            city: city
        },
        headers: {
            'x-rapidapi-host': 'air-quality-by-api-ninjas.p.rapidapi.com',
            'x-rapidapi-key': keys.xRapidapiKey
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        airQualityData = response.data;
        
  
    }).catch(function (error) {
        console.error(error);
    });

}



// Dark mode
let theme_switcher = document.querySelector("#switcher")
let storageValue = localStorage.getItem("theme_state")
if (storageValue === null) {
    localStorage.setItem("theme_state", "disabled_state")
} else if (storageValue === "enabled_state") {
    darkMode()
}

theme_switcher.addEventListener("click", () => {
    storageValue = localStorage.getItem("theme_state")
    if (storageValue === "disabled_state") {
        darkMode()
    } else {
        lightMode()
    }
})

function darkMode() {
    localStorage.setItem("theme_state", "enabled_state")
    document.body.classList.add("dark_mode")
    theme_switcher.setAttribute("src", "./images/sun.png")
}

function lightMode() {
    document.body.classList.remove("dark_mode")
    localStorage.setItem("theme_state", "disabled_state")
    theme_switcher.setAttribute("src", "./images/moon.png")
}
// if browser detects dark mode 
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode()
}