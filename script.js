// Assignment Code
var generateBtn = document.querySelector("#generate")
var lower = "abcdefghijklnmopqrstuvwxyz"
var upper = "ABCDEFGHIJKLNMOPQRSTUVWXYZ"
var num = "0123456789"
var special = "!@#$%^&*()_+~\`|}{[]:;?><,./-="
var chars = ""


// Wrtie generatePassword funtion  to create random password betwwen 8-128 chars.
function generatePassword() {
  var pw = ""

  var userLength = window.prompt (" Choose 8-128 chars for your random PASSWORD ");
  
  if ( userLength < 8 || userLength > 128) {

    window.alert("Please choose 8-128 Chars!");
    return generatePassword();

  } 
  if (isNaN(userLength)) {
  alert("Numbers only!");

  return generatePassword();

  }

  var userLower = confirm("Include lower case?");
  var userUpper = confirm("Include Upper case?");
  var userNum = confirm("Include Number?");
  var userSpeical = confirm("Include Special case?");

  if (userLower) {
    chars += lower
  }
  if (userUpper) {
    chars += upper
    
  } 
   if (userNum) {
    chars += num
  
  } 
   if (userSpeical) {
    chars += special

  }

  if (!userLower&&!userUpper&&!userNum&&!userSpeical) {
    window.alert("MUST CHOOSE AT LEAST 1 Char");
    return generatePassword();
  }

  for ( var i=0; i < userLength; i++){
    pw += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return pw;
  }



// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

writePassword();