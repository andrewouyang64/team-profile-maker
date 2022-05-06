const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("getName", () => {
        it("Should return the name of an Engineer", () => {
            const engineer = new Engineer('Sam', 2, 'sam@company.com', 'sam123');
            expect(engineer.getName()).toEqual('Sam');
        });
    })

    describe("getID", () => {
        it("Should return the ID of an Engineer", () => {
            const engineer = new Engineer('Sam', 2, 'sam@company.com', 'sam123');
            expect(engineer.getID()).toEqual(2);
        });
    })

    describe("getEmail", () => {
        it("Should return the Email of an Engineer", () => {
            const engineer = new Engineer('Sam', 2, 'sam@company.com', 'sam123');
            expect(engineer.getEmail()).toEqual('sam@company.com');
        });
    })

    describe("getRole", () => {
        it("Should return the Role of an Engineer", () => {
            const engineer = new Engineer('Sam', 2, 'sam@company.com', 'sam123');
            expect(engineer.getRole()).toEqual('Engineer');
        });
    })

    describe("getGitHub", () => {
        it("Should return the GitHub Account name of an Engineer", () => {
            const  engineer= new Engineer('Sam', 2, 'sam@company.com', 'sam123');
            expect(engineer.getGitHub()).toEqual('sam123');
        });
    })

    describe("writeHTML", () => {
        it("Should return a string that has the Engineer data in HTML card", () => {
            const engineer = new Engineer('Sam', 2, 'sam@company.com', 'sam123');
            
            const htmlCard = `
            <div class="card">
                <div class="card-top>
                    <span class="card-top-text">Name : ${engineer.getName()}</span>
                    <span class="card-top-text">Role : ${engineer.getRole()}</span>
                </div>
                <div class="card-body">
                    <span class="card-text1">ID: ${engineer.getID()}</span>
                    <span class="card-text">GitHub: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a> </span>
                    <a href="mailto: ${engineer.getEmail()}" class="card-text">Send Email</a>
                </div>
            </div>
            `
            expect(htmlCard).toMatch(/Sam/);
            expect(htmlCard).toMatch(/2/);
            expect(htmlCard).toMatch(/Engineer/);
            expect(htmlCard).toMatch(/sam123/);
        });
    })
});