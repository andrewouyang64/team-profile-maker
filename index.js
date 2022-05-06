
// Import classes
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const profileHTML = require("./lib/profileHtml");

const inquirer = require("inquirer");
const fs = require("fs");

// Create TeamGenerator class

class TeamGenerator {
  
    constructor() {
    this.employees = [];
    this.employee = {};
    this.HTML = '';

    // Create arrays of questions for employees
    this.managerQuestions = [
      {
        type: 'input',
        message: 'Please enter manager Name',
        name: 'managerName',
      },

      {
        type: 'input',
        message: 'Please enter manager ID',
        name: 'managerID',
      },

      {
        type: 'input',
        message: 'Please enter manager Email',
        name: 'managerEmail',
      },

      {
        type: 'input',
        message: 'Please enter manager Office Number',
        name: 'officeNumber',
      }
    ];

    this.engineerQuestions = [
      {
        type: 'input',
        message: 'Please enter engineer Name',
        name: 'name',
      },

      {
        type: 'input',
        message: 'Please enter engineer ID',
        name: 'id',
      },

      {
        type: 'input',
        message: 'Please enter engineer Email',
        name: 'email',
      },

      {
        type: 'input',
        message: 'Please enter engineer GitHub Username',
        name: 'gitHub',
      }
    ];

    this.internQuestions = [
      {
        type: 'input',
        message: 'Please enter intern Name',
        name: 'name',
      },

      {
        type: 'input',
        message: 'Please enter intern ID',
        name: 'id',
      },

      {
        type: 'input',
        message: 'Please nter intern Email',
        name: 'email',
      },

      {
        type: 'input',
        message: 'Please enter intern school',
        name: 'school',
      }
    ];

  }

  
// Add team members function
  addTeamMember() {
    
    inquirer
      .prompt(this.managerQuestions)
        .then((answers) => {
            this.employee = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);
            this.employees.push(this.employee);
      })
      .then(() => {
            this.addMembersQuestion();

      })
  }

  addMembersQuestion() {

    let addMembersQuestion = [
      {
        type: 'list',
        message: 'Please choose from the following',
        name: 'employeeType',
        choices: ['Add Engineer', 'Add Intern', 'Complete'],
      }
    ];

    inquirer
      .prompt(addMembersQuestion)
        .then(answers => answers.employeeType)
            .then((choice) => {
                switch (choice) {
                case 'Add Engineer':
                    this.addEngineer();
                break;

                case 'Add Intern':
                    this.addIntern();
                break;

                case 'Complete':
                    this.createHTML();
                break;
            }
      })
  }

  addEngineer() {
    inquirer
      .prompt(this.engineerQuestions)
        .then((answers) => {
            this.employee = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
            this.employees.push(this.employee);
       
      })
      .then(() => {
            this.addMembersQuestion();
      })
  }

  addIntern() {
    inquirer
      .prompt(this.internQuestions)
        .then((answers) => {
            this.employee = new Intern(answers.name, answers.id, answers.email, answers.school);
            this.employees.push(this.employee);
      })
      .then(() => {
            this.addMembersQuestion();
      })
  }

  createHTML() {
    this.writeHTML();

      fs.writeFile('./dist/myTeam.html', this.HTML, (err) =>
      err? console.log(err) : console.log('Successfully created myTeam.html!'))
     
    }

  writeHTML() {
    let cards = '';
    // Write cards

    for (let person of this.employees) {

      let newCards = person.writeHTML();
      cards = cards + '\n' + newCards;
    }
    this.HTML = profileHTML.replace("HTMLcards", cards);

  }

}
teamGenerator = new TeamGenerator;
teamGenerator.addTeamMember();


