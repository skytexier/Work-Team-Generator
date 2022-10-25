const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () =>{
        it("should return an instance of engineer containing name, id, email and github", () => {
            const obj = new Engineer("employee name", "employee id", "employee email", "github");

            expect(obj instanceof Engineer).toEqual(true)
            

        });
    });
});