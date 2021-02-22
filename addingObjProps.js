// const myNewObj = {}
// let myArray =[]

// let myStr = "Beeno"
// myArray = myStr.toLocaleLowerCase().split('')
// myArray.forEach((el,i,a)=>{
//     if(myNewObj[el]){
//         myNewObj[el] +=1
//         console.log(`Position of ${el} at index: ${i}`);
        

//     } else {
//         myNewObj[el] = 1
//         console.log(`Position of ${el} at index: ${i}`);
//     }
// })

// console.log(myArray);
// console.log(myNewObj);


const myNewObj = {}
let myArray =[]

let myStr = "Beeno"
myArray = myStr.toLocaleLowerCase().split('')
myArray.forEach((el,i,a)=>{
    
        myNewObj[i] = el
      
        
})

console.log(myArray);
console.log(myNewObj);