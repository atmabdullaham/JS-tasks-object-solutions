// ______________________ Student Management System___________________________________

// Problem: A school wants to manage student information like name, roll number, grade, subjects enrolled, and attendance.

const student = {
 name: 'Alice',
 rollNumber: 101,
 grade: '10th',
 subjects: ['Math', 'Science', 'History'],
 displayStudent: function () {
  console.log(`Name: ${this.name}, Grade: ${this.grade}, Subjects: ${this.subjects.join(', ')}`);
 }
};

student.displayStudent();
// Output: Name: Alice, Grade: 10th, Subjects: Math, Science, History
