const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should construct class", () => {
    const manager = {
      username: "Palmer",
      id: "101",
      email: "pfunkaloo13@gmail.com",
      officeNumber: "229"
    };
    const result = new Manager("Palmer", "101", "pfunkaloo13@gmail.com", "229");
    expect(manager).toEqual(result);
  });
});
