// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", "/", "<", ">", ",", ".", "?", "{", "}", "[", "]", ";", "'", "`", "~"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



var input = [];



function pwQuestions() {
  input = parseInt(prompt("Enter a desired password length between 8-128 characters"));
  if (input < 8 || input > 128) {
    alert("Number is not between 8-128 characters")
  } 
  else {
    var charsLow = confirm("Would you like the password to contain lowercase letters?");
    var charsUp = confirm("Would you like the password to contain uppercase letters?");
    var charsNum = confirm("Would you like the password to contain numbers?");
    var charsSpec = confirm("Would you like the password to contain special characters?");
  }   
};

function pwChoice() {
  if (charsLow === true)
    input = input.concat(lowLetters);
  if (charsUp === true)
    input = input.concat(upLetters);
  if (charsNum === true)
    input = input.concat(numbers);
  if (charsSpec === true)
    input = input.concat(specChar)
};

function pwGen() {
  for (var i = 0; i < input.length; i++){
    passwordText += input[Math.floor(Math.random() * (input.length))];
  }
  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  event.preventDefault();
  pwQuestions();
  pwChoice();
  pwGen();
  generatePassword();
  writePassword();
});
