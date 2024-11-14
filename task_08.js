// 3. Library Book Management
// Problem: A library needs a system to keep track of books, including their titles, authors, genres, availability status, and borrowers.


const book = {
 title: '1984',
 author: 'George Orwell',
 isAvailable: true,
 borrowBook: function () {
  if (this.isAvailable) {
   this.isAvailable = false;
   console.log(`${this.title} has been borrowed.`);
  } else {
   console.log(`${this.title} is currently not available.`);
  }
 }
};

book.borrowBook(); // Output: 1984 has been borrowed.
book.borrowBook(); // Output: 1984 is currently not available.
