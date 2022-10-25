const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () =>{
        it("should return an instance of employee containing name, id and email", () => {
            const obj = new Employee("employee name", "employee id", "employee email");

            expect(obj instanceof Employee).toEqual(true)
            

        });
    });
});