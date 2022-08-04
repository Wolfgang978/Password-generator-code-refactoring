// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0
var uppperCase = 0
var lowerCase = 0
var numerals = 0
var specialCharacters = 0


function generatePassword() {
 var passwordLength = window.prompt("Type the amount of characters you would like your password to have")
  if (passwordLength >= 8 && passwordLength <=128) {
    var upperCase = window.confirm("Do you want uppercase letters in your password?")
    var lowerCase = window.confirm("Do you want lowercase letters in your password?")
    var numerals = window.confirm("Do you want numbers in your password?")
    var specialCharacters = window.confirm("Do you want special characters in your password?")
    
  } else {
    window.alert("Please choose a number from 8-128")
    generatePassword()
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






