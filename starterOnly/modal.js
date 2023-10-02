function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const modalBody = document.querySelector(".modal-body")
const closeModal = document.querySelector(".close")
const confirmBody = document.querySelector(".confirm-body")
const modalSubmit = document.querySelector(".btn-submit")
const confirmMessage = document.querySelector(".confirm-message")
const confirmClose = document.querySelector(".btn-close")


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = "block"
}

// close modal event
closeModal.addEventListener("click", closeModalForm)

// close modal form
function closeModalForm() {
  modalbg.style.display = "none"
}

// Identification of firstNAme input
document.querySelector('#firstName').addEventListener("input", () => {
  verificationInput('#firstName', "^[-a-zA-ZÀ-ÿ' ]+$")
});

// Identification of lastNAme input
document.querySelector('#lastName').addEventListener("input", () => {
  verificationInput('#lastName', "^[-a-zA-ZÀ-ÿ' ]+$")
});

let show = (el) => {
  el.closest('.formData').dataset.errorVisible = true
  console.log(el.closest('.formData'))
};

let hide = (el) => {
  el.closest('.formData').dataset.errorVisible = null
};

// Verification of firstName & lastName input
function verificationInput(inputSelector) {
  const input = document.querySelector(inputSelector)
  const errMsg = document.querySelector(inputSelector + 'ErrorMsg')
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/

  if (input.value.trim() === '') {
    errMsg.innerText = "Ce champ doit être rempli."
    show(input)
    return false
  } else if (!regex.test(input.value)) {
    errMsg.innerText = "Ce champ ne doit contenir que des caractères alphabétiques"
    show(input)
    return false;
  } else if (input.value.length < 2) {
    errMsg.innerText = "Ce champ doit contenir au moins 2 caractères."
    show(input)
    return false
  } else {
    errMsg.innerText = ""
    hide(input)
    return true
  }
}

// Identification of email input
document.querySelector('#email').addEventListener("input", () => {
  verificationEmail('#email', '#emailErrorMsg')
});

// Verification of email input
function verificationEmail(inputSelector) {
  const input = document.querySelector(inputSelector)
  const errMsg = document.querySelector(inputSelector + 'ErrorMsg')
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  if (!emailRegex.test(input.value)) {
    errMsg.innerText = "Veuillez entrer une adresse e-mail valide."
    show(input)
    return false
  } else {
    errMsg.innerText = ""
    hide(input)
    return true
  }
}

// Identification of input date
document.querySelector('#birthdate').addEventListener("input", () => {
  verificationDate('#birthdate', '#birthdateErrorMsg')
});

// Verification of age (-18 years old)
function verificationDate(inputSelector) {
  const input = document.querySelector(inputSelector)
  const errMsg = document.querySelector(inputSelector + 'ErrorMsg')

  const birthdate = new Date(input.value)
  const currentDate = new Date()
  const age = currentDate.getFullYear() - birthdate.getFullYear()

  const dateOfBirth = input.value;
  const regexDate = /^\d{4}-\d{2}-\d{2}$/

  if (!dateOfBirth.match(regexDate)) {
    errMsg.innerText = "Format de date invalide. Utilisez le format AAAA-MM-JJ."
    show(input)
    return false
  }

  if (input.value.trim() === '') {
    errMsg.innerText = "Ce champ doit être rempli."
    show(input)
    return false
  }
  if (age < 18) {
    errMsg.innerText = "Seules les personnes majeures peuvent s'inscrire aux tournois."
    show(input)
    return false
  }

  errMsg.innerText = ""
  hide(input)
  return true
}

// Identification of tournament quantity
document.querySelector('#quantity').addEventListener("input", () => {
  verificationQuantity('#quantity', '#quantityErrorMsg')
});

// Verification of tournament quantity
function verificationQuantity(inputSelector) {
  const input = document.querySelector(inputSelector)
  const errMsg = document.querySelector(inputSelector + 'ErrorMsg')
  const quantityRegex = /^[0-9]+$/

  if (!quantityRegex.test(input.value)) {
    errMsg.innerText = "Veuillez entrer un nombre entier."
    show(input)
    return false
  } 
  if (input.value.trim() === '') {
    errMsg.innerText = "Ce champ doit être rempli."
    show(input)
    return false
  } else {
    errMsg.innerText = ""
    hide(input)
    return true
  }
}

// Identification of tournament city
const radioButtons = document.querySelectorAll('input[type="radio"]')
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("input", () => {
    verificationRadio('location', 'radioErrorMsg')
  });
});

// Verification of tournament city
function verificationRadio(inputName, errorMsgId) {
  const radioButtons = document.querySelectorAll(`input[name="${inputName}"]`)
  const errMsg = document.querySelector(`#${errorMsgId}`)

  let checked = false

  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      checked = true
      break;
    }
  }

  if (!checked) {
    errMsg.innerText = "Vous devez choisir un tournoi."
    return false
  } else {
    errMsg.innerText = ""
    return true;
  }
}

// Identification of checkbox input
document.querySelector('#checkbox1').addEventListener("input", () => {
  verificationCheckbox('#checkbox1', '#checkboxErrorMsg')
});

// Verification of checkbox input
function verificationCheckbox(inputSelector, errMsgSelector) {
  const input = document.querySelector(inputSelector)
  const errMsg = document.querySelector(errMsgSelector)

  if (!input.checked) {
    errMsg.innerText = "Vous devez accepter les conditions d'utilisation."
    return false
  } else {
    errMsg.innerText = ""
    return true
  }
}

// Validation of the form
function validate() {
  const firstNameValid = verificationInput('#firstName')
  const lastNameValid = verificationInput('#lastName')
  const dateValid = verificationDate('#birthdate')
  const emailValid = verificationEmail('#email')
  const quantityValid = verificationQuantity('#quantity')
  const checkboxValid = verificationCheckbox('#checkbox1', '#checkboxErrorMsg')
  const radioValid = verificationRadio('location', 'radioErrorMsg')
  
  if (!firstNameValid || !lastNameValid || !emailValid || !dateValid || !quantityValid || !checkboxValid || !radioValid) {
    return false
  }
  return true
}

// confirmation modal event
modalSubmit.addEventListener("click", (btn) => {
  btn.preventDefault()
  confirmationModalForm()})

// launch confirmation modal
function confirmationModalForm() {
  if (validate()) {
    modalBody.style.display = "none"
    confirmBody.style.display = "block"
  }
}

// close confirmation modal event
confirmClose.addEventListener("click", closeConfirmationModalForm)

// close confirmation modal form
function closeConfirmationModalForm() {
  modalbg.style.display = "none"
  modalBody.style.display = "block"
  confirmBody.style.display = "none"
  location.reload()
}