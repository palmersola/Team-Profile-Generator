const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(username, id, email, github) {
    super(username, id, email);
    this.github = github;
  }
  printGithub() {
    console.log(this.github);
  }
}

module.exports = Engineer;
