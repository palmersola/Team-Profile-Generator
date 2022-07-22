const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const option = [
  {
    type: "checkbox",
    name: "choice",
    choices: ["New Engineer", "New Intern", "Quit"],
    message: "What would you like to do next?"
  }
];
const managerData = [
  {
    name: "username",
    message: "Enter Team Manager's Name:"
  },
  {
    name: "id",
    message: "Enter Manager's ID:"
  },
  {
    name: "email",
    message: "Enter Manager's Email Address:"
  },
  {
    name: "office",
    message: "Enter Manager's Office Number:"
  }
];
const engineerData = [
  {
    name: "username",
    message: "Enter Engineer's Name:"
  },
  {
    name: "id",
    message: "Enter Engineer's ID:"
  },
  {
    name: "email",
    message: "Enter Engineer's Email Address:"
  },
  {
    name: "github",
    message: "Enter Engineer's Github Account:"
  }
];
const internData = [
  {
    name: "username",
    message: "Enter Intern's Name:"
  },
  {
    name: "id",
    message: "Enter Intern's ID:"
  },
  {
    name: "email",
    message: "Enter Intern's Email Address:"
  },
  {
    name: "school",
    message: "Enter Intern's School:"
  }
];
let employees = [];
let engineers = [];
let interns = [];

function generateHTML(data) {
  return fs.writeFile(
    "./dist/index.html",
    ``,
    err => (err ? console.error(err) : console.log("log committed"))
  );
}

// function returnData(managerData) {
//   const { username, id, email, office } = managerData;

//   const manager = new Manager(username, id, email, office);
//   manager.printInfo();
//   manager.printOffice();
// }

function options() {
  inquirer.prompt(option).then(option => {
    const { choice } = option;
    if (choice == "New Engineer") {
      inquirer
        .prompt(engineerData)
        .then(data => {
          const { username, id, email, github } = data;
          let engineer = new Engineer(username, id, email, github);
          engineer.printInfo();
          engineer.printGithub();
          engineers.push(engineer);
        })
        .then(function() {
          options();
        });
    } else if (choice == "New Intern") {
      inquirer
        .prompt(internData)
        .then(data => {
          const { username, id, email, school } = data;
          let intern = new Intern(username, id, email, school);
          intern.printInfo();
          intern.printSchool();
          interns.push(intern);
        })
        .then(function() {
          options();
        });
    } else {
      employees.push(engineers, interns);
      console.log(employees);
      return;
    }
  });
}

function init() {
  inquirer
    .prompt(managerData)
    .then(data => {
      const { username, id, email, office } = data;
      const manager = new Manager(username, id, email, office);
      manager.printInfo();
      manager.printOffice();
      employees.push(manager);
    })
    .then(function() {
      options();
    });
}
init();

//inquirer, Employee, Engineer, Intern, Manager
