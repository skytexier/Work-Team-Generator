const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () =>{
        it("should return an instance of intern containing name, id, email and school", () => {
            const obj = new Intern("employee name", "employee id", "employee email", "school");

            expect(obj instanceof Intern).toEqual(true)
            

        });
    });
});