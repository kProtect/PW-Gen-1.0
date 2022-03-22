// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower =["a","b","c","d","e","f","g","h","i","j","k","l","n","m","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper =["A","B","C","D","E","F","G","H","I","J","K","L","N","M","O","P","Q","R","S","T","U","v","W","X","Y","Z"];
var num =["0","1","2","3","4","5","6","7","8","9"];
var special =["!","#","$","%","^","&","*","(",")","-","_","=","+"];
var chars = '';




// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

writePassword();


// Wrtie generatePassword funtion  to create random password betwwen 8-128 chars.
function generatePassword() {
  var pw = '';

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




