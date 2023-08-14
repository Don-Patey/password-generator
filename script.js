// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Input Variables //
var inputs = [""]
var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercases = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specials = "*&^%$#@!?><{}"
var randPassword = ""

// here is the event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  // here is the function for total length
  var passLength = prompt("Enter your desired amount of characters:")

  //here are is the check for password length

  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("invalid entry - Please enter a number between 8 and 128!");
    return;
  }

  //prompts for lowercase/uppeercase/numbers/specials
  var lowercaseConfirm = confirm("include lowercase letters?");
  if (lowercaseConfirm === true) {
    for (var i = 0; i < lowercases.length; i++) {
      inputs.push(lowercases[i]);
    }
    console.log(inputs)
  }

  var uppercaseConfirm = confirm("Include uppercase letters?");
  if (uppercaseConfirm === true) {
    for (var i = 0; i < uppercases.length; i++) {
      inputs.push(uppercases[i]);
    }
    console.log(inputs)
  }

  var numberConfirm = confirm("Include numbers?");
  if (numberConfirm === true) {
    for (var i = 0; i < numbers.length; i++) {
      inputs.push(numbers[i]);
    }
    console.log(inputs)
  }

  var specialsConfirm = confirm("Include special characters?");
  if (specialsConfirm === true) {
    for (var i = 0; i < specials.length; i++) {
      inputs.push(specials[i]);
    }
    console.log(inputs)
  }

  if (
    uppercaseConfirm === false &&
    numberConfirm === false &&
    lowercaseConfirm === false &&
    specialsConfirmConfirm === false
  ) {
    alert("You must chose and least one type of character.")
    return;
  }

  var randPassword = ""

  //changes to passLength string via intergers//
  const confirmLength = parseInt(passLength)

  //an arrary for compiled choices of inputs//
  for (var i = 0; i < confirmLength; i++) {
    inputs[
      Math.floor(Math.random() * inputs.length)];
      
      randPassword += inputs[
        Math.floor(Math.random() * inputs.length)
      ];
    }
    return randPassword;
}

