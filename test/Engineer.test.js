const Engineer = require("../lib/Engineer");

describe("Employee", () => {
  describe("make sure the Engineer class was created properly", () => {
    it("set github correctly", () => {
      const gitTest = "testUserName";
      const employee = new Engineer("testName", 1, "test@test.com", gitTest);

      expect(employee.github).toEqual(gitTest);
    });

    it("gitGithub() working correctly", () => {
      const gitTest = "testUserName";
      const employee = new Engineer("testName", 1, "test@test.com", gitTest);

      expect(employee.getGithub()).toEqual(gitTest);
    });

    it("getRole() working correctly", () => {
      const gitTest = "testUserName";
      const employee = new Engineer("testName", 1, "test@test.com", gitTest);

      expect(employee.getRole()).toEqual("Engineer");
    });
  });
});
