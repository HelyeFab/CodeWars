let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    car: 'audi',
    dog: 'jack russell'
  };

  let lizzie = {...person}
  console.log(lizzie);
  let deletedProps= ['age', 'car']

 deletedProps.forEach(el => delete lizzie[el])

 console.log(lizzie);