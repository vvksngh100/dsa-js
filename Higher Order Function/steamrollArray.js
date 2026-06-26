function steamrollArray(arr){
  const result = [];
  function flatArr(arr){
    arr.forEach(a => {
    if(Array.isArray(a)){
      flatArr(a);
    }else {
      result.push(a);
    }
  });
  }
  flatArr(arr);
  
  return result;
}


function steamrollArray1(arr){
    return arr.reduce((acc, val) =>   acc.concat(Array.isArray(val) ? steamrollArray1(val) : val), []);
}


console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray1([[["a"]], [["b"]]]));