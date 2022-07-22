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
    choices: ["New Engineer", "New Intern", "Build Site"],
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
    name: "officeNumber",
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

function generateHTML(employees) {
  fs.writeFileSync(
    "./dist/index.html",
    `<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <title>My Team</title>
    </head>
    <body class="container">
      <div class="row container">
        <h1 class="col-md-auto">My Team</h1>
      </div>
      <div class="row">
  `,
    err => (err ? console.error(err) : console.log("begin html"))
  );
  let ph = "";
  for (i = 0; i < employees.length; i++) {
    if (employees[i].role === "Manager") {
      ph = "Office Number: " + employees[i].officeNumber;
    } else if (employees[i].role === "Engineer") {
      ph =
        'GitHub: <a href="https://github.com/' +
        employees[i].github +
        '"target = "_blank">' +
        employees[i].github +
        "</a>";
    } else if (employees[i].role === "Intern") {
      ph = "School: " + employees[i].school;
    } else {
      continue;
    }
    fs.appendFileSync(
      "./dist/index.html",
      `<div class="col-md-6 wrap card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">
            ${employees[i].role}
          </h5>
          <p class="card-text">
            ${employees[i].username}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Employee ID: ${employees[i].id}
          </li>
          <li class="list-group-item">
            ${ph}
          </li>
        </ul>
        <div class="card-body">
          <a href="mailto:${employees[i].email}" class="card-link">
            ${employees[i].email}
          </a>
        </div>
      </div>`,
      err => (err ? console.error(err) : console.log(i))
    );
  }

  fs.appendFileSync(
    "./dist/index.html",
    ` </div>
    </body>
  </html>
  `,
    err => (err ? console.error(err) : console.log("end html"))
  );
}

function options() {
  inquirer.prompt(option).then(option => {
    const { choice } = option;
    if (choice == "New Engineer") {
      inquirer
        .prompt(engineerData)
        .then(data => {
          const { username, id, email, github } = data;
          let engineer = new Engineer(username, id, email, github);
          const engineerObject = {
            role: engineer.getRole(),
            username: engineer.getUsername(),
            id: engineer.getId(),
            email: engineer.getEmail(),
            github: engineer.getGithub()
          };
          employees.push(engineerObject);
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
          const internObject = {
            role: intern.getRole(),
            username: intern.getUsername(),
            id: intern.getId(),
            email: intern.getEmail(),
            school: intern.getSchool()
          };
          employees.push(internObject);
        })
        .then(function() {
          options();
        });
    } else {
      generateHTML(employees);
    }
  });
}

function init() {
  inquirer
    .prompt(managerData)
    .then(data => {
      const { username, id, email, officeNumber } = data;
      const manager = new Manager(username, id, email, officeNumber);
      const managerObject = {
        role: manager.getRole(),
        username: manager.getUsername(),
        id: manager.getId(),
        email: manager.getEmail(),
        officeNumber: manager.getOfficeNumber()
      };
      employees.push(managerObject);
    })
    .then(function() {
      options();
    });
}
init();
