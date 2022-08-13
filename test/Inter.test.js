const Intern = require("../lib/Intern");

describe("Employee", () => {
  describe("make sure the Intern class was created properly", () => {
    it("set school correctly", () => {
      const schoolTest = "testSchool";
      const employee = new Intern("testName", 1, "test@test.com", schoolTest);

      expect(employee.school).toEqual(schoolTest);
    });

    it("gitSchool() working correctly", () => {
      const schoolTest = "testSchool";
      const employee = new Intern("testName", 1, "test@test.com", schoolTest);

      expect(employee.getSchool()).toEqual(schoolTest);
    });

    it("getRole() working correctly", () => {
      const schoolTest = "testSchool";
      const employee = new Intern("testName", 1, "test@test.com", schoolTest);

      expect(employee.getRole()).toEqual("Intern");
    });
  });
});
