const inquirer = require('inquirer');
const fs = require("fs");
const generatePage = require('./generatePage');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const team = [];

const roleSelect = [
    {
        type: "list",
        message: "What type of employee would to like to add?",
        choices: ["Manager", "Engineer", "Intern", "None"],
        name: "choices"
        
    }
]
const engineerQuestions = [
    {
        type: "input",
        message: "What is this employees name?",
        name: "name",
        
    },
    {
        type: "input",
        message: "What is this employees ID?",
        name: "id",
        
    },
    {
        type: "input",
        message: "What is this employees email?",
        name: "email",
        
    },
    {
        type: "input",
        message: "What is this engineers Github",
        name: "github",
        
    }
]

const internQuestions = [
    {
        type: "input",
        message: "What is this employees name?",
        name: "name",
        
    },
    {
        type: "input",
        message: "What is this employees ID?",
        name: "id",
        
    },
    {
        type: "input",
        message: "What is this employees email?",
        name: "email",
        
    },
    {
        type: "input",
        message: "What is this interns university/school name?",
        name: "school",
        
    }
]

const managerQuestions = [
    {
        type: "input",
        message: "What is this employees name?",
        name: "managerName",
        
    },
    {
        type: "input",
        message: "What is this employees ID?",
        name: "id",
        
    },
    {
        type: "input",
        message: "What is this employees email?",
        name: "email",
        
    },
    {
        type: "input",
        message: "What is this managers office number?",
        name: "officeNumber",
        
    }
]

function init(data) {
    return inquirer.prompt(roleSelect).then((answer) => {
        let role = answer.choices;
        console.log(role + " selected!")
        switch (role){
                case "Engineer":
                    inquirer.prompt(engineerQuestions).then((data) => {    
                        const engineer = new Engineer(data.name, data.id, data.email, data.github)
                        team.push(engineer)
                        console.log("Engineer added to roster")
                        init()
                        })
                    break;
                
                case "Intern":
                    inquirer.prompt(internQuestions).then((data) => {
                        const intern = new Intern(data.name, data.id, data.email, data.school)
                        team.push(intern)
                        console.log("Intern added to roster");
                        init()
                    })
                    break;
    
                case "Manager":
                    inquirer.prompt(managerQuestions).then((data) => {
                        const manager = new Manager(data.managerName, data.id, data.email, data.officeNumber)
                        team.push(manager)
                        console.log("Manager added to roster");
                        init()
                    })
                    break;
                case "None":
                    console.log(JSON.stringify(team));
                    let crew = JSON.stringify(team)
                    console.log("No more employees will be added, thank you")
                    console.log("Your team roster will now be generated")
                    writeToFile(generatePage(team));
                    break;
                default:
                    return "Error adding this employee";
        }
    }) 
};

function writeToFile (filename, data){
    fs.writeFile("index.html", filename, (err, data) => {
        err ? console.log(err) : console.log("Team page generated");
    });
}



init()
