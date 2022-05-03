const Employee = require('./employee');

class Manager extends Employee {
    constructor (officeNumber) {
        this.officeNumber = officeNumber;
       
    }

    getRole(name) {
        return 'manager';
    }
}

module.exports = Manager;