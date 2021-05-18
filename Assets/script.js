// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = "qwertyuiopasdfghjklzxcvbnm";
var uppercaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
var number = "1234567890";
var specialCharacters = "~!@#$%^&*()_+~-={}[]:;'<>,./?";



// Write password to the #password input
function writePassword() {
  //length of the desired password
  var length = parseInt(prompt("How many characters is in your password? (between 8 and 128)"));
  //output the length to the console
  console.log(length);

  //checks if the user inputted the right length
  if (length >= 8 && length <= 128) {

    //char variable
    var charUsed = 0;

    //these set of conditionals check which characters the user wants
    //each time the user chooses a prompt it ups the charUsed counter by one
    //that way we can check if the user has not chosen any prompts at all.
    var uppers = confirm("Would you like to use uppercase letters?");
    console.log(uppers);
    if (uppers) { charUsed++; }
    var lowers = confirm("Would you like to use lowercase letters?");
    console.log(lowers);
    if (lowers) { charUsed++; }
    var numbers = confirm("Would you like to use numbers?");
    console.log(numbers);
    if (numbers) { charUsed++; }
    var symbols = confirm("Would you like to use special characters?");
    console.log(symbols);
    if (symbols) { charUsed++; }

    //if no characters are chosen the user is alerted then returned to the starting prompt
    if (charUsed === 0) {
      alert("Please select at least one option!");
      writePassword();
    }

    //if the user presses cancel on the length prompt they are forced to restard
  } else if(length < 8 || length > 128){
    alert("Please choose a correct length");
    writePassword();
  }else {
    return " ";
  }

  //calls the generatePassword function and sets a var equal to it
  var password = generatePassword();
  //logs the password in the console
  console.log(password);
  //selects the textarea in html and assigns it to the var passwordText
  var passwordText = document.querySelector("#password");

  //assigns the value of passwordText to password generated
  passwordText.value = password;

  //function generatePassword
  function generatePassword() {
    //variables
    var passcode = "";
    var i = 0;

    //while i is not equal to the length of the password
    while (i !== length) {
      //each conditional checking if the user chose each prompt. If chosen the prompt is true
      if (uppers) {
        //chooses a random char from the universal string lowercaseLetters
        passcode += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
        i++;
        //This conditional stops the while loop once the length matches the desired length
        if (passcode.length === length) {
          //logs this into the console
          console.log(passcode);
          //returns passcode
          return passcode;
        }
      }
      if (lowers) {
        //chooses a random char from the universal string uppercaseLetters
        passcode += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
        i++;
        if (passcode.length === length) {
          console.log(passcode);
          return passcode;
        }
      }
      if (numbers) {
        //chooses a random char from the universal string number
        passcode += number.charAt(Math.floor(Math.random() * number.length));
        i++;
        if (passcode.length === length) {
          console.log(passcode);
          return passcode;
        }
      }
      if (symbols) {
        //chooses a random char from the universal string specialCharacter
        passcode += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
        i++;
        if (passcode.length === length) {
          console.log(passcode);
          return passcode;
        }
      }
    }
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
