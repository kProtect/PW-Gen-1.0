// Assignment Code
var generateBtn = document.querySelector("#generate");
1144414
var lower =["a","b","c","d","e","f","g","h","i","j","k","l","n","m","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper =["A","B","C","D","E","F","G","H","I","J","K","L","N","M","O","P","Q","R","S","T","U","v","W","X","Y","Z"];
var num =["0","1","2","3","4","5","6","7","8","9"];
var special =[" ","!","","#","$","%","^","&","*","(",")","-","_","=","+","",];
var chars = "";




// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

writePassword();

function generatePassword() {
  var pw = "";

  var userlength = window.prompt (" Choose 8-128 chars for your random PASSWORD ");
  
  if ( userlength < 8 || userlength > 128) {

    window.alert("Please choose 8-128 Chars!");

    return generatePassword()
  } 
  else if  (isNaN(userlength)) {
    
  alert("Numbers only!");

  }
  if (lower) {
    lower+=
    window.confirm("Include lower case?");
  }
  if (upper) {
    upper+=
    window.confirm("Include Upper case?");
  } 
  if (num) {
    num+=
    window.confirm("Include Num?");
  } 
  if (special) {
    special+=
    window.confirm("Include Speical Chars?");
  }

  for ( var i =  0; i < userlength; i++){
    pw += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pw;
  }



