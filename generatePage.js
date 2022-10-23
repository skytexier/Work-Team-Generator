const Manager = require("./lib/Manager");

function generatePage(team){
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
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">${Manager.getName()}</h3>
            <h4 class="card-body">${Manager.getEmail()}</h3>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">${team}</h3>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">Intern</h3>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">Manager</h3>
        </div>
    </div>
</section>
</body>
</html>
`
}

module.exports = generatePage;