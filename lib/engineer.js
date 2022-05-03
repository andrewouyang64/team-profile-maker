const Employee = require('./employee');

class Engineer extends Employee {
    constructor (github) {
        this.gitHub = github;
    }

    getGithub(githubName) {
        return githubName
    }

    getRole(name) {
        return 'engineer';

    }
}

module.exports = Engineer;