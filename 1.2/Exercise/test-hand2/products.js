/*
You have an array of products, and you want to create a new array containing the names of products 
that are both in stock and have a price less than $50. Use the map() and filter() methods to achieve this.
*/

const products = [
    { name: "Widget A", price: 45, inStock: true },
    { name: "Widget B", price: 60, inStock: false },
    { name: "Widget C", price: 30, inStock: true },
    { name: "Widget D", price: 55, inStock: true },
    { name: "Widget E", price: 25, inStock: true }
];

const productList=products.filter((product)=>product.price<50 && product.inStock===true)
    .map((product)=>product.name)

console.log(productList);