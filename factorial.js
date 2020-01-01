
// 1 ways
// Factorial a number with Recursion 
function _1factorial(num){

    //check if num is less than 0, reject it
    if(num < 0) 
        return -1
    
    //if num is 0, its factorial is 1
    else if(num == 0) 
        return 1

    //otherwise
    else
        return ( num * _1factorial(num - 1) )
}


//2 ways 
const  _2factorial = (num) =>  num !== 0 ? num * _2factorial(num - 1) : 1











//set results
var result = _2factorial(5);
console.log(result)