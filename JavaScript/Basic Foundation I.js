function GetTo255(){
    var num = 255;
    var arr = [];
    for(var i=1; i<=num; i++){
        arr.push(i);
    }
    return arr;
}
GetTo255(); 
==================================================================
function getEven(){
    var sum = 0;
    for(var i=1; i <= 1000; i++){
        if(i % 2 == 0){
            sum += i;
        }
    }
    return sum;
}
getEven();
====================================================================
function getOdd(){
    var sum = 0;
    for(var i=1; i <= 5000; i++){
        if(i % 2 !== 0){
            sum += i;
        }
    }
    return sum;
}
getOdd();
====================================================================

function iterate(arr){
    var sum = 0;
    
    for(var i=0; i < arr.length; i++){
        sum += arr[i];

    }
    return sum;
}

console.log(iterate([1,2,5]));
=======================================================================
function findmax(arr){
    var max = arr[0];
    
    for(var i=1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

console.log(findmax([7,2,5]));
========================================================================
function findAverage (arr){
    var avg = 0;
    var sum = 0;
    for(var i=0; i < arr.length; i++){
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}

console.log(findAverage([1,3,5,7,20]));
=============================================================================
function arrayOdd(){
    var arr = [];
    for(var i=1; i < 50; i++){
        if( i % 2 !== 0){
            arr.push(i);
        }
    }
    
    return arr;
}

console.log(arrayOdd());
============================================================================
function greaterThanY(arr, y){
    var counter = 0;
    for(var i=1; i < arr.length; i++){
        if( i < y){
            counter += 1;
        }
    }
    
    return counter;
}

console.log(greaterThanY([1, 3, 5, 7], 3));
===========================================================================
function squares(arr){
    var counter = 0;
    for(var i=0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    
    return arr;
}

console.log(squares([1,5,10,-2]));
==========================================================================
function maxMinAvg(arr){
    var min = arr[0];
    var max = arr[0];
    var avg = 0;
    var sum = 0;
    for(var i=0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
        if(max < arr[i]){
            max = arr[i];
        }
        sum += arr[i];
    }
    avg = sum /arr.length;
    var result = [];
    result.push(max,min,avg);
    return result;
}

console.log(maxMinAvg([1,5,10,-2]));
=========================================================================
function swapV(arr){
    
    var temp = arr[arr.length -1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;   
    
    return arr;
}

console.log(swapV([1,5,10,-2,5]));
=========================================================================
function numberToString(arr){
    for(var i =0; i< arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}

console.log(numberToString([-1,5,10,-2,5,-8]));
========================================================================
