const generatePage = team => {
    console.log(team)
    const getManager = manager => {
    return `<div class="card bg-primary m-3">
    <div class="card-body">
        <h3 class="card-title text-center">${manager.getRole()}</h3>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${manager.getName()}</li>
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href=" mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${manager.getofficeNumber()}</li>
        </ul>
    </div>
    </div>`
    };
    const getEngineer = engineer => {
        return `<div class="card text-white bg-dark m-3">
        <div class="card-body">
        <h3 class="card-title text-center">${engineer.getRole()}</h3>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${engineer.getName()}</li>
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href=" mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul>
        </div>
        </div>`
        };
    const getIntern = intern => {
        return `<div class="card bg-danger">
        <div class="card-body">
        <h3 class="card-title text-center">${intern.getRole()}</h3>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${intern.getName()}</li>
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email:<a href=" mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
        </div>
        </div>`
        };

const html = [];

html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => getManager(manager))
);
html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => getEngineer(engineer))
    .join("")
);
html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => getIntern(intern))
    .join("")
);

return html.join("");
}

module.exports = team => {     
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Builder</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <link src=style.css rel="stylesheet">
    </head>
    <header>
        <h1 class="d-flex justify-content-center m-10 bg-secondary text-white">Work Team Generator</h1>
    </header>
    <body>
    <section class="d-flex justify-content-center container">
    ${generatePage(team)}
    </section>
    </body>
    </html>
    `
    
};