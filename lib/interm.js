const Employee = require('./employee');
const employee = require('./employee');

class Interm extends Employee {
    constructor (school) {
        this.school = school;
    }
    getRole(name) {
        return 'interm';
    }

    getSchool(schoolName) {
        return schoolName;
    }
}

module.exports = Interm;