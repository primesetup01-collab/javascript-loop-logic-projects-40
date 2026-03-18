let cart=[500,700,900];

let total = cart. reduce((a,b)=>a+b,0);
if (total>2000) total*=1.05;
console.log(total,"please PaY Now")
console.log(cart)

// output==>2205