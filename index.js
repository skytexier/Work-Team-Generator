const inquirer = require('inquirer');
const fs = require("fs");
const generatePage = require('./generatePage');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const team = [];

const questions = [
    {
        type: "list",
        message: "What type of employee would to like to add?",
        choices: ["Manager", "Engineer", "Intern", "None, exit application"],
        name: "choices"
        
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
]

const engineerQuestions = [
    {
        type: "input",
        message: "What is this engineers Github",
        name: "github",
        
    }
]

const internQuestions = [
    {
        type: "input",
        message: "What is this interns university/school name?",
        name: "school",
        
    }
]

const managerQuestions = [
    {
        type: "input",
        message: "What is this managers office number?",
        name: "officeNumber",
        
    }
]

function init(data) {
    inquirer.prompt(questions).then((data) => {
        let choice = data.choices;
        let general = data;
        console.log(choice)
        switch (choice){
                case "Engineer":
                    console.log(data);
                    inquirer.prompt(engineerQuestions).then((data) => {
                        let totalInfo = {
                            ...data,
                            ...general,
                        }
                        team.push(totalInfo)
                        console.log(team)
                    })
                    break;
                
                case "Intern":
                    console.log("Good");
                    inquirer.prompt(internQuestions).then((data) => {
                        team.push(data)
                    })
                    break;
    
                case "Manager":
                    console.log("Sweet");
                    inquirer.prompt(managerQuestions).then((data) => {
                        team.push(data)
                    })
                    break;
    
                default:
                    return "Error adding this employee";
        }
    }) 
};

function getTeam() 

init();
