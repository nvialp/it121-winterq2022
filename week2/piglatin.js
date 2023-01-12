function isVowel(letter) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowel = false;

  for (let i = 0; i <= vowels.length - 1; i++) {
    if (vowels[i] == letter) {
      vowel = true;
    }
  }
  return vowel;
}

let word;
let newWord;
let translation = [];
let piglatin;

let string = prompt("please enter word/phrase to be translated.");

if (string.length ===0) {
  piglatin = "Error, nothing entered";
}

else {
  sArray = string.split(" ");
  console.log(sArray.length);
  console.log(sArray);
  if (sArray.length == 1) {
    word = sArray[0];
  
    if (isVowel(word[0])) {
      newWord = word + "way";
    }
  
    else {
      if (isVowel(word[1])) {
        newWord = word.substring(1) + word.substring(0, 1) + "ay";
      }
      else {
        newWord = word.substring(2) + word.substring(0, 2) + "ay";
      }
    }
  
    piglatin = newWord;
  }
  
  else if (sArray.length > 1){
  
    for (let i = 0; i <= sArray.length - 1; i++) {
  
      let temp = sArray[i];
  
      if (isVowel(temp[0])) {
        newWord = temp + "way";
      }
  
      else {
        if (isVowel(temp[1])) {
          newWord = temp.substring(1) + temp.substring(0, 1) + "ay";
        }
        else {
          newWord = temp.substring(2) + temp.substring(0, 2) + "ay";
        }
      }
      //word ='';
      translation[i] = newWord;
    }
  
    piglatin = translation.join(" ") + ".";
    
  }
}

document.getElementById("program").innerHTML = piglatin;
