const header = document.querySelector("header");
const dropDownMenu = document.querySelector("header img:nth-of-type(2)");

header.style.setProperty("height", "6rem");

dropDownMenu.addEventListener("click", () => {
    if(header.style.getPropertyValue("height") === "6rem"){
        header.style.setProperty("height", "20rem");
    }
    else{
        header.style.setProperty("height", "6rem");
    }
})