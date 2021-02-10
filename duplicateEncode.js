

function duplicateEncode(word){
// Create empty object 
let letterCount = {} 
let strArray = word.toLowerCase().split('')

// Loop through every letter in the string
for(let i = 0; i < strArray.length; i++){
  // If the letter is a key inside the object
  if (letterCount[strArray[i]]){
    // Add 1 to the counter
    letterCount[strArray[i]] += 1
  } else {
    // Otherwise, create a new counter for that new letter
    letterCount[strArray[i]] = 1
  }
}


const x =strArray.map(function(el){
 return letterCount[el]===1?'(':')'
}).join('')

console.log(x);

}

function duplicateEncode(word){
  word.toLowerCase()
    .split('')
    .map( function (a, i, w) {
     
    
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');



}

duplicateEncode('hello');





















