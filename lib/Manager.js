const Employee = require("./Employee");
class Manager extends Employee {
  constructor(username, id, email, office) {
    super(username, id, email);
    this.office = office;
  }
  printOffice() {
    console.log(this.office);
  }
}

module.exports = Manager;
