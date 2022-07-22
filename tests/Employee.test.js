const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should construct class", () => {
    const employee = {
      username: "Palmer",
      id: "101",
      email: "pfunkaloo13@gmail.com"
    };
    const result = new Employee("Palmer", "101", "pfunkaloo13@gmail.com");
    expect(employee).toEqual(result);
  });
});
