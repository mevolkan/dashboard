let theme_switcher=document.querySelector("#switcher")

let storageValue=localStorage.getItem("theme_state")
if(storageValue===null){
    localStorage.setItem("theme_state","disabled_state")
}else if(storageValue==="enabled_state"){
    darkMode()
}

theme_switcher.addEventListener("click",()=>{
    storageValue=localStorage.getItem("theme_state")
    if(storageValue==="disabled_state"){
        darkMode()
    }else{
        lightMode()
    }
})

function darkMode(){
    localStorage.setItem("theme_state","enabled_state")
    document.body.classList.add("dark_mode")
    theme_switcher.setAttribute("src","./images/sun.png")
}

function lightMode(){
    document.body.classList.remove("dark_mode")
    localStorage.setItem("theme_state","disabled_state")
    theme_switcher.setAttribute("src","./images/moon.png")
}
// if browser detects dark mode 
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode()
}