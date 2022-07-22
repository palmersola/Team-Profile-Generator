const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should construct class", () => {
    const intern = {
      username: "Palmer",
      id: "101",
      email: "pfunkaloo13@gmail.com",
      school: "University of Minnesota"
    };
    const result = new Intern(
      "Palmer",
      "101",
      "pfunkaloo13@gmail.com",
      "University of Minnesota"
    );
    expect(intern).toEqual(result);
  });
});
