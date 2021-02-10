// let letters = 'puy'

// const letterArray= letters.split('')

// letterArray.forEach(function(a,i,w){
//     console.log( w.indexOf(a))
//     console.log(a)
//     console.log(i)
//     console.log( w)
// })
// console.log(letterArray);




let userName = 'Salvatore'

userName.toLowerCase().split('').every((currLetter, index, array)=>{
    console.log(currLetter);
    console.log(array.indexOf(currLetter));
    console.log(array.lastIndexOf(currLetter));
    if(array.indexOf(currLetter) === array.lastIndexOf(currLetter)){
        console.log('There are no double letters in your name');
       
    } else{
        console.log('There are double letters in your name');
        return
    }

})

