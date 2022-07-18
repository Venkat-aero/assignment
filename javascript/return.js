// 'use strict';

let result = sum(3,4);

 function sum (a,b)
{
    return a -b ;
}
console.log(result);







let sum2 = function (a,b)


{
   
    return a+ b ;

}
let result2 = sum2 (5,7);
console.log(result2);
//FUNCTION DECLARATION

let age = 18;
if (age >= 18 ) {
    isEligible()
    function isEligible ()
    {console.log('yes');}
}
else {
    isEligible()
    function isEligible()
{console.log('no');}
}


// FUNCTION EXPRESSION 


let age1  = 2;
let isEligible;
if (age1 >= 18) {
    isEligible = function (){
        console.log('yes');
    }

} 
else {
    isEligible = function(){
        console.log('no');
    }
}
isEligible()
console.log(isEligible);




// FD FOR OPERATOR

let operator = '+'

if (operator === '+')
{
    function sum (a, b)
    {console.log(a+b);}
    sum(7,9);
}
else {function minus (a,b)
{console.log(a-b);}
minus (6,5);}

//FE FOR OPERATOR

let op = '-';
let ad;
let sub;

if (op === '+') {ad = function(a,b)
   
{console.log(a+b);}
ad(3,6);
}
else {sub = function(a,b)
{console.log(a-b);}
sub(5,6)
}


//LOOPS TO PRINT 10 NATURAL NUMBERS 

for (let i=1;i<=10;i++){
    console.log(i);
}


function printTenNumber(){
    for ( let j=1;j<11;j++)
    {console.log(j);}
}
printTenNumber()





let n = parseInt(prompt('write a number to print upto'));
function input (number)
{
    for ( let l=1; l<= number ; l++){
        console.log(l);
    }
}
input(n)

//TO SUM THE NATURAL NUMBER 


// FIRST METHOD USING FUNCTION 
let sume =0;
function sumOfNumber() {
    for (let k = 1; k<= 10;k++){
        sume = sume + k;
        console.log(sume);
    }
    console.log(`total sum = ${sume}`);
}
sumOfNumber()


//SECOND METHOD USING FORMULA TO SUM THE NATURAL NUMBER 

let sum1=0;
function formula (){
    let n=9;
    sum1 = n * (n+1)/ 2;
    console.log(`tota sum of first 10 numbers =${sum1}`);
}
formula()


//SUM OF N NATURAL NUMBERS FROM USER INPUT 

let r = parseInt(prompt('type the number to sum upto ', 10));
let sum3=0;
function user (numb){
  
    sum3 = r * (r +1 )/2;
console.log(sum3);

}
user (r)