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
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");
const confirmModal = document.querySelector(".bground1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeModal.addEventListener("click", closeModalForm);

// close modal form
function closeModalForm() {
  modalbg.style.display = "none";
}
/*
// confirm modal event
confirmModal.forEach((btn) => btn.addEventListener("click", validateModalForm));

// launch confirm modal
function validateModalForm() {
  confirmModal.style.display = "block";
}*/


// Identification of firstNAme input
document.querySelector('#firstName').addEventListener("input", () => {
  verificationInput('#firstName', "^[-a-zA-ZÀ-ÿ' ]+$");
});

// Identification of lastNAme input
document.querySelector('#lastName').addEventListener("input", () => {
  verificationInput('#lastName', "^[-a-zA-ZÀ-ÿ' ]+$");
});

// Verification of firstName & lastName input
function verificationInput(inputSelector) {
  const input = document.querySelector(inputSelector);
  const errMsg = document.querySelector(inputSelector + 'ErrorMsg');
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

  if (input.value.trim() === '') {
    errMsg.innerText = "Ce champ doit être rempli.";
    return false;
  } else if (!regex.test(input.value)) {
    errMsg.innerText = "Ce champ ne doit contenir que des caractères alphabétiques";
    return false;
  } else if (input.value.length < 2) {
    errMsg.innerText = "Ce champ doit contenir au moins 2 caractères.";
    return false;
  } else {
    errMsg.innerText = "";
    return true;
  }
}

// Identification of email input
document.querySelector('#email').addEventListener("input", () => {
  verificationEmail('#email', '#emailErrorMsg');
});

// Verification of email input
function verificationEmail(inputSelector) {
  const input = document.querySelector(inputSelector);
  const errMsg = document.querySelector(inputSelector + 'ErrorMsg');
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailRegex.test(input.value)) {
    errMsg.innerText = "Veuillez entrer une adresse e-mail valide.";
    return false;
  } else {
    errMsg.innerText = "";
    return true;
  }
}

// Identification of input date
document.querySelector('#birthdate').addEventListener("input", () => {
  verificationDate('#birthdate', '#birthdateErrorMsg');
});

// Verification of age (-18 years old)
function verificationDate(inputSelector) {
  const input = document.querySelector(inputSelector);
  const errMsg = document.querySelector(inputSelector + 'ErrorMsg');

  const birthdate = new Date(input.value);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthdate.getFullYear();

  if (input.value.trim() === '') {
    errMsg.innerText = "Ce champ doit être rempli.";
    return false;
  }
  if (age < 18) {
    errMsg.innerText = "Seules les personnes majeures peuvent s'inscrire aux tournois.";
    return false;
  }

  errMsg.innerText = "";
  return true;
}

// Identification of tournament quantity
document.querySelector('#quantity').addEventListener("input", () => {
  verificationQuantity('#quantity', '#quantityErrorMsg');
});

// Verification of tournament quantity
function verificationQuantity(inputSelector) {
  const input = document.querySelector(inputSelector);
  const errMsg = document.querySelector(inputSelector + 'ErrorMsg');

  if (input.value.trim() === '') {
    errMsg.innerText = "Ce champ doit être rempli.";
    return false;
  } else {
    errMsg.innerText = "";
    return true;
  }
}

/* Identification of tournament city
const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("input", () => {
    verificationRadio('location', 'radioErrorMsg');
  });
});

// Verification of tournament city
function verificationRadio(inputName, errorMsgId) {
  const radioButtons = document.querySelectorAll(`input[name="${inputName}"]`);
  const errMsg = document.querySelector(`#${errorMsgId}`);

  let checked = false;

  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      checked = true;
      break;
    }
  }

  if (!checked) {
    errMsg.innerText = "Vous devez choisir un tournoi.";
    return false;
  } else {
    errMsg.innerText = "";
    return true;
  }
}

// Identification of checkbox input
document.querySelector('#checkbox1').addEventListener("input", () => {
  verificationCheckbox('#checkbox1', '#checkboxErrorMsg');
});

// Verification of checkbox input
function verificationCheckbox(inputSelector, errMsgSelector) {
  const input = document.querySelector(inputSelector);
  const errMsg = document.querySelector(errMsgSelector);

  if (!input.checked) {
    errMsg.innerText = "Vous devez accepter les conditions d'utilisation.";
    return false;
  } else {
    errMsg.innerText = "";
    return true;
  }
}
*/
/*
// Validation of the form
function validate() {
  const firstNameValid = verificationInput('#firstName');
  const lastNameValid = verificationInput('#lastName');
  const dateValid = verificationDate('#birthdate');
  const emailValid = verificationEmail('#email');
  const quantityValid = verificationQuantity('#quantity');
  const checkboxValid = verificationCheckbox('#checkbox1', '#checkboxErrorMsg');
  const radioValid = verificationRadio('location', 'radioErrorMsg');
  
  if (!firstNameValid || !lastNameValid || !emailValid || !dateValid || !quantityValid || !checkboxValid || !radioValid) {
    return false;
  }
  return true;
}*/