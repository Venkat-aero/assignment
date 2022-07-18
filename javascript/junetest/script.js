// let i = parseInt(prompt("enter the number to print it's cube", 1));
// if (i === 1){console.log(1);}
// else{console.log(i*i*i);}


//n term of odd numbers and sum 

// let n = parseInt(prompt("enter the number to print upto ", 1))
// function oddSum(number) {
    

// for (let i =1; i<=number; i++){
//     if (i%2=== 1){
//     console.log(i);}
    
// }

// }
// oddSum(n);


//prime or not

// let n = parseInt(prompt("enter the number to find prime numbers upto", 1));


// function primeCheck(num) {
//     if ( num <=1){
//         return false;
//     }
//     for ( let i =2; i<num; i++){
//         if (num % i === 0){
//             return false;
            
//         }
       
//     }
//  return true   
// }
// primeCheck(n)

// for (let i = 1; i<=n ; i++){
//     if (primeCheck(i)){
//     console.log(i);
  
// }

// }


//FIBONACCI SERIES 

let n = parseInt(prompt("enter the number "));
let a =0;
let b=1;
let c;
console.log(a);
console.log(b);
function fibonacci(n) {
    for (let i =2 ; i<=n; i++){
        c=a+b;
        a=b;
        b=c;
        console.log(c);
    }
    
}

fibonacci(n)



// let n = parseInt(prompt("enter the number to print upto ", 1))
// function oddSum(number) {
  

// for (let i =1; i<=number*2; i++){
//    if( i%2===1){
//    console.log(i); 
  
//    }
   
   

   
// }

// for (let i = 0; i < number; i++) {
//     if (oddSum(i)) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(oddSum(n));



// oddSum(n)



// let n = parseInt(prompt("enter the number to print upto ", 1));
// function primeMover(n){
//     var primes = [2];
//     var x = 3;
//     var count = 0;
//     do{
//         for(var y=2; y<x; y++){
//             if(x%y===0){
//                 count++;
//             }
//         }
//         if(count===0){
//             primes.push(x);
//             x++;
//         }else{
//             x++;
//             count=0;
//         }
//     }
//     while(primes.length<n);
//     return primes[primes.length-1];
// }
// primeMover(n);    




let i = parseInt(prompt("enter a number"));

function isOdd(n) {
  return Boolean(n % 2);
}

function findSum(no) {
  let sum = 0;

  for (var i = 0; i < no; i++) {
    if (isOdd(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(findSum());