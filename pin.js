function checkNumsOnly(input)
   {
      let  numbers = /^[0-9]+$/;
      if(input.match(numbers)&& input.length === 4)
      {
      console.log('Your Registration number has been accepted....');
      return 
      }
      else
      {
      console.log('Pin should be numeric characters only and only 4 digits long');
    //   return false;
      }
   } 


   checkNumsOnly("2815")