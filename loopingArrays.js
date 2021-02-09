const lowerCase = ['a', 'b', 'c']
const upperCase = ['A', 'B', 'C']
const numbers= [1,2,3]

let myArray = []

lowerCase.forEach((el, index)=>{
    
    myArray.push(el+upperCase[index]+numbers[index])
    
    
})
console.log(myArray);

let ingredients = ['sugar', 'milk', 'flour']

let measures = ['300 gr', '500 cl', '600 gr']

ingredients.forEach((el, index)=>{
    console.log(`${el}: ${measures[index]}`);
})