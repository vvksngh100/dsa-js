function smallestCommons(arr){
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  function hcf(a,b){
    while(b !== 0){
      const temp  = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  function lcm(a,b){
    return (a*b)/ hcf(a,b);
  }

  let result = min;
  for(let i = min + 1; i <= max; i++){
    result = lcm(result, i);
  }

  return result;
}