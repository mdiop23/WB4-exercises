"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Jolly Rancher", price: 2.00},
    {product: "Starburst", price: 3.50},
    {product: "Candy Apple", price: 2.79},
    {product: "Chocolate Strawberry", price: 5.39},
    {product: "Dozen of Donuts", price: 10.00},
    {product: "Oreo", price: 4.58},

]   


for(let i = 0; i < products.length; i++){
    if(products[i].price < 4){
        console.log(` These products are less than $4: ${products[i].product}`)
    }
}

for(let i = 0; i < products.length; i++){
    if(products[i].product.indexOf("M&Ms") !== -1){
        console.log(`These products are labeled with M&M: ${products[i].product}`)
    }
}


let foundSwedishFish = false;

for (let i = 0; i < products.length; i++) {
    if (products[i].product === "Swedish Fish") {
        foundSwedishFish = true;
        console.log(`We have ${products[i].product} - it costs ${products[i].price}`);
        break;
    }
}

if (!foundSwedishFish) {
    console.log("We don't carry that.");
}


