// _____________________________Employee Records for a Company___________________________

// Problem: A company needs to keep track of employee records, including their ID, name, department, position, and salary.

const employee = {
 empId: 1001,
 name: 'John Doe',
 department: 'IT',
 position: 'Software Engineer',
 salary: 70000,
 getDetails: function () {
  return `ID: ${this.empId}, Name: ${this.name}, Department: ${this.department}, Position: ${this.position}, Salary: ${this.salary}`;
 }
};

console.log(employee.getDetails());
// Output: ID: 1001, Name: John Doe, Department: IT, Position: Software Engineer, Salary: 70000
