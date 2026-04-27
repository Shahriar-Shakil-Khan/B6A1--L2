// Create a function calculateTotalPrice that accepts an array of product objects. Each product object contains the following properties:

// name (string)
// price (number)
// quantity (number)
// discount?: optional number from 0–100, representing a percentage discount
// The function should return the total price of all products in the array, taking into account the discount for each product (if provided). If the array is empty, return 0.

// Requirements:
// You must write the correct type for the function parameter and the return type.
// Use array methods (map, reduce, etc.) to calculate the total.
// The total price of each product is calculated as: (price * quantity).
// Correctly handle products with and without the discount property.
type Product = {
    
    name: string;
    
    price: number;
    
    quantity: number;
    
    discount?: number; 
};

function calculateTotalPrice(products: Product[]): number {

    return products.reduce((total, product) => {

        
        let itemTotal = product.price * product.quantity;

        
        if (product.discount) {
            itemTotal = itemTotal - (itemTotal * product.discount / 100);
        }

       
        return total + itemTotal;

    }, 0);
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));