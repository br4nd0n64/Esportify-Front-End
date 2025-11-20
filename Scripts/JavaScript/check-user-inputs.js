function isAlphaNumeric(usernameInput) {
  var utf16Code;

  for (var i = 0; i < usernameInput.length; i++) {
    utf16Code = usernameInput.charCodeAt(i);
    if (!(utf16Code > 47 && utf16Code < 58) && !(utf16Code > 64 && utf16Code < 91) && !(utf16Code > 96 && utf16Code < 123)){ // numeric (0-9) // upper alpha (A-Z) // lower alpha (a-z)
      return false;
    }
  }
  return true;
};

function isEmailFormat(emailInput){
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(emailInput);
};

let isMissing = 0;

let fakeRedLinearGradient = "var(--fake-carbon-linear-gradient) padding-box, var(--fake-red-linear-gradient) border-box";
let esportLinearGradient = "var(--fake-carbon-linear-gradient) padding-box, var(--e-sport-linear-gradient-90deg) border-box";

function isValidContactForm(){    
   const inputElements = document.getElementsByTagName("input");
   const textAreaElement = document.querySelector("textarea");
    
    for(var i = 0; i < inputElements.length; i++){
      if(inputElements[i].value.length == 0 || inputElements[i].getAttribute("placeholder") == "E-mail" && isEmailFormat(inputElements[i].value) == false){
        inputElements[i].parentNode.style.setProperty("background", fakeRedLinearGradient);
        document.getElementById(inputElements[i].parentNode.getAttribute("class")).style.setProperty("display", "initial");
        isMissing++;
      }
      else if(inputElements[i].parentNode.getAttribute("class") != textAreaElement.parentNode.getAttribute("class")){
        inputElements[i].parentNode.style.setProperty("background", esportLinearGradient);
        document.getElementById(inputElements[i].parentNode.getAttribute("class")).style.setProperty("display", "none");
      }
    }
    if (textAreaElement.value.length == 0){
      textAreaElement.parentNode.style.setProperty("background", fakeRedLinearGradient);
      document.getElementById(textAreaElement.parentNode.getAttribute("class")).style.setProperty("display", "initial");
      isMissing++;
    }

    if(isMissing > 0 || textAreaElement.parentNode.style.getPropertyValue("background") == fakeRedLinearGradient){
      isMissing = 0;
      return false;
    }
    return true;
}
const textAreaElement = document.querySelector("textarea");

textAreaElement.addEventListener("input", event => {
    const target = event.currentTarget;
    const minLength = target.getAttribute("minlength");
    const currentLength = target.value.length;

    if(currentLength < minLength) {
      target.parentNode.style.setProperty("background", fakeRedLinearGradient);
      document.getElementById(target.parentNode.getAttribute("class")).style.setProperty("display", "initial");
    }
    else{
      target.parentNode.style.setProperty("background", esportLinearGradient);
      document.getElementById(target.parentNode.getAttribute("class")).style.setProperty("display", "none");
    }
});

function isValidLoginForm(){
  const inputElements = document.getElementsByTagName("input");
  const loginErrorText = document.querySelector(".login-error-text");

  for(var i = 0; i < inputElements.length; i++){
    if(inputElements[i].value.length == 0){
      inputElements[i].parentNode.style.setProperty("background", fakeRedLinearGradient);
      isMissing++;
    }
    else{
      inputElements[i].parentNode.style.setProperty("background", esportLinearGradient);
    }
    }
    if(isMissing > 0){
      loginErrorText.style.setProperty("display", "initial");
      isMissing = 0;
      return false;
    }
  return true;
}

function isValidAccountCreationForm(){    
   const inputElements = document.getElementsByTagName("input");
   const passwordInputElement = document.querySelector(".password-field input");
    
    for(var i = 0; i < inputElements.length; i++){
      if(inputElements[i].value.length == 0){
        inputElements[i].parentNode.style.setProperty("background", fakeRedLinearGradient);
        document.getElementById(inputElements[i].parentNode.className).style.setProperty("display", "initial");
        isMissing++;
      }
      else if(inputElements[i].getAttribute("placeholder") == "Nom d'utilisateur" && isAlphaNumeric(inputElements[i].value) == false){
        inputElements[i].parentNode.style.setProperty("background", fakeRedLinearGradient);
        document.getElementById(inputElements[i].parentNode.className).style.setProperty("display", "initial");
        isMissing++;
      }
      else if(inputElements[i].getAttribute("placeholder") == "E-mail" && isEmailFormat(inputElements[i].value) == false){
        inputElements[i].parentNode.style.setProperty("background", fakeRedLinearGradient);
        document.getElementById(inputElements[i].parentNode.className).style.setProperty("display", "initial");
        isMissing++;
      }
      else if(inputElements[i].getAttribute("placeholder") == "Mot de passe" && inputElements[i].value.length < inputElements[i].getAttribute("minlength")){
        inputElements[i].parentNode.style.setProperty("background", fakeRedLinearGradient);
        document.getElementById(inputElements[i].parentNode.className).style.setProperty("display", "initial");
        isMissing++;
      }
      else if(inputElements[i].getAttribute("placeholder") == "Confirmation" &&
              (inputElements[i].value != passwordInputElement.value || inputElements[i].value == passwordInputElement.value && 
              passwordInputElement.parentNode.style.getPropertyValue("background") == fakeRedLinearGradient)){

        inputElements[i].parentNode.style.setProperty("background", fakeRedLinearGradient);
        document.getElementById(inputElements[i].parentNode.className).style.setProperty("display", "initial");
        isMissing++;
      }
      else{
        inputElements[i].parentNode.style.setProperty("background", esportLinearGradient);
        document.getElementById(inputElements[i].parentNode.className).style.setProperty("display", "none");
      }
    }
    if(isMissing > 0){
      isMissing = 0;
      return false;
    }
    return true;
}

function isValidPasswordResetForm(){
  const emailInputElement = document.querySelector(".e-mail-field input");

  if(emailInputElement.value.length == 0 || isEmailFormat(emailInputElement.value) == false){
    emailInputElement.parentNode.style.setProperty("background", fakeRedLinearGradient);
    document.getElementById(emailInputElement.parentNode.getAttribute("class")).style.setProperty("display", "initial");
    return false;
  }
  else{
    emailInputElement.parentNode.style.setProperty("background", esportLinearGradient);
    return true;
  }
};