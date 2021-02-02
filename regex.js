

   const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
   const regex = /[A-Z]/g;
   const found = paragraph.match(regex);
   
   console.log(found);
   // expected output: Array ["T", "I"]

   let num = 22

   console.log( num.toString(2));