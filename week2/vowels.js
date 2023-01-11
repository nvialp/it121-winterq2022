function hasVowel(word, num){
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i <= vowels.length; i++){
    console.log(vowels[i])
  }
  
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= vowels.length - 1; j++) {
      if (vowels[j] == word[i]) {
        console.log(`${vowels[j]} at ${word.indexOf(vowels[j])}`);        
      }      
    }
  }
}

let phrase = prompt("Enter a word or phrase");
let num = prompt("how many letters to check?")
hasVowel(phrase, num);

