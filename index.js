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
];

//manager choice
const managerC = [
  {
    type: "list",
    name: "role",
    message: "Please choose an employee's role",
    choices: ["Engineer", "Intern", "Finish"],
  },
];

//other employee question
//engineer question
const engineerQ = [
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
  },
];

//intern question
const internQ = [
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
    name: "school",
    message: "Please enter employee's school",
  },
];

//-------------------------------------
const createManager = () => {
  return inquirer.prompt(managerQ).then((managerA) => {
    const { name, id, email, officeNumber } = managerA;
    const manager = new Manager(name, id, email, officeNumber);

    teamArray.push(manager);
    //console.log(teamArray);

    memberChoice();
  });
};

//---------------------------------------
const memberChoice = () => {
  return inquirer.prompt(managerC).then((managerAforC) => {
    const member = managerAforC.role;

    switch (member) {
      case "Engineer":
        createEngineer();
        break;

      case "Intern":
        createIntern();
        break;

      case "Finish":
        //return teamArray;
        //console.log(teamArray);
        //console.log(generateMarkdown(teamArray));
        //return generateMarkdown(teamArray);
        writeToFile(generateMarkdown(teamArray));
    }
  });
};

//-------------------------------------------
const createEngineer = () => {
  return inquirer.prompt(engineerQ).then((engineerA) => {
    const { name, id, email, github } = engineerA;
    const engineer = new Engineer(name, id, email, github);

    teamArray.push(engineer);

    memberChoice();
  });
};

//-------------------------------------------
const createIntern = () => {
  return inquirer.prompt(internQ).then((internA) => {
    const { name, id, email, school } = internA;
    const intern = new Intern(name, id, email, school);

    teamArray.push(intern);

    memberChoice();
  });
};

function writeToFile(HTMLpage) {
  fs.writeFile("./dist/index.html", HTMLpage, (err) =>
    err
      ? console.log(err)
      : console.log("team profile created, please check index.html")
  );
}

//-------------------------------------------
createManager().catch((err) => {
  console.log(err);
});
