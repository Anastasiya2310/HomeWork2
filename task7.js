function maxElements(count, arr){
  arr.sort(function (a, b) {
    if (a > b) {
      return true
    } else {
      return false
    }
  });
  return arr.slice(arr.length - count, arr.length);
}
console.log(maxElements(2, [7,6,5,4,3,2,1]));
console.log(maxElements(5, [25,48,2,15,100,66,79,3,0,25]));