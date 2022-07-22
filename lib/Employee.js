class Employee {
  constructor(username, id, email) {
    this.username = username;
    this.id = id;
    this.email = email;
  }

  printInfo() {
    console.log(this.username);
    console.log(this.id);
    console.log(this.email);
  }
}
module.exports = Employee;
