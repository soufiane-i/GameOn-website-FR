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





 


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// quit modal event
modalCrossBtn.forEach((btn) => btn.addEventListener("click", quitModal));

thanksCloseBtn.forEach((btn) => btn.addEventListener("click", quitModal));



// launch modal form function
function launchModal() {
  modalbg.style.display = "block";
}

// quit modal form function
function quitModal() {
  modalbg.style.display = "none";
  modalConfirmation.style.display = "none";
}



       
// Form check ----------------------------------------------------------------

//REGEX

let prenomRegex = /^[a-z-]{2,}$/i;
let nomRegex = /^[a-z ,.'-]{2,}$/i;
let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
let quantityRegex = /^\d{1,2}$/;





// submit event 
submitBtn.forEach((btn) => btn.addEventListener("click", submitFunct));




//submit function
function submitFunct(e){



 /*if input is : 
      - valid = don't display error message + check next input 
      - invalid = don't submit + don't display its error message
      - valid and it's the last = submit  */
   if(prenomRegex.test(prenom.value.trim()) == true){
    formData[0].dataset.errorVisible = "false";

    if (nomRegex.test(nom.value.trim()) == true){
      formData[1].dataset.errorVisible = "false";

      if(emailRegex.test(email.value.trim())){
        formData[2].dataset.errorVisible = "false";

      if(date.value){
        formData[3].dataset.errorVisible = "false";

        if(quantityRegex.test(quantity.value.trim())){
          formData[4].dataset.errorVisible = "false";

          if(locations[0].checked == true || locations[1].checked == true || locations[2].checked == true || locations[3].checked == true || locations[4].checked == true || locations[5].checked == true) {
            formData[5].dataset.errorVisible = "false";

            if(conditionsTerms.checked) {
              //submit
              submitClear();
              e.preventDefault();
            } else {
              console.log("term pas check");
              formData[6].dataset.errorVisible = "true";
              e.preventDefault();
            }
          
            } else {
              console.log("location pas bon");
              formData[5].dataset.errorVisible = "true";
              e.preventDefault();
            }
        
          } else {
            console.log("quantity pas bon");
            formData[4].dataset.errorVisible = "true";
            e.preventDefault();
          }
      
        } else {
          console.log("date pas bon");
          formData[3].dataset.errorVisible = "true";
          e.preventDefault();
        }
    
      } else {
        console.log("email pas bon");
        formData[2].dataset.errorVisible = "true";
        e.preventDefault();
      }
      
    }else {
      console.log("nom faux");
      formData[1].dataset.errorVisible = "true";
      e.preventDefault();
    } 
  } else {
    console.log("prenom faux");
    formData[0].dataset.errorVisible = "true";
    e.preventDefault();
  }  
  
}


//------------------------------------------------------------------------------------------


//
function submitClear(){
  formData[6].dataset.errorVisible = "false";
  modalConfirmation.style.display = "block";
  for(let i = 0; i<textControl.length; i++){
    textControl[i].value = "";
  }
  for(let i = 0; i<locations.length; i++){
    locations[i].checked = false;
  }
  conditionsTerms.checked = false
}

               






console.log(prenom.value);