


/////////////////////////////////////////////
var lightTheme = true;

document.addEventListener("click", ()=>{
    if (lightTheme) {
        document.documentElement.style.setProperty('--fg', 'white');
        document.documentElement.style.setProperty("--bg", "black");
    }
    else {
        document.documentElement.style.setProperty('--fg', 'black');
        document.documentElement.style.setProperty("--bg", "white");
    }
    lightTheme = !lightTheme;
})