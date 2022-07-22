const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(username, id, email, github) {
    super(username, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
