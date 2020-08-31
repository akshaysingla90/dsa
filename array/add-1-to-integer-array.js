
/*
Given a non-negative integer as non-empty array of digits, increment one to the integer.



Example

Input: [1,1,0]

Output: [1,1,1]

Explanation: The array represents the integer 110, adding 1 would make it 111
*/


function incrementArray(inputArr){
     let size = inputArr.length;
     inputArr[size-1]= inputArr[size-1] +1 ;
     let carry =   Math.floor(inputArr[size-1]/10);
     // carry=> 0,1 
     inputArr[size-1]= (inputArr[size-1])%10 ;
    
  for(let index = size-2; index>=0;index--){
   if(carry == 1){
   inputArr[index]= inputArr[index] +1 ;
      carry =   Math.floor(inputArr[index]/10);
     inputArr[index]= (inputArr[index])%10 ;  
   }  
  }    
 if(carry==1){
     inputArr.unshift(1);
   }
   console.log(inputArr)
}

let input = [9,9,9];
incrementArray(input);
console.log(input);
