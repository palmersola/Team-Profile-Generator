const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(username, id, email, extra) {
    super(username, id, email);
    this.extra = extra;
  }
  getExtra() {
    return this.extra;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
