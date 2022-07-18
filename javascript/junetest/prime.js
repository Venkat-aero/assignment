// let n = parseInt(prompt("enter the number to print prime", 1));
// function checkPrime(num) {
//     if (num <=1) {return false;}
//      for (let i =2; i< n; i++){
//          if (num % i===0){
//              return false;
//          }
//      }
//     return true;
// }
// checkPrime(n)?console.log('true'): console.log('false');

// for (let i =1 ; i <=n ; i++){
//     if (checkPrime(i)) {
//         console.log(i);
//     }
// } 
// function sumPrimes(number) {
//     var result = 0;
//     for(var num = 0; num <= number; num++) {
//       if(checkPrime(num)) {
//         result += num;
//       }
//     }
//     return result;
//   }
//   function prime(num) {
//          var result;
//           for (let n =0; n<=num; n++ ){
//               if (prime(num))
//               {
//                   result += n;
//               }
//           }
//           return result;
//       }

// net solution
// let n = parseInt(prompt("enter the number to print prime", 1));
// function checkPrime(number) {
//     if (number === 0 || number === 1) return false;
//     for(var i = 2; i <= number; i++) {
//       if(number % i === 0 && number != i) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   function sumPrimes(num) {
//     var result = 0;
//     for(var number = 0; number <= num; number++) {
//       if(checkPrime(number)) {
//         result += number;
//       }
//     }
//     return result;
//   }
//   checkPrime(n)

//   let n = parseInt(prompt("enter the number to print prime", 1));


//   function checkPrime(n) {
//       if (n <=1){return false;}
//       for (let i =2 ; i < n; i++){if
//     (n % 2 === 0){return false;}
//       }
//       return true;  
//   } function prime(num) {
//      var result;
//       for (let n =0; n<=num; n++ ){
//           if (prime(num))
//           {
//               result += n;
//           }
//       }
//       return result;
//   }
//   checkPrime(n)
//   prime(n)
// let n = prompt("enter", 1)
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

// let n = prompt("Enter the position of the prime number", 1);
// const findPrime = num => {
//     let i, primes = [2, 3], n = 5;
//     const primesum = n => {
//        let i = 1, p = primes[i],
//        limit = Math.ceil(Math.sqrt(n));
//        while (p <= limit) {
//           if (n % p === 0) {
//              return false;
//           }
//           i += 1;
//           p = primes[i];
//        }
//        return true;
//     }
//     for (i = 2; i <= num; i += 1) {
//        while (!primesum(n)) {
//           n += 2;
//        }
//        primes.push(n);
//        n += 2;
//     };
//     return primes[num - 1];
//  }
//  console.log(` ${findPrime(n)} is in the position of ${n}  `);

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
