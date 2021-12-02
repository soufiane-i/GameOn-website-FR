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
 


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// quit modal event
modalCrossBtn.forEach((btn) => btn.addEventListener("click", quitModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// quit modal form
function quitModal() {
  modalbg.style.display = "none";
}


       
// Check Form

for (let i=0; i<textControl.length; i++ ){
  textControl[i].setAttribute("required", "");
}

city.checked = true;

console.log(textControl.length);
//REGEX

let prenomRegex = /^[a-z ,.'-]{2,}$/i;
let nomRegex = /^[a-z ,.'-]{2,}$/i;
let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
let dateRegex = /^[a-z ,.'-]{2,}$/i;
let quantityRegex = /^\d{1,2}$/;



submitBtn.forEach((btn) => btn.addEventListener("click", submitFunct));


function submitFunct(e){
   // empecher la page de se recharger
  if(prenom.value.match(prenomRegex) 
  && nom.value.match(nomRegex) 
  && email.value.match(emailRegex)
  && quantity.value.match(quantityRegex)){
    console.log("kokok");
  } else {
    e.preventDefault();
    console.log("non");
  }    

}







               






