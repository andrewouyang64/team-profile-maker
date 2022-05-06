const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("getName", () => {
        it("Should return the name of an Intern", () => {
            const newIntern = new Intern('David', 3, 'David@company.com', 'UTS');
            expect(newIntern.getName()).toEqual('David');
        });
    })

    describe("getID", () => {
        it("Should return the ID of an Intern", () => {
            const newIntern = new Intern('David', 3, 'David@company.com', 'UTS');
            expect(newIntern.getID()).toEqual(3);
        });
    })

    describe("getEmail", () => {
        it("Should return the Email of an Intern", () => {
            const newIntern = new Intern('David', 3, 'David@company.com', 'UTS');
           expect(newIntern.getEmail()).toEqual('David@company.com')
        });
    })

    describe("getRole", () => {
        it("Should return the Role of an Intern", () => {
            const newIntern = new Intern('David', 3, 'David@company.com', 'UTS');
            expect(newIntern.getRole()).toEqual('Intern');
        })
    })

    describe("getSchool", () => {
        it("Should return the School name of an Intern", () => {
            const newIntern = new Intern('David', 3, 'David@company.com', 'UTS');
            expect(newIntern.getSchool()).toEqual('UTS');
        });
    })

    describe("writeHTML", () => {
        it("Should return a string that has the Intern data in HTML card", () => {
            const newIntern= new Intern('David', 3, 'David@company.com', 'UTS');
            const htmlCard = `
            <div class="card">
            <div class="card-op">
                <span class="card-top-text">Name : ${newIntern.getName()}</span>
                <span class="card-top-text">Role : ${newIntern.getRole()}</span>
            </div>
            <div class="card-body">
                <span class="card-text1">ID: ${newIntern.getID()}</span>
                <span class="card-text">School: ${newIntern.getSchool()}</span>
                <a href="mailto: ${newIntern.getEmail()}" class="card-text">Send Email</a>
            </div>
            </div>
            `
    
            expect(htmlCard).toMatch(/David/);
            expect(htmlCard).toMatch(/3/);
            expect(htmlCard).toMatch(/Intern/);
            expect(htmlCard).toMatch(/UTS/);
        });
    });
})