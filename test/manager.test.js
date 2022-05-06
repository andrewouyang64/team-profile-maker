const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("getName", () => {
        it("Should return the name of a Manager", () => {
            const newManager = new Manager('Linda', 4, 'Linda@company.com', '2233445566');
            expect(newManager.getName()).toEqual('Linda');
        });
    })

    describe("getID", () => {
        it("Should return the ID of a Manager", () => {
            const newManager = new Manager('Linda', 4, 'Linda@company.com', '2233445566');    
            expect(newManager.getID()).toEqual(4);
        });
    })

    describe("getEmail", () => {
        it("Should return the Email of a Manager", () => {
            const newManager = new Manager('Linda', 4, 'Linda@company.com', '2233445566');    
            expect(newManager.getEmail()).toEqual('Linda@company.com');
        });
    })

    describe("getRole", () => {
        it("Should return the Role of a Manager", () => {
            const newManager = new Manager('Linda', 4, 'Linda@company.com', '2233445566');   
            expect(newManager.getRole()).toEqual('Manager');
        });
    })

    describe("getOfficeNumber", () => {
        it("Should return the Office Number of a Manager", () => {
            const newManager = new Manager('Linda', 4, 'Linda@company.com', '2233445566');  
            expect(newManager.getOfficeNumber()).toEqual('2233445566');
        });
    })

    describe("writeHTML", () => {
        it("Should return a string that has the Manager data in HTML card", () => {
            const newManager = new Manager('Linda', 4, 'Linda@company.com', '2233445566');
            
            const htmlCard = `
          <div class="card">
            <div class="card-top">
              <span class="card-top-text>Name : ${newManager.getName()}</span>
              <span class="card-top-text>Role : ${newManager.getRole()}</span>
            </div>
          <div class="card-body">
              <span class="card-text1">ID: ${newManager.getID()}</span>
              <span class="card-text">Phone: ${newManager.getOfficeNumber()}</span>
              <a href="mailto: ${newManager.getEmail()}" class="card-text">Send Email</a>
          </div>
      </div>
    `
            expect(htmlCard).toMatch(/Linda/);
            expect(htmlCard).toMatch(/4/);
            expect(htmlCard).toMatch(/Manager/);
            expect(htmlCard).toMatch(/2233445566/);
        });
    })
});