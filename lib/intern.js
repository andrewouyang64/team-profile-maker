const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return 'Intern'
    }

    getSchool() {
        return this.school
    }

    writeHTML() {

        // Write member profile card
        let newHTML = `
          <div class="card">
          <div class="card-top">
              <span class="card-top-text">Name : ${this.getName()}</span>
              <span class="card-top-text">Role : ${this.getRole()}</span>
            </div>

            <div class="card-body">
              <span class="card-text1">ID: ${this.getID()}</span>
              <span class="card-text">School: ${this.getSchool()}</span>
              <a href="mailto: ${this.getEmail()}" class="card-text">Send Email</a>
          </div>
      </div>
    `
        return newHTML;
    }
}

module.exports = Intern;