// initiliaze 
window.onload = function () {
    fetchTime();
    setInterval(() => {
        fetchTime();
    }, 1000);
}
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