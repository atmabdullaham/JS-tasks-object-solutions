//  Inventory Management System
// Problem: A warehouse needs to track items, including their name, SKU(Stock Keeping Unit), quantity, and reorder level.

const inventoryItem = {
 sku: 'ABC123',
 name: 'Laptop',
 quantity: 50,
 reorderLevel: 10,
 checkReorder: function () {
  if (this.quantity <= this.reorderLevel) {
   console.log(`Reorder needed for ${this.name}`);
  } else {
   console.log(`${this.name} stock is sufficient`);
  }
 }
};

inventoryItem.checkReorder();
// Output: Laptop stock is sufficient
