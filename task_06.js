//__________________1. E - commerce Product Management_______________________________

// Problem: You are building an online store, and you need to manage the details of various products such as name, price, category, stock availability, and ratings.

const product = {
 id: 101,
 name: 'Wireless Headphones',
 price: 59.99,
 category: 'Electronics',
 inStock: true,
 ratings: 4.5,
 displayInfo: function () {
  console.log(`Product: ${this.name}, Price: $${this.price}`);
 }
};

product.displayInfo(); // Output: Product: Wireless Headphones, Price: $59.99
