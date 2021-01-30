// function iqTest(numbers){
//     // ...
//     const numsToArray = numbers.split(" ")
//     const arrNumbers = numsToArray.map(el=> el * 1)

//     const peculiarNum = arrNumbers.filter((el)=>{
//         if(el % 2  !== 0){
//             console.log(`Number at position ${arrNumbers.indexOf(el)+1}  does not belong to the array`);
//         } 
        
//     })
//   }

function iqTest(numbers){
    // ...
    const numsToArray = numbers.split(" ")
    const arrNumbers = numsToArray.map(el=> el * 1)

    const peculiarNum = arrNumbers.filter(el=> el % 2  !== 0)
    console.log(arrNumbers.indexOf(peculiarNum[0])+1);


}

  iqTest("4 2 1 5 6 2")
