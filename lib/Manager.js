const Employee = require("./Employee");
class Manager extends Employee {
  constructor(username, id, email, officeNumber) {
    super(username, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
