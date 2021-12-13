function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const submitBtn = document.querySelectorAll(".btn-submit");
const modalCrossBtn = document.querySelectorAll(".close");
const textControl = document.querySelectorAll(".text-control");
const form = document.getElementsByName("reserve");
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const date = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const conditionsTerms = document.getElementById("checkbox1");
const formData = document.querySelectorAll(".formData");
const locations = document.getElementsByName("location");
const modalConfirmation = document.querySelector(".modalConfirmation");
const thanksCloseBtn = document.querySelectorAll(".modalConfirmation-btn-close");

//REGEX
let prenomRegex = /^[a-z-]{2,}$/i;
let nomRegex = /^[a-z ,.'-]{2,}$/i;
let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let quantityRegex = /^\d{1,2}$/;

// variables
let formDataArray = [];



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// quit modal event
modalCrossBtn.forEach((btn) => btn.addEventListener("click", quitModal));

// validation modal event
thanksCloseBtn.forEach((btn) => btn.addEventListener("click", quitModal));

// form submit event 
submitBtn.forEach((btn) => btn.addEventListener("click", submitFunct));

// launch modal form function
function launchModal() {
  modalbg.style.display = "block";
}

// quit modal form function
function quitModal() {
  modalbg.style.display = "none";
  modalConfirmation.style.display = "none";
}



//submit function
function submitFunct(e){


  // Function which display error message
  firstNameCheck();
  lastNameCheck();
  emailCheck();
  dateCheck();
  quantityCheck();
  locationsCheck();
  termsConditionsCheck();
  //---------------------------------

  if (formDataArray.length == formData.length) {               // if number of valid form input are equal to the total number of input form e.g if all input are valid
    submitClear();                                             // Function which reset the form if it was send
    validationMessage();                                       // Function which enable validation modal
  }

  formDataArray = [];                                         // refresh array which count valid input number
  e.preventDefault();                                         // Don't refresh page

  
}



// function which clear form after submit success
function submitClear(){
  formData[6].dataset.errorVisible = "false"; // delete conditiontTerm error message if it was displayed
  
  for(let i = 0; i<textControl.length; i++){  // loop which clear form inputs 
    textControl[i].value = "";
  }
  for(let i = 0; i<locations.length; i++){  // loop which clear location radios
    locations[i].checked = false;
  }
  conditionsTerms.checked = false // clear conditionTerms checkbox
}




function firstNameCheck() {
  if (prenomRegex.test(prenom.value.trim())) {              // Trim() delete blank space around unnecessary + check if prenom input match with prenom regex
    formData[0].dataset.errorVisible = "false";             // doesn't active the data-error-visible attribute which display error message
    formDataArray.push('check');                            // add 'check' in formDataArray array to count how many input forms are valid
  } else {
    formData[0].dataset.errorVisible = "true";

  }
}

function lastNameCheck() {
  if (nomRegex.test(nom.value.trim())) {
    formData[1].dataset.errorVisible = "false";
    formDataArray.push('check');
  } else {
    formData[1].dataset.errorVisible = "true";

  }
}


function emailCheck() {
  if (emailRegex.test(email.value.trim())) {
    formData[2].dataset.errorVisible = "false";
    formDataArray.push('check');
  } else {
    formData[2].dataset.errorVisible = "true";

  }
}

function dateCheck() {
  if (date.value) {                                         // if a date is select
    formData[3].dataset.errorVisible = "false";
    formDataArray.push('check');
  } else {
    formData[3].dataset.errorVisible = "true";

  }
}

function quantityCheck() {
  if (quantityRegex.test(quantity.value.trim())) {
    formData[4].dataset.errorVisible = "false";
    formDataArray.push('check');
  } else {
    formData[4].dataset.errorVisible = "true";

  }
}

function locationsCheck() {
  if(locations[0].checked || locations[1].checked || locations[2].checked || locations[3].checked || locations[4].checked || locations[5].checked) {    // if one of location radio is check {
    formData[5].dataset.errorVisible = "false";
    formDataArray.push('check');
  } else {
    formData[5].dataset.errorVisible = "true";

  }
}

function termsConditionsCheck() {
  if (conditionsTerms.checked) {                      // conditionTerms button must be check
    formData[6].dataset.errorVisible = "false";
    formDataArray.push('check');
  } else {
    formData[6].dataset.errorVisible = "true";

  }
}

function validationMessage(){
  modalConfirmation.style.display = "block";        // display confirmation message
}
               









