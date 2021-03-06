const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getRole() {
        return 'Engineer'
    }

    getGitHub() {
        return this.gitHub;
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
              <span class="card-text">GitHub: <a href="https://github.com/${this.getGitHub()}">${this.getGitHub()}</a> </span>
              
              <a href="mailto: ${this.getEmail()}" class="card-text">Send Email</a>
          </div>
      </div>
    `
        return newHTML;
    }
}

module.exports = Engineer;