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
const modalCrossBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");


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


                   
  // /^[a-z ,-]+$/               






