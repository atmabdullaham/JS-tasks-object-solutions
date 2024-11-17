// Task - 5(Hard)
// Loop through an object and print the key - value pairs with their types

let myObject = {
 name: 'John Doe',
 age: 25,
 city: 'Example City',
 isStudent: true
};

// Loop through the object
for (let key in myObject) {
 // Check if the property belongs to the object itself
 if (myObject.hasOwnProperty(key)) {
  // Get the value and its type
  let value = myObject[key];
  let type = typeof value;

  // Print the key, value, and type
  console.log(`Key: ${key}, Value: ${value}, Type: ${type}`);
 }
}

// alternative method:

Object.entries(myObject).forEach(([key, value]) => {
 console.log(`Key: ${key}, Value: ${value}, Type: ${typeof value}`);
});


