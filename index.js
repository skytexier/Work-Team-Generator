const inquirer = require('inquirer');
const fs = require("fs");
const generatePage = require('./generatePage');

const questions = [
    {
        type: "list",
        message: "What type of employee would you like to add?",
        choices: [
            "Engineer",
            "Manager",
            "Intern",
        ],
        name: "addEmployee"
    }
]

function init(data) {
    inquirer.prompt(questions).then((data) => {
        console.log(data)
    })
}

init();
