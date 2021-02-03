function getSum(a, b) {
  const array = [];
  array.push(...[a, b]);
  let min = Math.min(...array);
  let max = Math.max(...array);
if(min === max){
  return min

} else {
  let n = max - min + 1;
  let sum = (n * (min + max)) / 2;
  return sum;

}

 
  
}
getSum(1, 6);
