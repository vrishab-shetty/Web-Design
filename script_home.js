const regExnumber = /^-?[0-9]\d*(\.\d+)?$/;
var isNumber1Valid = false;
var isNumber2Valid = false;

$(document).ready(function () {

  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    const user = JSON.parse(storedUser);
    $('#loggedInUser').text(user.username);
  }

  $(".result").hide();

  const number1 = $("#number1");
  number1.on("input", validate);
  const number2 = $("#number2");
  number2.on("input", validate);


  // Arrow function to perform all four operations
  const performOperation = (operator) => {
    const number1 = parseFloat($("#number1").val());
    const number2 = parseFloat($("#number2").val());

    if (!isNaN(number1) && !isNaN(number2)) {
      switch (operator) {
        case "add":
          $("#result").val(number1 + number2);
          break;
        case "subtract":
          $("#result").val(number1 - number2);
          break;
        case "multiply":
          $("#result").val(number1 * number2);
          break;
        case "divide":
          if (number2 !== 0) {
            $("#result").val(number1 / number2);
          } else {
            $("#result").val("Infinite");
          }
          break;
      }
    }
    $(".result").show();
  };

  // Bind click event handlers to the operation buttons
  $("#addBtn").click(() => performOperation("add"));
  $("#subtractBtn").click(() => performOperation("subtract"));
  $("#multiplyBtn").click(() => performOperation("multiply"));
  $("#divideBtn").click(() => performOperation("divide"));

});

function validate(e) {
  const value = e.target.value.trim();
  const type = this.id;
  const errorContainer = $(`#error__container__${type}`);
  const errorMessage = $(`#error__message__${type}`);

  console.log(type);
  switch (type) {
    case "number1":
      if (value === "") {
        errorMessage.text("Input cannot be empty");
        errorContainer.css("display", "flex");
        errorMessage.css("display", "block");
        number1.setCustomValidity("Invalid field.");
        isNumber1Valid = false;
      } else if (!value.match(regExnumber) && value !== "0") {
        errorMessage.text("Invalid number");
        errorContainer.css("display", "flex");
        errorMessage.css("display", "block");
        number1.setCustomValidity("Invalid field.");
        isNumber1Valid = false;
      } else {
        errorContainer.css("display", "none");
        errorMessage.css("display", "none")
        number1.setCustomValidity("");
        isNumber1Valid = true;
      }
      break;

    case "number2":
      if (value.trim() === "") {
        errorMessage.text("Input cannot be empty");
        errorContainer.css("display", "flex");
        errorMessage.css("display", "block");
        number2.setCustomValidity("Invalid field.");
        isNumber2Valid = false;
      } else if (!value.match(regExnumber) && value !== "0") {
        errorMessage.text("Invalid number.");
        errorContainer.css("display", "flex");
        errorMessage.css("display", "block");
        number2.setCustomValidity("Invalid field.");
        isNumber2Valid = false;
      } else {
        errorContainer.css("display", "none");
        errorMessage.css("display", "none");
        number2.setCustomValidity("");
        isNumber2Valid = true;
      }
      break;
    }

    if(isNumber1Valid && isNumber2Valid) {
      $("#addBtn").prop("disabled", false);
      $("#subtractBtn").prop("disabled", false);
      $("#multiplyBtn").prop("disabled", false);
      $("#divideBtn").prop("disabled", false);
    } else {
      $("#addBtn").prop("disabled", true);
      $("#subtractBtn").prop("disabled", true);
      $("#multiplyBtn").prop("disabled", true);
      $("#divideBtn").prop("disabled", true);
      $(".result").hide();
    }
}
