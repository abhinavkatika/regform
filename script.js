
function validateFullName() {
  var fullNameInput = document.getElementById("full-name");
  var fullNameError = document.getElementById("full-name-error");

  var fullName = fullNameInput.value;

  if (!/^[a-zA-Z]+$/.test(fullName) || fullName.length < 4) {
    fullNameInput.classList.add("error");
    fullNameError.textContent = "Full Name should only contain alphabets and be at least 4 characters long.";
    return false;
  }

  fullNameInput.classList.remove("error");
  fullNameError.textContent = "";
  return true;
}

function validatePassword() {
  var passwordInput = document.getElementById("password");
  var passwordError = document.getElementById("password-error");

  var password = passwordInput.value;

  if (password.length < 8) {
    passwordInput.classList.add("error");
    passwordError.textContent = "Password should be at least 8 characters long.";
    return false;
  }

  passwordInput.classList.remove("error");
  passwordError.textContent = "";
  return true;
}

function validateConfirmPassword() {
  var confirmPasswordInput = document.getElementById("confirm-password");
  var confirmPasswordError = document.getElementById("confirm-password-error");

  var confirmPassword = confirmPasswordInput.value;
  var password = document.getElementById("password").value;

  if (confirmPassword !== password) {
    confirmPasswordInput.classList.add("error");
    confirmPasswordError.textContent = "Passwords do not match.";
    return false;
  }

  confirmPasswordInput.classList.remove("error");
  confirmPasswordError.textContent = "";
  return true;
}

function validateEmail() {
  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("email-error");

  var email = emailInput.value;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailInput.classList.add("error");
    emailError.textContent = "Email should be in a valid format (e.g., 'example@example.com').";
    return false;
  }

  emailInput.classList.remove("error");
  emailError.textContent = "";
  return true;
}

function validatePhoneNumber() {
  var phoneNumberInput = document.getElementById("phone");
  var phoneNumberError = document.getElementById("phone-error");

  var phoneNumber = phoneNumberInput.value;

  if (!/^\+91\d{10}$/.test(phoneNumber)) {
    phoneNumberInput.classList.add("error");
    phoneNumberError.textContent = "Phone Number should be in a valid format (e.g., '+91 xxxxxxxxxx').";
    return false;
  }

  phoneNumberInput.classList.remove("error");
  phoneNumberError.textContent = "";
  return true;
}

function validateDateOfBirth() {
  var dobInput = document.getElementById("dob");
  var dobError = document.getElementById("dob-error");

  var dob = dobInput.value;

  var currentDate = new Date();
  var selectedDate = new Date(dob);

  if (selectedDate >= currentDate) {
    dobInput.classList.add("error");
    dobError.textContent = "Please enter a valid Date of Birth.";
    return false;
  }

  dobInput.classList.remove("error");
  dobError.textContent = "";
  return true;
}

function validateAadhaarNumber() {
  var aadhaarInput = document.getElementById("aadhaar");
  var aadhaarError = document.getElementById("aadhaar-error");

  var aadhaarNumber = aadhaarInput.value;

  if (!/^\d{12}$/.test(aadhaarNumber)) {
    aadhaarInput.classList.add("error");
    aadhaarError.textContent = "Aadhaar Number must be exactly 12 digits long and all characters must be numeric.";
    return false;
  }

  aadhaarInput.classList.remove("error");
  aadhaarError.textContent = "";
  return true;
}

function submitForm(event) {
  event.preventDefault();

  var isValid = true;

  isValid &= validateFullName();
  isValid &= validatePassword();
  isValid &= validateConfirmPassword();
  isValid &= validateEmail();
  isValid &= validatePhoneNumber();
  isValid &= validateDateOfBirth();
  isValid &= validateAadhaarNumber();

  if (isValid) {
    // Form submission logic
    var form = document.getElementById("registration-form");
    form.reset();
    alert("Form submitted successfully!");
  }
}

// Function to reset the form
function resetForm() {
  var form = document.getElementById("registration-form");
  form.reset();

  var errorElements = document.getElementsByClassName("error");
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = "";
  }
}

document.getElementById("registration-form").addEventListener("submit", submitForm);
document.getElementById("registration-form").addEventListener("reset", resetForm);
