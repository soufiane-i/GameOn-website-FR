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
let dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
let quantityRegex = /^\d{1,2}$/;



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

 /*if input is : 
      - valid(if) = don't display error message + check next input
      - invalid(else) = don't submit + don't display its error message + don't refresh the page
      - valid and it's the last = submit + clear form */

    if(prenomRegex.test(prenom.value.trim())){              // Trim() delete blank space around unnecessary + check if prenom input match with prenom regex
    formData[0].dataset.errorVisible = "false";             // doesn't active the data-error-visible attribute which display error message  

    if (nomRegex.test(nom.value.trim())){
      formData[1].dataset.errorVisible = "false";

      if(emailRegex.test(email.value.trim())){
        formData[2].dataset.errorVisible = "false";

      if(date.value){                                       // if a date is select
        formData[3].dataset.errorVisible = "false";

        if(quantityRegex.test(quantity.value.trim())){
          formData[4].dataset.errorVisible = "false";

          if(locations[0].checked || locations[1].checked || locations[2].checked || locations[3].checked || locations[4].checked || locations[5].checked) {    // if one of location radio is check
            formData[5].dataset.errorVisible = "false";

            if(conditionsTerms.checked) {                   // conditionTerms button must be check
              submitClear();                                // Function which reset the form if it was send
              modalConfirmation.style.display = "block";    // display confirmation message
              e.preventDefault();                           // Don't refresh page
            } else {
              formData[6].dataset.errorVisible = "true";    // display error message
              e.preventDefault();
            }
          
            } else {
              formData[5].dataset.errorVisible = "true";
              e.preventDefault();
            }
        
          } else {
            formData[4].dataset.errorVisible = "true";
            e.preventDefault();
          }
      
        } else {
          formData[3].dataset.errorVisible = "true";
          e.preventDefault();
        }
    
      } else {
        formData[2].dataset.errorVisible = "true";
        e.preventDefault();
      }
      
    }else {
      formData[1].dataset.errorVisible = "true";
      e.preventDefault();
    } 
  } else {
    formData[0].dataset.errorVisible = "true";
    e.preventDefault();
  }   
  
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

               









