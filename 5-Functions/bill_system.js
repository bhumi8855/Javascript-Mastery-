//function declaration 
function calculateItemTotal(price,quantity){
    return price*quantity;
}

//Function with parameters+return value
function calculateDiscount(amount){
    if(amount>=1000){
        return amount*0.10;
    }
    return 0;
}

//Function Expression 
let calculateTax=function(amount){
    return amount*0.05; //5% tax
}

//Arrow Function
let calculateFinalAmount=(total,discount,tax)=>{
    return total - discount + tax;
}

let price=500;
let quantity=3;

let total=calculateItemTotal(price,quantity);
let discount=calculateDiscount(total);
let tax=calculateTax(total-discount);
let finalAmount=calculateFinalAmount(total,discount,tax);

console.log("Shopping Bill Summary");
console.log("Total:",total);
console.log("Discount:",discount);
console.log("Tax:",tax);
console.log("Final Amount to Pay:",finalAmount);