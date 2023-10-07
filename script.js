// Utils
var MAX_LENGTH = 200;
var MIN_LENGTH = 1;
var specialChar = /[%\$#@&\*\+:;<>?!]/;
var regExName = /^[a-zA-Z]+$/;
var regExEmail = /([\w\.]+)@northeastern\.edu/;
var regExPhone = /^\d{3}-?\d{3}-\d{4}$/;
var regExZipCode = /^\d{5}(?:[-\s]\d{4})?$/;

var isNameCorrect = false;
var isPhoneNoCorrect = false;
var isEmailCorrect = false;
var isAddress1Correct = false;
var isAddress2Correct = true;
var isZipCodeCorrect = false;
var isTitleSelected = false;

var msg;

// Reference to elements
var form = document.getElementById("myForm");
form.addEventListener("submit", sendData);

var fullName = document.getElementById("fullName");
fullName.addEventListener("input", validate);
var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate);
var phoneNo = document.getElementById("phoneNumber");
phoneNo.addEventListener("input", validate);
var address1 = document.getElementById("Address1");
address1.addEventListener("input", validate);
var address2 = document.getElementById("Address2");
address2.addEventListener("input", validate);
var zipCode = document.getElementById("zipcode");
zipCode.addEventListener("input", validate);
var title1 = document.getElementById("dot-1");
title1.addEventListener("input", validate);
var title2 = document.getElementById("dot-2");
title2.addEventListener("input", validate);
var title3 = document.getElementById("dot-3");
title3.addEventListener("input", validate);

// fullName.addEventListener("focus", function () {
//   validityTooltip.style.display = "block";
// });

// fullName.addEventListener("blur", function () {
//   validityTooltip.style.display = "none";
// });

// Functions
function validate(e) {
  var value = e.target.value;
  var type = this.id;
  console.log(type);
  var errorContainer = document.querySelector(`.error__container__${type}`);
  var errorMessage = document.querySelector(`.error__message__${type}`);

  switch (type) {
    case "fullName":
      if (value.trim() === "") {
        errorMessage.textContent = "Input cannot be empty";
        errorContainer.style.display = "flex";
        errorMessage.style.display = "block";
        errorContainer.classList.add("invalid");
        isNameCorrect = false;
      } else if (value.trim().length < 3 || value.trim().length > 20) {
        errorMessage.textContent = "Input cannot be less than 3 or greater than 20";
        errorContainer.style.display = "flex";
        errorMessage.style.display = "block";
        errorContainer.classList.add("invalid");
        isNameCorrect = false;
      } else if (!value.trim().match(regExName)) {
        errorMessage.textContent =
          "Invalid full name, Please enter valid name.";
        errorContainer.style.display = "flex";
        errorMessage.style.display = "block";
        errorContainer.classList.add("invalid");
        fullName.setCustomValidity("Invalid field.");
        isNameCorrect = false;
      } else {
        errorContainer.style.display = "none";
        errorMessage.style.display = "none";
        errorContainer.classList.remove("invalid");
        fullName.setCustomValidity("");
        isNameCorrect = true;
      }
      break;

    case "emailId":
      if (value.trim() === "") {
        errorMessage.textContent = "Input cannot be empty";
        errorContainer.style.display = "flex";
        errorMessage.style.display = "block";
        errorContainer.classList.add("invalid");
        isEmailCorrect = false;
      } else if (!value.trim().match(regExEmail)) {
        errorMessage.textContent =
          "Invalid email address, Please enter valid email in myemail@northeastern.edu";
        errorContainer.style.display = "flex";
        errorMessage.style.display = "block";
        errorContainer.classList.add("invalid");
        isEmailCorrect = false;
        emailId.setCustomValidity("Invalid field.");
      } else {
        errorContainer.style.display = "none";
        errorMessage.style.display = "none";
        errorContainer.classList.remove("invalid");
        isEmailCorrect = true;
        emailId.setCustomValidity("");
      }

      break;

    case "phoneNumber":
      if (value.trim() === "") {
        errorMessage.textContent = "Input cannot be empty";
        errorContainer.style.display = "flex";
        errorMessage.style.display = "block";
        errorContainer.classList.add("invalid");
        isPhoneNoCorrect = false;
      } else if (!value.trim().match(regExPhone)) {
        errorMessage.textContent =
          "Invalid phone number, Please enter valid number in xxx-xxx-xxxx..";
        errorContainer.style.display = "flex";
        errorMessage.style.display = "block";
        errorContainer.classList.add("invalid");
        phoneNo.setCustomValidity("Invalid field.");
        isPhoneNoCorrect = false;
      } else {
        errorContainer.style.display = "none";
        errorMessage.style.display = "none";
        errorContainer.classList.remove("invalid");
        phoneNo.setCustomValidity("");
        isPhoneNoCorrect = true;
      }
      break;

    case "zipcode":
      if (value.trim() === "") {
        errorMessage.textContent = "Input cannot be empty";
        errorContainer.style.display = "flex";
        errorMessage.style.display = "block";
        errorContainer.classList.add("invalid");
        isZipCodeCorrect = false;
      } else if (!value.trim().match(regExZipCode)) {
        errorMessage.textContent =
          "Invalid zipcode. Please provide valid zipcode";
        errorContainer.style.display = "flex";
        errorMessage.style.display = "block";
        errorContainer.classList.add("invalid");
        zipCode.setCustomValidity("Invalid field.");
        isZipCodeCorrect = false;
      } else {
        errorContainer.style.display = "none";
        errorMessage.style.display = "none";
        errorContainer.classList.remove("invalid");
        zipCode.setCustomValidity("");
        isZipCodeCorrect = true;
      }
      break;

    case "Address1":
      if (value.trim() === "") {
        errorMessage.textContent = "Input cannot be empty";
        errorContainer.style.display = "flex";
        errorMessage.style.display = "block";
        errorContainer.classList.add("invalid");
        isAddress1Correct = false;
      } else if (value.trim().match(specialChar)) {
        errorMessage.textContent =
          "Invalid address, Please enter valid address without any special character.";
        errorContainer.style.display = "flex";
        errorMessage.style.display = "block";
        errorContainer.classList.add("invalid");
        address1.setCustomValidity("Invalid field.");
        isAddress1Correct = false;
      } else {
        errorContainer.style.display = "none";
        errorMessage.style.display = "none";
        errorContainer.classList.remove("invalid");
        address1.setCustomValidity("");
        isAddress1Correct = true;
      }
      break;

    case "Address2":
      if (value.trim().match(specialChar)) {
        errorMessage.textContent =
          "Invalid address, Please enter valid address without any special character.";
        errorContainer.style.display = "flex";
        errorMessage.style.display = "block";
        errorContainer.classList.add("invalid");
        address2.setCustomValidity("Invalid field.");
        isAddress2Correct = false;
      } else {
        errorContainer.style.display = "none";
        errorMessage.style.display = "none";
        errorContainer.classList.remove("invalid");
        address2.setCustomValidity("");
        isAddress2Correct = true;
      }
      break;
  }

  isTitleSelected = title1.checked || title2.checked || title3.checked;
  if (
    isNameCorrect &&
    isEmailCorrect &&
    isPhoneNoCorrect &&
    isAddress1Correct &&
    isAddress2Correct &&
    isZipCodeCorrect &&
    isTitleSelected
  ) {
    document.getElementById("submit_button").disabled = false;
  } else {
    document.getElementById("submit_button").disabled = true;
  }
}

