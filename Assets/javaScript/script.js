var passwordLength = 0
var upperCase = 0
var lowerCase = 0
var numerals = 0
var specialCharacters = 0
var generateBtn = document.querySelector("#generate");

var characters = "abcdefghijklmnopqrstuvwxyz".split("")
var charactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var numbers = "1234567890".split("")
var charactersSpecial = "!@#$%^&*()_-=+~`[{]};:',<.>/?".split("")




function generatePassword() {
var password1 = ""
  var passwordLength = window.prompt("Type the amount of characters you would like your password to have")
  function characterPrompts() {
    var upperCase = window.confirm("Do you want uppercase letters in your password?")
    var lowerCase = window.confirm("Do you want lowercase letters in your password?")
    var numerals = window.confirm("Do you want numbers in your password?")
    var specialCharacters = window.confirm("Do you want special characters in your password?")
    var array1 = []
    if (upperCase || lowerCase || numerals || specialCharacters) {
      if (upperCase && lowerCase && numerals && specialCharacters) {
        for (i = 5; i <= passwordLength; i++) {
          var array = characters.concat(charactersUpper, numbers, charactersSpecial)
          array1.push(array[Math.floor(Math.random() * array.length)])
        }
        var characters1 = characters[Math.floor(Math.random() * characters.length)]
        var charactersUpper1 = charactersUpper[Math.floor(Math.random() * charactersUpper.length)]
        var numbers1 = numbers[Math.floor(Math.random() * numbers.length)]
        var charactersSpecial1 = charactersSpecial[Math.floor(Math.random() * charactersSpecial.length)]
        



        password1 =  array1.join("") + characters1 + charactersUpper1 + numbers1 + charactersSpecial1
        return

      }
      else if (upperCase && lowerCase && numerals && !specialCharacters) {
        for (i = 4; i <= passwordLength; i++) {
          var array = characters.concat(charactersUpper, numbers)
          array1.push(array[Math.floor(Math.random() * array.length)])
        }
        var characters1 = characters[Math.floor(Math.random() * characters.length)]
        var charactersUpper1 = charactersUpper[Math.floor(Math.random() * charactersUpper.length)]
        var numbers1 = numbers[Math.floor(Math.random() * numbers.length)]
        var charactersSpecial1 = charactersSpecial[Math.floor(Math.random() * charactersSpecial.length)]
        
        password1 = array1.join("") + characters1 + charactersUpper1 + numbers1
        return
      } else if (upperCase && lowerCase && !numerals && !specialCharacters) {
        for (i = 3; i <= passwordLength; i++) {
          var array = characters.concat(charactersUpper)
          array1.push(array[Math.floor(Math.random() * array.length)])
        }
        var characters1 = characters[Math.floor(Math.random() * characters.length)]
        var charactersUpper1 = charactersUpper[Math.floor(Math.random() * charactersUpper.length)]
        var numbers1 = numbers[Math.floor(Math.random() * numbers.length)]
        var charactersSpecial1 = charactersSpecial[Math.floor(Math.random() * charactersSpecial.length)]
        
        password1 = array1.join("") + characters1 + charactersUpper1
        return
      } else if (upperCase && !lowerCase && !numerals && !specialCharacters) {
        for (i = 1; i <= passwordLength; i++) {
          var array = charactersUpper
          array1.push(array[Math.floor(Math.random() * array.length)])
        }
        
        password1 = array1.join("")
        return
      } else if (upperCase && lowerCase && !numerals && specialCharacters) {
        for (i = 4; i <= passwordLength; i++) {
          var array = characters.concat(charactersUpper, charactersSpecial)
          
        }
        var characters1 = characters[Math.floor(Math.random() * characters.length)]
        var charactersUpper1 = charactersUpper[Math.floor(Math.random() * charactersUpper.length)]
        var numbers1 = numbers[Math.floor(Math.random() * numbers.length)]
        var charactersSpecial1 = charactersSpecial[Math.floor(Math.random() * charactersSpecial.length)]
        
        password1 = array1.join("") + characters1 + charactersUpper1 + charactersSpecial1
        return
      } else if (upperCase && !lowerCase && !numerals && specialCharacters) {
        for (i = 3; i <= passwordLength; i++) {
          var array = charactersUpper.concat(charactersSpecial)
          array1.push(array[Math.floor(Math.random() * array.length)])
        }
        var characters1 = characters[Math.floor(Math.random() * characters.length)]
        var charactersUpper1 = charactersUpper[Math.floor(Math.random() * charactersUpper.length)]
        var numbers1 = numbers[Math.floor(Math.random() * numbers.length)]
        var charactersSpecial1 = charactersSpecial[Math.floor(Math.random() * charactersSpecial.length)]
        
        password1 = array1.join("") + charactersUpper1 + charactersSpecial1
        return
      } else if (upperCase && !lowerCase && numerals && specialCharacters) {
        for (i = 4; i <= passwordLength; i++) {
          var array = charactersUpper.concat(numbers, charactersSpecial)
          array1.push(array[Math.floor(Math.random() * array.length)])
        }
        var characters1 = characters[Math.floor(Math.random() * characters.length)]
        var charactersUpper1 = charactersUpper[Math.floor(Math.random() * charactersUpper.length)]
        var numbers1 = numbers[Math.floor(Math.random() * numbers.length)]
        var charactersSpecial1 = charactersSpecial[Math.floor(Math.random() * charactersSpecial.length)]
        
        password1 = array1.join("") + charactersUpper1 + numbers1 + charactersSpecial1
        return
      } else if (!upperCase && lowerCase && !numerals && !specialCharacters) {
        for (i = 1; i <= passwordLength; i++) {
          var array = characters
          array1.push(array[Math.floor(Math.random() * array.length)])
        }
        
        
        password1 = array1.join("")
        return
      } else if (!upperCase && lowerCase && numerals && specialCharacters) {
        for (i = 4; i <= passwordLength; i++) {
          var array = characters.concat(numbers, charactersSpecial)
          array1.push(array[Math.floor(Math.random() * array.length)])
        }
        var characters1 = characters[Math.floor(Math.random() * characters.length)]
        var charactersUpper1 = charactersUpper[Math.floor(Math.random() * charactersUpper.length)]
        var numbers1 = numbers[Math.floor(Math.random() * numbers.length)]
        var charactersSpecial1 = charactersSpecial[Math.floor(Math.random() * charactersSpecial.length)]
        
        password1 = array1.join("") + characters1 + numbers1 + charactersSpecial1
        return
      } else if (!upperCase && lowerCase && !numerals && specialCharacters) {
        for (i = 3; i <= passwordLength; i++) {
          var array = characters.concat(charactersSpecial)
          array1.push(array[Math.floor(Math.random() * array.length)])
        }
        var characters1 = characters[Math.floor(Math.random() * characters.length)]
        var charactersUpper1 = charactersUpper[Math.floor(Math.random() * charactersUpper.length)]
        var numbers1 = numbers[Math.floor(Math.random() * numbers.length)]
        var charactersSpecial1 = charactersSpecial[Math.floor(Math.random() * charactersSpecial.length)]
        
        password1 = array1.join("") + characters1 + charactersSpecial1
        return
      } else if (!upperCase && lowerCase && numerals && !specialCharacters) {
        for (i = 3; i <= passwordLength; i++) {
          var array = characters.concat(numbers)
          array1.push(array[Math.floor(Math.random() * array.length)])
        }
        var characters1 = characters[Math.floor(Math.random() * characters.length)]
        var charactersUpper1 = charactersUpper[Math.floor(Math.random() * charactersUpper.length)]
        var numbers1 = numbers[Math.floor(Math.random() * numbers.length)]
        var charactersSpecial1 = charactersSpecial[Math.floor(Math.random() * charactersSpecial.length)]
        
        password1 = array1.join("") + characters1 + numbers1
        return
      } else if (upperCase && lowerCase && !numerals && !specialCharacters) {
        for (i = 3; i <= passwordLength; i++) {
          var array = characters.concat(charactersUpper)
          array1.push(array[Math.floor(Math.random() * array.length)])
        }
        var characters1 = characters[Math.floor(Math.random() * characters.length)]
        var charactersUpper1 = charactersUpper[Math.floor(Math.random() * charactersUpper.length)]
        var numbers1 = numbers[Math.floor(Math.random() * numbers.length)]
        var charactersSpecial1 = charactersSpecial[Math.floor(Math.random() * charactersSpecial.length)]
        
        password1 = array1.join("") + characters1 + charactersUpper1
        return
      } else if (!upperCase && !lowerCase && numerals && !specialCharacters) {
        for (i = 1; i <= passwordLength; i++) {
          var array = numbers
          array1.push(array[Math.floor(Math.random() * array.length)])
        }
        
        
        password1 = array1.join("")
        return
      } else if (upperCase && !lowerCase && numerals && !specialCharacters) {
        for (i = 3; i <= passwordLength; i++) {
          var array = numbers.concat(charactersUpper)
          array1.push(array[Math.floor(Math.random() * array.length)])
        }
        var characters1 = characters[Math.floor(Math.random() * characters.length)]
        var charactersUpper1 = charactersUpper[Math.floor(Math.random() * charactersUpper.length)]
        var numbers1 = numbers[Math.floor(Math.random() * numbers.length)]
        var charactersSpecial1 = charactersSpecial[Math.floor(Math.random() * charactersSpecial.length)]
        
        password1 = array1.join("") + charactersUpper1 + numbers1
        return
      } else if (!upperCase && !lowerCase && numerals && specialCharacters) {
        for (i = 3; i <= passwordLength; i++) {
          var array = numbers.concat(charactersSpecial)
          array1.push(array[Math.floor(Math.random() * array.length)])
        }
        var characters1 = characters[Math.floor(Math.random() * characters.length)]
        var charactersUpper1 = charactersUpper[Math.floor(Math.random() * charactersUpper.length)]
        var numbers1 = numbers[Math.floor(Math.random() * numbers.length)]
        var charactersSpecial1 = charactersSpecial[Math.floor(Math.random() * charactersSpecial.length)]
        
        password1 = array1.join("") + numbers1 + charactersSpecial1
        return
      } else if (!upperCase && !lowerCase && !numerals && specialCharacters) {
        for (i = 1; i <= passwordLength; i++) {
          var array = charactersSpecial
          array1.push(array[Math.floor(Math.random() * array.length)])
        }
        
        
        password1 = array1.join("")
        return
      } 

    } else {
      window.alert("Please choose at least one of the four character selectors.")
      characterPrompts()
    } 
  }
  if (passwordLength >= 8 && passwordLength <= 128) {
    characterPrompts()

  } else {
    window.alert("Please choose a number from 8-128")
    generatePassword()
  }
  return password1
}



function writePassword() {
  var potato = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = potato;

}






generateBtn.addEventListener("click", writePassword);



