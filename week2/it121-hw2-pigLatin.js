let append;
let letter1;
let letter2;
let let2HasCon = false;
let word;

let string = prompt("please enter word/phrase to be translated.");
console.log(string);

sArray = string.split(" ");
let sArrayLength = sArray.length;

//console.log(`${sArray} ${sArrayLength}`)

if (sArrayLength == 1){
  word = sArray[0];

  letter1 = word.charAt(0);
  letter2 = word.charAt(1);

  //console.log(`${letter1} ${letter2}`)

  switch (letter1){
    case "a":
        plword = word + "way";
        console.log(plword);
        break;
      
    case "e":
        plword = word + "way";
        console.log(plword);
        break;
    
    case "i":
        plword = word + "way";
        console.log(plword);
        break;
    
    case "o":
        plword = word + "way";
        console.log(plword);
        break;

    case "u":
        plword = word + "way";
        console.log(plword);
        break;
  }
  
  switch (letter2){
    case "a":
        let2HasCon = true;
        break;
      
    case "e":
        let2HasCon = true;
        break;
    
    case "i":
        let2HasCon = true;
        break;
    
    case "o":
        let2HasCon = true;
        break;

    case "u":
        let2HasCon = true;
        break;
  }
  
  if(let2HasCon) {
    append = word.substring(1) + word.slice(0,1) + "ay";
  }

  else {
    append = word.substring(2) + word.slice(0,1) + "ay"
  }
}

else if(sArrayLength > 1) {
  for (let i = 0; i <= sArrayLength; i++) {
      
  }
}

else {
  console.log("Error")
}





<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <script>
    let string = prompt("please enter word/phrase to be translated.");
    console.log(string);

    
    
    if ()
  
  </script>
  
  <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script> 
</body>

</html>