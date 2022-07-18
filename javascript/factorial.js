let n=parseInt( prompt('enter the factorial number ', 5));

function factorial(number) {
    let sum = 1;

if (number <= 1) {
    console.log(1);
    
} else { for (let i = 1; i <=number ; i ++){
    sum = sum * i ;
   
}
console.log(sum); 
}
}
factorial(n)
    
