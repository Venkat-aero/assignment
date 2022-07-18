// let days = 8;
// switch (days) {
//   case 1:
//     console.log("Sunday");
//     break;


//   case 2:
//     console.log("Monday");
//     break;

//   case 3:
//     console.log("Tuesday");
//     break;

//   case 4:
//     console.log("Wednesday");
//     break;

//   case 5:
//     console.log("Thursday");
//     break;

//   case 6:
//     console.log("Friday");
//     break;

//     case 7:
//         console.log("Saturday");
//         break;
//   default:
//     console.log("Sorry it's not valid, why don't you try between the numbers  1 - 7 !");
//     break;
// }


// let num = 898;
// if (num % 2 === 0)
//  {
//     console.log(`${num} is an even number `);
    
// } else {
//     console.log(`${num} is an odd number `);
    
// }

// let length = 20;
// let breadth =20;
// if (length != breadth) 
// {console.log("As per the given dimensions, the object is Rectangle. ");
// }
   
//  else {console.log("As per the given dimensions, the object is Square.");
    
// }



// let length = 10;
// let breadth =20;
// if (length = breadth) 
// {console.log(" As per the given dimensions, the object is Square. ");
// }
   
//  else {console.log("As per the given dimensions, the object is Rectangle. ");
    
// }




// {var num = 20;

// var num = 20;(we can re-declare and re-assign values)

// In the above example you can see i am having two variables with same name and value , the problem in var in it will take both into memories  eventhough it is having same values 

// let num = 30;
// let num = 20; (we cannot re-declare but we can re-assign )

// In let example we cannot redeclare let with the same name it will show error but we can re assign the values for num , it helps us to avoid duplicate files in the memory location 


// const pie = 3.141;
// const pie = 2.7 ; (we cannot redeclare and re assign const again)

// in const example we cannot re-declare and re-assign value and name again 

// const pie = 3.141;

//  const pie =20;
// console.log(pie);

//           CALCULATOR USING SWITCH CASE
// let operator = '-'
// let  num1 = 35;
// let num2 = 49;
// let result;
// switch (operator) {
//     case '+':
//         // console.log(num1 + num2);
//         result = num1 + num2 ;
        
//         break;

//         case '-':
//             // console.log(num1 - num2);
//             result = num1 - num2 ;
            
//             break;

//             case '*':
//                 // console.log(num1 * num2);
//                 result = num1 * num2 ;
                
//                 break;

                
//                 case '/':
//                     // console.log(num1 / num2);
//                     result = num1 / num2 ;
                    
//                     break;
            
    

//     default:
//         console.log('invalid entry');
//         break;
// }
// console.log(result);


//  CALCULATOR USING IF ELSE 

// let operator = '+'
// let num1 = 26;
// let num2 = 78;
// let result;

// if (operator === '+') {
//     console.log(num1 + num2);
   
    
// }
// else if (operator === '-') {
//     console.log(num1 - num2);
// }

// else if (operator === '*') {
//     console.log(num1 * num2);
// }

// else if (operator === '/') {
//     console.log(num1 / num2);
// }






// else {
//     console.log('invalid entry');
// }
// console.log(result);


// for (let i =1; i<= 100;i= i++ ) {
//     console.log(i);
// }


//  for (let a =2; a<= 10; a= a+ 2) {
//      if (a%2=== 0){
//      console.log(a);}
//     else{console.log("sorry the output cannot be printed ");} }

// let num =2;
// while (num<=20) {
//     console.log(num);
//     num += 2;
    
//}


// let n = 2;
// do {console.log(n);
// n += 2}
// while (n<= 40);


// let age = prompt("are you over 18 ?" , 18);
// console.log(age);
// if (age >= 18) {alert("you are eligible ");}
// else {alert("sorry  not eligible !");}

// let value = confirm ("are you over 18?" );
// console.log(value);

// let num1 = 2;
// let num2 = 5;
// function add(a , b) {
//     sum = a + b;
//     console.log(sum);
    
// }
// add(num1 , num2);



 // PRACTICING ALL THE THINGS IN JS I LEARNT 


 // FIRST VAR , LET AND CONST


 //VAR
var a;
 var a = 2;
 var a = 5;
 a = 25;
 console.log(a);


 //LET
//let b; ( i couldn't  declare it also )
 let b = 97;
 b = 85;
  
 let c = 9
 d = b + c;
 console.log(d);

 //CONST
//  const pie; (i couldn't declare it)
 const pie = 3.141;
//  const pie =2.17; (i couldn't re write it )
console.log(pie);

// UN DEFINED
let e;
console.log(e);


//NOT DEFINED 
// console.log(f);


//NULL
let g;
g = null;
console.log(g);

//IF ELSE PROBLEMS WITH SOLUTIONS 

//Function `isEvenOrOdd()` checks if input number is even or odd

let num;
num = 8;
if (num % 2 === 0) {
    console.log(`${num} is even`);
}
else {
    console.log(`${num} is odd `);
}

//METHOD USING FUNCTION

function isEvenOrOdd(num1)
{
    if (num1 % 2 === 0){
        console.log(`${num1} is even `);
    }
    else {
        console.log(`${num1} is odd`);
    }
}
isEvenOrOdd(9);
isEvenOrOdd(10);


// ISNAN FUNCTION 

function isValidNumber(num2)
{
    if (isNaN(num2)) // isNan - is not a number { if anything is inside isNaN then it is not a number }
     {
        console.log(`${num2} is not a valid number `);
    }
    else {
        console.log(`${num2} is  a valid number `);
    }

}
isValidNumber(8);
isValidNumber("75")
isValidNumber("7x")


//LARGEST OF 2 NUMBERS
function largestOfTwoNumbers(num3 , num4)
{
    if (num3 > num4) {
        console.log(`${num3} is greater than ${num4}`);
    }
    else if ( num3 === num4) {
        console.log(`${num3} and ${num4} both are equal `);
    }
    else {
        console.log(`${num4} is greater than ${num3} `);
    }
}

largestOfTwoNumbers(6, 7);
largestOfTwoNumbers (8, 8);
largestOfTwoNumbers (9, 25);

// function addition(a,b)
// {return a+b;}
// let result= addition (8,9);
// console.log(result);
