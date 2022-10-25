const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () =>{
        it("should return an instance of manager containing name, id, email and office number", () => {
            const obj = new Manager("employee name", "employee id", "employee email", "office number");

            expect(obj instanceof Manager).toEqual(true)
            

        });
    });
});