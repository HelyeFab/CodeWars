let userNum= parseInt(prompt('what is your  number?'))
const naturalNums =[]

function countNaturalNums(){
  for(let i=1; i <= userNum; i++){
    if(i%3===0 || i%5===0){
      naturalNums.push(i)
    } else{
      console.log(`${i} is neither a multiple of 3 or 5`);
    }
  }
  
}



countNaturalNums()

const total = naturalNums.reduce((accumulator, currValue) => {
  return accumulator + currValue
}, 0)

console.log(naturalNums);

console.log(total);

