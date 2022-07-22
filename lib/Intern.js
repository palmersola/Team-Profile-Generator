const Employee = require("./Employee");
class Intern extends Employee {
  constructor(username, id, email, school) {
    super(username, id, email);
    this.school = school;
  }
  printSchool() {
    console.log(this.school);
  }
}

module.exports = Intern;
