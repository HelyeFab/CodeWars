function maskify(cc) {
  let stringify;
  if (typeof cc != 'string') {
  } else {
    stringify = cc;
  }
  const strArray = stringify.split('');
  const encodedStr1 = [];
  const encodedStr2 = [];
  strArray.forEach(function (c, i, a) {
    if (i < (a.length) - 4) {
      encodedStr1.push('#');
    } else {
        encodedStr2.push(c)
    }
  });
 
  return encodedStr1.join('') + encodedStr2.join('');
}

console.log( maskify('Skippy'));
