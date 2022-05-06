const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    writeHTML() {

        // Write memeber profile card
        let newHTML = `<div class="card">
          <div class="card-top">
              <span class="card-top-text">Name : ${this.getName()}</span>
              <span class="card-top-text">Role : ${this.getRole()}</span>
            </div>

            <div class="card-body">
              <span class="card-text1">ID: ${this.getID()}</span>
              <span class="card-text">Pnone: ${this.getOfficeNumber()}</span>
              <a href="mailto: ${this.getEmail()}" class="card-text">Send Email</a>
          </div>
      </div>
    `
        return newHTML;
    }
}

module.exports = Manager;