// let i = parseInt(prompt("enter the number to print it's cube", 1));
// if (i === 1){console.log(1);}
// else{console.log(i*i*i);}



// n term of odd numbers and sum 

let n = parseInt(prompt("enter the number to print upto ", 1))
let i; 
let sum;
function oddSum(number) {
     

for (let i =1; i<=number*2; i++){
    if (i%2=== 1){
    console.log(i);}
    
    }

    
 sum=0;
 for (i=2; i<=number; i++){
   sum=number*number;
 }
 console.log(` the total sum of odd numbers is ${sum}`);
}


oddSum(n)


// function isOdd(n) {
//     return Boolean(n % 2);
//   }
  
//   function findSum(no) {
//     let sum = 0;
  
//     for (var i = 0; i < no; i++) {
//       if (isOdd(i)) {
//         sum += i;
//       }
//     }
//     return sum;
//   }
  
//   console.log(findSum(100));

// let i = parseInt(prompt("enter a number"));

// function oddSum(number) {
    

//     for (let i =1; i<=number*2; i++){
//         if (i%2=== 1){
//         console.log(i);}
        
//     }
// }

// function findSum(no) {
//   let sum = 0;

//   for (var i = 0; i < no; i++) {
//     if (oddSum(i)) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(findSum());

