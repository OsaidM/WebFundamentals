1.
function sigma(num){
    var sum = 0;
    for(var i=1; i<=num; i++){
        sum += i;
    }
    return sum;
}
console.log(sigma(5));

======================================================================
2.
function factorial(num){
    var sum = 1;
    for(var i=1; i<=num; i++){
        sum *= i;
    }
    return sum;
}
console.log(factorial(5));

======================================================================
3.
function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
    
  }

  return b;
}

console.log(fibonacci(5));
========================================================================
4.
function arraySecondToLast(arr){
  for(var i =0; i< arr.length; i++){
      if (arr.length<2){
          return null;
      }else{
          return arr[arr.length-2];
      }
  }

  
}

console.log(arraySecondToLast([42]));
========================================================================
5.
function arrayNthToLast(arr, num){
  for(var i =0; i< arr.length; i++){
      if (arr.length<num){
          return null;
      }else{
          return arr[arr.length-num];
      }
  }

  
}

console.log(arrayNthToLast([5,2,3,6,4,9,7],8));
========================================================================
6.
function arraySecondLargest(arr){
   for (var i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        var tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
      }
    }
return arr[arr.length-2];
  
}

console.log(arraySecondLargest([42,1,4,3.14,7]));
========================================================================
7.
function doubleTrouble(arr){
   var newArr = [];
   for (var i = 0; i < arr.length; i++) {
      newArr.push(arr[i], arr[i]);
    }
return newArr;
  
}

console.log(doubleTrouble([4, "Ulysses", 42, false] ));
