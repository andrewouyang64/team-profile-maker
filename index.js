const employee = require('./employee');
const manager = require('./manager');
const engineer = require('./engineer');
const intern = require('./intern');
const profile = require('./profile');
const inquirer = require('./inquirer');
const fs = require('fs');

console.log('Build your team by entering your selection.');

inquirer
.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter your manager name',
    },
  {
    type: 'input',
      name: 'id',
      message: 'Please enter your manager ID',
  },

  {
    type: 'input',
      name: 'officeNumber',
      message: 'Please enter your manager office number',
  },


])
.then((data) => {
    fs.writeFile('index.html', frofileText, (err) =>
      err ? console.log(err) : console.log('Success!')
    );

})
