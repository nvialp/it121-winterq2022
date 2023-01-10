function hasVowel(word, num){
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i <= vowels.length; i++){
    console.log(vowels[i])
  }
  
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= vowels.length; j++) {
      if (vowels[j] == word[i]) {
        console.log(`${word[i]} at ${word.indexOf(word[i])}`);
      }
    }
  }
}

let phrase = prompt("Enter a word or phrase");
hasVowel(phrase, 2);
