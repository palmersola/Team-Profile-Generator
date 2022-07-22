const Employee = require("./Employee");
class Intern extends Employee {
  constructor(username, id, email, extra) {
    super(username, id, email);
    this.extra = extra;
  }
  getExtra() {
    return this.extra;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
