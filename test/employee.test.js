const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("getName", () => {
        it("Should return the name of an employee class object", () => {
            const newEmployee = new Employee('Peter', 1, 'peter@company.com');
            expect(newEmployee.getName()).toEqual('Peter');
        });
    })

    describe("getID", () => {
        it("Should return the ID of an employee class object", () => {
            const newEmployee = new Employee('Peter', 1, 'peter@company.com');
            expect(newEmployee.getID()).toEqual(1);
        });
    })

    describe("getEmail", () => {
        it("Should return the Email of an employee class object", () => {
            const newEmployee = new Employee('Peter', 1, 'peter@company.com');
            expect(newEmployee.getEmail()).toEqual('peter@company.com');
        });
    })

    describe("getRole", () => {
        it("Should return the Role of an employee class object", () => {
            const newEmployee = new Employee('Peter', 1, 'peter@company.com');
            expect(newEmployee.getRole()).toEqual('Employee');
        });
    })
});