// Assignment code here
// Create Arrays that hold all lowercase letters, uppercase etc.
let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowercaase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*']

function userOptions(){
  // Create Var for each criteria [length, lowercase, uppercase, numbers, special char]
  // Create option obj with each of those var var options:{ length: length... etc} return obj
  var passwordlength = prompt(" How long would you like your password to be")
  

  if(isNaN(passwordlength)) {
    alert("Your entry has to be a number")
    userOptions();
  }

  if(passwordlength < 8 || passwordlength > 128){
    alert("Your password has to be between 8 and 128 characters")
    userOptions();
    var userTrueFalse = confirm(passwordlength < 8 || passwordlength > 128)
  }
  // confirms to check to see if the user wants to use lower case, upcase, ...
// generate password


return {length: passwordlength}
}
// check to make sure they picked at lease one
// document.getElementById

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){g
var randomElement = 0 
var tempPw = ""
  var options = userOptions()
  console.log (options.length)
  for (let i = 0; i < Number(options.length); i++) {
     randomElement = uppercase[Math.floor(Math.random() * uppercase.length)];
     tempPw += randomElement
//  console.log(randomElement)
  }
  console.log(tempPw)
  return tempPw
  // generate a random password
  // console.log(array)
  // pass



  // return pw;
}

// Write password to the #password input
function writePassword() {
  // Prompted user asking if they want numbers
  //  prompt user asking if they want special characters
  // console.log ("I clicked the button");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

