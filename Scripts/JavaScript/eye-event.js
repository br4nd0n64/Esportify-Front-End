const passwordInputElement = document.querySelector(".password-field input");
const eyeImgElement = document.querySelector(".password-field img:nth-of-type(2)");

const closeEyeIcon = "../Assets/Close_Eye.png";
const openEyeIcon = "../Assets/Open_Eye.png";

eyeImgElement.addEventListener("click", () => {
  if(document.getElementById("eye").getAttribute("src").match(openEyeIcon)){
    document.getElementById("eye").setAttribute("src", closeEyeIcon);
    passwordInputElement.setAttribute("type", "password");
  }
  else{
    document.getElementById("eye").setAttribute("src", openEyeIcon);
    passwordInputElement.setAttribute("type", "reveal password");
  }
});