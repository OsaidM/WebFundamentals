function numberToString(arr){
    for(var i =0; i< arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}

console.log(numberToString([-1,5,10,-2,5,-8]));
==========================================================================
function printLowReturnHigh(arr){
    var max = 0;
    var min = 0;
    for(var i =0; i< arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}

console.log(printLowReturnHigh([-1,5,10,-2,5,-8]));
========================================================================
function printOneReturnAnother(arr)
{
    var odd = 0;
    var secTL = arr[arr.length-2];
    for(var i =0; i< arr.length; i++){
        if(odd > 0){
            return "The First Odd Number is: " + odd +'\nThe second to last is: '+secTL;
        }
        if(arr[i] % 2 !== 0){
            odd = arr[i];
        }
    }
}
console.log(printOneReturnAnother([1,4,3,-2,5,-8]));
========================================================================
function doubleVision(arr){
    var double = 2;
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2);
    }
    return newArr;
}
   
console.log(doubleVision([-1,4,3,-2,5,-8]));
========================================================================
function countPositives(arr){
    var positive = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
        positive+= 1;}
    }
    arr[arr.length-1] = positive;
    return arr;
}
   
console.log(countPositives([-1,4,3,-2,5,-8]));
========================================================================
function evensAndOdds(arr){
    var odd = 0;
    var even = 0;

    for(var i = 0; i < arr.length; i++){
        if (odd == 3){
            console.log("That's odd!");
            odd = 0;
        }else if(arr[i] % 2 !== 0){
        odd+=1;
        }else{
            odd = 0;
        }

        if(even == 3)
        {
            console.log("Even more so!");
            even = 0;
        }else if(arr[i] % 2 == 0){
            even+=1;
        }else{
            even =0;
        }
    }
    
   
}
   
console.log(evensAndOdds([2,4,5,3,5,-8]));
========================================================================
function incrementTheSeconds(arr){
    

    for(var i = 0; i < arr.length; i++){
        if(i % 2 !==0){
            arr[i] += 1;
        }
    
   console.log(arr[i]);
}
return arr;
}   
console.log(incrementTheSeconds([2,4,5,3,5,-8]));
========================================================================
//assuming the maximum size of the array is 3 
function previousLengths(arr){

    for(var i =1; i < arr.length-1; i++){
        arr[arr.length-1] = arr[i].length;
        arr[i] = arr[i-1].length;
    }
    return arr;
}   

console.log(previousLengths(["hello", "dojo", "awesome"]));
========================================================================
function addSeven(arr){
    var newArr = [];
    for(var i = 0; i< arr.length; i++){
        newArr.push(arr[i]+7);
    }
    return newArr;
}   
console.log(addSeven([1,2,3]));
========================================================================
function reverseArray(arr){
for (var i = 0, j = arr.length - 1; i < j; i++, j--) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
return arr;
}   
console.log(reverseArray([3,1,6,4,2]));
=========================================================================
function outlookNegative(arr){
var newArr = [];
for(var i =0; i < arr.length; i++){
    if(arr[i] > 0){
        arr[i] *= -1; 
    }else{
        continue;
    }
}
return arr;
}   
console.log(outlookNegative([1,-3,5]));
==========================================================================
function alwaysHungry(arr){
    counter = 0;
for(var i =0; i < arr.length; i++){
    if(arr[i] == "food"){
        counter+=1;
        console.log("yummy");    
    }
}
if( counter == 0 ){
        return "I'm hungry";
    }

}   
console.log(alwaysHungry(["hello", "sss", "awesome"]));
==========================================================================
function swapTowardTheCenter(arr){
    for (var i = 0, j = arr.length - 1; i < j; i++, j--) {
        if(i % 2 == 0 && i < j){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
}
return arr;
}   
console.log(swapTowardTheCenter([1,2,3,4,5,6]));
===========================================================================
function scaleTheArray(arr, num){
    
    for(var i =0; i< arr.length; i++){
        arr[i] = arr[i] * num;
    }
return arr;
}   
console.log(scaleTheArray([1,2,3], 3));
