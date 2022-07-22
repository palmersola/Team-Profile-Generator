const Employee = require("./Employee");
class Intern extends Employee {
  constructor(username, id, email, school) {
    super(username, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
