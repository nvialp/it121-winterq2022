function isVowel(letter) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowel = false;

  for(let i = 0; i <= vowels.length - 1; i++) {
    if (vowels[i] == letter) {
      vowel = true;
    }
  }
  return vowel;
}

let newWord;
let piglatin;
let string;
let translation = [];
let word;


string = prompt("please enter word/phrase to be translated.");

string = string.toLowerCase();

//check to see if there is input
if(string.length ===0) {
  piglatin = "Error, nothing entered";
}

else {
  sArray = string.split(" ");

  //if condition to check if 1 one has been entered  
  if(sArray.length == 1) {
    word = sArray[0];

    //check if first letter is a vowel  
    if(isVowel(word[0])) {
      newWord = word + "way";
    }

    //check if second letter is vowel    
    else {
      if (isVowel(word[1])) {
        newWord = word.substring(1) + word.substring(0, 1) + "ay";
      }
      //if both first letters are not vowels    
      else {
        newWord = word.substring(2) + word.substring(0, 2) + "ay";
      }
    }
  
    piglatin = newWord;
  }

  //if more then 1 one is entered    
  else if(sArray.length > 1) {
  
    for(let i = 0; i <= sArray.length - 1; i++) {

      //place word from array in temporary variable to manipulate  
      let temp = sArray[i];

      //check first letter of temporary word for vowel  
      if(isVowel(temp[0])) {
        newWord = temp + "way";
      }

      //check 2nd letter for vowel, place translated word in newWord variable   
      else {
        if (isVowel(temp[1])) {
          newWord = temp.substring(1) + temp.substring(0, 1) + "ay";
        }

        //if both first and second letter are not vowels, translate and place in newWord    
        else {
          newWord = temp.substring(2) + temp.substring(0, 2) + "ay";
        }
      }

      //newWord placed in translation array  
      translation[i] = newWord;
    }

    //piglatin string filled with translation array separated by a space.  
    piglatin = translation.join(" ") + ".";    
  }
}

document.getElementById("program").innerHTML = piglatin;