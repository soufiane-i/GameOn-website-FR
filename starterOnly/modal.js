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

const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const date = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.getElementById("location1");
const conditionsTerms = document.getElementById("checkbox1");
const formData = document.querySelectorAll(".formData");
const locations = document.getElementsByName("location");
const modalConfirmation = document.querySelector(".modalConfirmation");






 


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// quit modal event
modalCrossBtn.forEach((btn) => btn.addEventListener("click", quitModal));

// launch modal form function
function launchModal() {
  modalbg.style.display = "block";
}

// quit modal form function
function quitModal() {
  modalbg.style.display = "none";
}


       
// Form check ----------------------------------------------------------------

//REGEX

let prenomRegex = /^[a-z-]{2,}$/i;
let nomRegex = /^[a-z ,.'-]{2,}$/i;
let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
let quantityRegex = /^\d{1,2}$/;

let regexs = {
  prenomRegex : /^[a-z-]{2,}$/i,
  nomRegex : /^[a-z ,.'-]{2,}$/i,
  emailRegex : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  date: date,

}



// submit event 
submitBtn.forEach((btn) => btn.addEventListener("click", submitFunct)); 

// Custom error message
/* prenom.reportValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
nom.reportValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
conditionsTerms.reportValidity("Vous devez vérifier que vous acceptez les termes et conditions.");
date.reportValidity("Vous devez entrer votre date de naissance."); */

//submit function
function submitFunct(e){

  
   if(prenomRegex.test(prenom.value) == true){
    

    if (nomRegex.test(nom.value) == true){
      

      if(emailRegex.test(email.value)){
      

      if(date.value){
        

        if(quantityRegex.test(quantity.value)){
         

          if(locations[0].checked == true || locations[1].checked == true || locations[2].checked == true || locations[3].checked == true || locations[4].checked == true || locations[5].checked == true) {
            

            if(conditionsTerms.checked) {
              //submit
              console.log("submit");
            } else {
              console.log("term pas check")
              e.preventDefault();
            }
          
            } else {
              console.log("location pas bon");
              e.preventDefault();
              
            }
        
          } else {
            console.log("quantity pas bon");
            e.preventDefault();
          }
      
        } else {
          console.log("date pas bon");
          e.preventDefault();
        }
    
      } else {
        console.log("email pas bon");
        e.preventDefault();
      }
      
    }else {
      console.log("nom faux");
      e.preventDefault();
    } 
  } else {
    console.log("prenom faux");
    e.preventDefault();
  }  
  
}

// set required attribute to all text control


//check one of the radio button. Then one radio button always is check  



function prenomCheck(){
  if(prenomRegex.test(prenom.value)){
    
    return true;
} else { return false;
  
  
}
}

function nomCheck(){
  if(nomRegex.test(nom.value)){
    
    
  } else {
  
  }
}

function emailCheck(){
  if(emailRegex.test(email.value)){
    
    
  } else {
  
  }
}

function dateCheck(){
  if(dateRegex.test(date.value)){
    
    
  } else {
  
  }
}

function quantityCheck(){
  if(quantityRegex.test(quantity.value)){
    
    
  } else {
  
  
  }
}

function locationsCheck(){
  if (locations[0].checked == false && locations[1].checked == false && locations[2].checked == false && locations[3].checked == false && locations[4].checked == false && locations[5].checked == false) {
    
  } else  {
  
  }
}

function conditionTermsCheck(){
  if (conditionsTerms.checked)
  {
   
  } else {
    
  }
}



//------------------------------------------------------------------------------------------





               






