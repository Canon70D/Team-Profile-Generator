//render manager for HTML
const managerCard = function (manager) {
  return ` 
    <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3>${manager.name}</h3>
        <h4>Manager</h4>
      </div>
      <div class="card-body">
        <p class="id">ID: ${manager.id}</p>
        <p class="email">Email: ${manager.email}</p>
        <p class="officeNum">Office Number: ${manager.officeNumber}</p>
      </div>
    </div>
  </div>`;
};

//render engineer for HTML
const engineerCard = function (engineer) {
  return ` 
      <div class="col-4 mt-4">
      <div class="card h-100">
        <div class="card-header">
          <h3>${engineer.name}</h3>
          <h4>Engineer</h4>
        </div>
  
        <div class="card-body">
          <p class="id">ID: ${engineer.id}</p>
          <p class="email">Email: ${engineer.email}</p>
          <p class="github">Github: ${engineer.github}</p>
        </div>
      </div>
    </div>`;
};

//render intern for HTML
const internCard = function (intern) {
  return ` 
        <div class="col-4 mt-4">
        <div class="card h-100">
          <div class="card-header">
            <h3>${intern.name}</h3>
            <h4>Intern</h4>
          </div>
    
          <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: ${intern.email}</p>
            <p class="school">School: ${intern.school}</p>
          </div>
        </div>
      </div>`;
};

//put array to html page
generateMarkdown = (data) => {
  teamArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerHTML = managerCard(employee);
      teamArray.push(managerHTML);
    }

    if (role === "Engineer") {
      const engineerHTML = engineerCard(employee);
      teamArray.push(engineerHTML);
    }

    if (role === "Intern") {
      const internHTML = internCard(employee);
      teamArray.push(internHTML);
    }
  }

  const employeeArray = teamArray.join("");

  const teamHTML = generateTeamHTML(employeeArray);
  return teamHTML;
};

//HTML generate
const generateTeamHTML = function (employeeArray) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <nav class="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="nav-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justfy-contect-center">
                    ${employeeArray}
                </div>
            </div>
        </main>
    </body>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>`;
};

//---------------------------------------
module.exports = generateMarkdown;
