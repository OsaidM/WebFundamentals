var testArr = [6,3,5,1,2,4];
var sum=0;
for(var i =0; i<testArr.length; i++){
    sum+=testArr[i];
    console.log("Num: "+testArr[i]+ ", Sum: "+sum);
    testArr[i]= i*testArr[i];
    
}console.log(testArr);
