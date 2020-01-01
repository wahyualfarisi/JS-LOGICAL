//FACTORIAL PROSEDUR
// N = 5
// 5! = 5 * 4 * 3 * 2 * 1



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

        /**
         * 5th will return 5 * (5 - 1) => num = 5 * 4 = 20
         * 4th will return 20 * (4 - 1) => num = 20 * 3 = 60
         * 3th will return 60 * (3 - 1) => num = 60 * 2 = 120
         * 2th will return 120 * (2 - 1) => num = 120 * 1 = 120
         */

}


//2 ways 
const  _2factorial = (num) =>  num !== 0 ? num * _2factorial(num - 1) : 1











//set results
var result = _2factorial(5);
console.log(result)