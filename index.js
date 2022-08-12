//import file
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateMarkdown = require("./src/template");

const fs = require("fs");
const inquirer = require("inquirer");

//creat a empty team array for later use
const teamArray = [];

// manager question
const managerQ = [
  {
    type: "input",
    name: "name",
    message: "Please enter the manager of the team",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter manager's ID",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter manager's E-mail",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Please enter manager's office number",
  },
  //   {
  //     type: "list",
  //     name: "newMember",
  //     message: "Is there another team member?",
  //     choice: ["Yes", " No"],
  //   },
];

//other employee question
const employeeQ = [
  {
    type: "list",
    name: "role",
    message: "Please choose an employee's role",
    choices: ["Engineer", "Intern"],
  },
  {
    type: "input",
    name: "name",
    message: "Please enter the name of the employee",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter employee's ID",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter employee's E-mail",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter employee's github account name",
    when: (input) => input.role === "Engineer",
  },
  {
    type: "input",
    name: "school",
    message: "Please enter employee's school",
    when: (input) => input.role === "Intern",
  },
  {
    type: "confirm",
    name: "addAnother",
    message: "Is there another team member?",
    default: false,
  },
];

//-------------------------------------
const createManager = () => {
  return inquirer.prompt(managerQ).then((managerA) => {
    const { name, id, email, officeNumber } = managerA;
    const manager = new Manager(name, id, email, officeNumber);

    teamArray.push(manager);
    //console.log(teamArray);

    // if (newMember) {
    //   createEmployee();
    // } else {
    //   generateMarkdown(teamArray);
    // }
  });
};

const createEmployee = () => {
  return inquirer.prompt(employeeQ).then((employeeA) => {
    let { name, id, email, role, github, school, addAnother } = employeeA;
    let employee;

    if (role === "Engineer") {
      employee = new Engineer(name, id, email, github);
      //console.log(teamArray);
    } else if (role === "Intern") {
      employee = new Intern(name, id, email, school);
      //console.log(teamArray);
    }

    teamArray.push(employee);
    //console.log(teamArray);

    if (addAnother) {
      return createEmployee(teamArray);
    } else {
      return teamArray;
    }
  });
};

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) =>
    err
      ? console.log(err)
      : console.log("team profile created, please check index.html")
  );
};

//-------------------------------------------
createManager()
  .then(createEmployee)
  .then((teamArray) => {
    return generateMarkdown(teamArray);
  })
  .then((page) => {
    return writeFile(page);
  })
  .catch((err) => {
    console.log(err);
  });
