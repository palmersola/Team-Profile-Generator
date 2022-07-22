const Employee = require("./Employee");
class Manager extends Employee {
  constructor(username, id, email, extra) {
    super(username, id, email);
    this.extra = extra;
  }
  getRole() {
    return "Manager";
  }
  getExtra() {
    return this.extra;
  }
}

module.exports = Manager;
