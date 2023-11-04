// Ultilities
const MAX_LENGTH = 20;
const MIN_LENGTH = 3;
const regExName = /^[a-zA-Z_]+$/;
const regExEmail = /^([\w\.]+)@northeastern\.edu$/;
const regExPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

$(document).ready(function () {
 
  const email = $("#email")
  email.on("input", validate);
  const username = $("#username");
  username.on("input", validate);
  const password = $("#password");
  password.on("input", validate);
  const confirmPassword = $("#confirm_password");
  confirmPassword.on("input", validate);

  var isUsernameValid = false;
  var isEmailValid = false;
  var isPasswordCorrect = false;
  var isPasswordMatching = false;

  // Login form validation and redirection
  $("#login_form").submit(function (e) {
    e.preventDefault();

    const user = {
      email: email.val().trim(),
      username: username.val().trim(),
    };
    
    // Store user data in local storage
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = 'home.html'
    
  });

  // Validation function
  function validate(e)  {

    const value = e.target.value.trim();
    const type = this.id;
    const errorContainer = $(`#error__container__${type}`);
    const errorMessage = $(`#error__message__${type}`);
    switch (type) {
      case "username":
        if (value === "") {
          errorMessage.text("Input cannot be empty");
          errorContainer.css("display", "flex");
          errorMessage.css("display", "block");
          username.get(0).setCustomValidity("Invalid field.");
          isUsernameValid = false;
        } else if (value.length < MIN_LENGTH || value.length > MAX_LENGTH) {
          errorMessage.text("Input cannot be less than 3 or greater than 20");
          errorContainer.css("display", "flex");
          errorMessage.css("display", "block");
          username.get(0).setCustomValidity("Invalid field.");
          isUsernameValid = false;
        } else if (!value.match(regExName)) {
          errorMessage.text("Invalid username, Please enter valid username.");
          errorContainer.css("display", "flex");
          errorMessage.css("display", "block");
          username.get(0).setCustomValidity("Invalid field.");
          isUsernameValid = false;
        } else {
          errorContainer.css("display", "none");
          errorMessage.css("display", "none")
          username.get(0).setCustomValidity("");
          isUsernameValid = true;
        }
        break;

      case "email":
        if (value.trim() === "") {
          errorMessage.text("Input cannot be empty");
          errorContainer.css("display", "flex");
          errorMessage.css("display", "block");
          email.get(0).setCustomValidity("Invalid field.");
          isEmailValid = false;
        } else if (!value.match(regExEmail)) {
          errorMessage.text("Invalid email address, Please enter valid email in myemail@northeastern.edu");
          errorContainer.css("display", "flex");
          errorMessage.css("display", "block");
          email.get(0).setCustomValidity("Invalid field.");
          isEmailValid = false;
        } else {
          errorContainer.css("display", "none");
          errorMessage.css("display", "none");
          email.get(0).setCustomValidity("");
          isEmailValid = true;
        }

        break;

      case "password":
        if (value === "") {
          errorMessage.text("Input cannot be empty");
          errorContainer.css("display", "flex");
          errorMessage.css("display", "block");
          password.get(0).setCustomValidity("Invalid field.")
          isPasswordCorrect = false;
        } else if (!value.match(regExPassword)) {
          errorMessage.text("Invalid password. Password should be minimum 8 character\
            and have atleast one special character and number ");
            errorContainer.css("display", "flex");
            errorMessage.css("display", "block");
          password.get(0).setCustomValidity("Invalid field.")
          isPasswordCorrect = false;
        } else {
          errorContainer.css("display", "none");
          errorMessage.css("display", "none");
          password.get(0).setCustomValidity("");
          isPasswordCorrect = true;
        }
        isPasswordMatching = false;
        confirmPassword.get(0).setCustomValidity("Invalid field.");
        break;

      case "confirm_password":
        if (value === "") {
          errorMessage.text("Input cannot be empty");
          errorContainer.css("display", "flex");
          errorMessage.css("display", "block");
          isPasswordMatching = false;
        } else if (value !== password.val().trim()) {
          errorMessage.text("Password doesn't match");
          errorContainer.css("display", "flex");
          errorMessage.css("display", "block");
          confirmPassword.get(0).setCustomValidity("Invalid field.");
          isPasswordMatching = false;
        } else {
          errorContainer.css("display", "none");
          errorMessage.css("display", "none");
          confirmPassword.get(0).setCustomValidity("");
          isPasswordMatching = true;
        }
        break;
    }

    if(isUsernameValid && isEmailValid && isPasswordCorrect && isPasswordMatching) {
      $("#login_button").prop("disabled", false);
    } else {
      $("#login_button").prop("disabled", true);
    }
  }
});
