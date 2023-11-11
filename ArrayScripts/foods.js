"use strict"

let lunch = [
    {item: "Spring Rolls", price: 9.95},
    {item: "Beef Pho", price: 15.25},
    {item: "Thai Milk Tea", price: 4.79}
    ];

let subtotal= 0 ;
let taxes = 0;
let tip = 0;
let totalDue = 0;

for(let i = 0; i < lunch.length; i++){
    subtotal += lunch[i].price
    
}

taxes = subtotal * 0.08
tip = (subtotal + taxes) * 0.18

totalDue = subtotal + taxes + tip

console.log(totalDue.toFixed(2), taxes.toFixed(2), tip.toFixed(2), subtotal.toFixed(2))