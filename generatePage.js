const generatePage = team => {
    console.log(team)
    const getManager = manager => {
    return `<div class="card">
    <div class="card-body">
        <h3 class="card-title"></h3>
        <h4>${manager.getName()}</h4>
    </div>
    </div>`
    };
    const getEngineer = engineer => {
        return `<div class="card">
        <div class="card-body">
            <h3 class="card-title"></h3>
            <h4>${engineer.getName()}</h4>
        </div>
        </div>`
        };
    const getIntern = intern => {
        return `<div class="card">
        <div class="card-body">
            <h3 class="card-title"></h3>
            <h4>${intern.getName()}</h4>
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
    </head>
    <header>
        <h1 class="d-flex justify-content-center m-3 bg-secondary">Crew Sheet</h1>
    </header>
    <body>
    <section class="d-flex justify-content-center container">
    ${generatePage(team)}
    </section>
    </body>
    </html>
    `
    
};