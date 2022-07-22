const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should construct class", () => {
    const engineer = {
      username: "Palmer",
      id: "101",
      email: "pfunkaloo13@gmail.com",
      github: "229"
    };
    const result = new Engineer(
      "Palmer",
      "101",
      "pfunkaloo13@gmail.com",
      "229"
    );
    expect(engineer).toEqual(result);
  });
});