function onStateSelected(selectObject) {
  var value = selectObject.value;
  var cities = document.getElementById("city__options");

  switch (value) {
    case "Connecticut":
      console.log(value);
      cities.innerHTML =
        '\
        <input type="checkbox">\
        <label>Hartford</label>\
        <br>\
        <input type="checkbox">\
        <label>New Haven</label>\
        <br>\
        <input type="checkbox" onclick="onOtherSelected(this)">\
        <label>Other:</label>\
        <input type="text" style="display: none; "">\
        ';
      break;
    case "Maine":
      cities.innerHTML =
        '\
        <input type="checkbox">\
        <label>Portland</label>\
        <br>\
        <input type="checkbox">\
        <label>Bar Harbor</label>\
        <br>\
        <input type="checkbox" onclick="onOtherSelected(this)">\
        <label>Other:</label>\
        <input type="text" style="display: none; "">\
        ';
      break;
    case "Massachusetts":
      cities.innerHTML =
        '\
        <input type="checkbox">\
        <label>Boston</label>\
        <br>\
        <input type="checkbox">\
        <label>Salel</label>\
        <br>\
        <input type="checkbox" onclick="onOtherSelected(this)">\
        <label>Other:</label>\
        <input type="text" style="display: none; "">\
        ';
      break;
    case "New Hampshire":
      cities.innerHTML =
        '\
        <input type="checkbox">\
        <label>Concord</label>\
        <br>\
        <input type="checkbox">\
        <label>Manchester</label>\
        <br>\
        <input type="checkbox" onclick="onOtherSelected(this)">\
        <label>Other:</label>\
        <input type="text" style="display: none; "">\
        ';
      break;
    case "Rhode Island":
      cities.innerHTML =
        '\
        <input type="checkbox">\
        <label>Providence</label>\
        <br>\
        <input type="checkbox">\
        <label>Newport</label>\
        <br>\
        <input type="checkbox" onclick="onOtherSelected(this)">\
        <label>Other:</label>\
        <input type="text" style="display: none; "">\
        ';
      break;
    case "Vermont":
      cities.innerHTML =
        '\
        <input type="checkbox">\
        <label>Burlington</label>\
        <br>\
        <input type="checkbox">\
        <label>Montpelier</label>\
        <br>\
        <input type="checkbox" onclick="onOtherSelected(this)">\
        <label>Other:</label>\
        <input type="text" style="display: none; "">\
       \
        ';
      break;

    default:
      cities.innerHTML = "";
  }
}

function onOtherSelected(view) {
  var editText = view.nextElementSibling.nextElementSibling;
  if (view.checked) {
    editText.style.display = "inline-block";
  } else {
    editText.style.display = "none";
  }
}

function sendData(e) {
  e.preventDefault();

  //let actionURL = this.getAttribute("action");
  const targetWebsite = "/home/vrishab/Desktop/Web Design/Assignment 04";
  const customData = {
    fullName: `Mr. ${fullName.value}`,
    email: `${emailId.value}`,
    phoneNo: `${phoneNo.value}`,
    address: `${address1.value} ${address2.value}`,
    zipCode: `${zipCode.value}`,
  };

  // Construct the URL with parameters
  const url = `${targetWebsite}/display.html?${new URLSearchParams(
    customData
  ).toString()}`;

  console.log(url);
  window.open(url, "_blank");

  this.submit();
}
