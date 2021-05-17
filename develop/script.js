// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = "qwertyuiopasdfghjklzxcvbnm";
var uppercaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
var number = "1234567890";
var specialCharacters = "~!@#$%^&*()_+~-={}[]:;'<>,./?";



// Write password to the #password input
function writePassword() {
var length = Number(prompt("How many characters is in your password?"));
console.log(length);

if(length >= 8 && length <= 128){

  var charUsed = 0;
  var uppers = confirm("Would you like to use uppercase letters?");
  console.log(uppers);
  if(uppers){charUsed++;}
  var lowers = confirm("Would you like to use lowercase letters?");
  console.log(lowers);
  if(lowers){charUsed++;}
  var numbers = confirm("Would you like to use numbers?");
  console.log(numbers);
  if(numbers){charUsed++;}
  var symbols = confirm("Would you like to use special characters?");
  console.log(symbols);
  if(symbols){charUsed++;}

  if(charUsed === 0){
    alert("Please select atleast one option!");
    writePassword();
  }

}else{
  alert("Please try again!");
  generatePassword();
}

  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  function generatePassword(){
  var passcode = "";
  var i = 0;
  while(i !== length){
    if(uppers){
      passcode += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
      console.log(passcode);
      i++;
      if(passcode.length === length){
        return passcode;
      }
    }
    if(lowers){
      passcode += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
      i++;
      if(passcode.length === length){
        return passcode;
      }
    }
    if(numbers){
      passcode += number.charAt(Math.floor(Math.random() * number.length));
      i++;
      if(passcode.length === length){
        return passcode;
      }
    }
    if(symbols){
      passcode += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
      i++;
      if(passcode.length === length){
        return passcode;
      }
    }
  }
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
