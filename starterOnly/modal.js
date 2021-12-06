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





// submit event 
submitBtn.forEach((btn) => btn.addEventListener("click", submitFunct)); 


//submit function
function submitFunct(e){

  // test si une entrée correspond à ce qu'on y attend
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


//------------------------------------------------------------------------------------------





               






