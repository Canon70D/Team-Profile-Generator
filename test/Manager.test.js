const Manager = require("../lib/Manager");

describe("Employee", () => {
  describe("make sure the Manager class was created properly", () => {
    it("set officeNumber correctly", () => {
      const numTest = 404;
      const employee = new Manager("testName", 1, "test@test.com", numTest);

      expect(employee.officeNumber).toEqual(numTest);
    });

    it("getRole() working correctly", () => {
      const numTest = 404;
      const employee = new Manager("testName", 1, "test@test.com", numTest);

      expect(employee.getRole()).toEqual("Manager");
    });
  });
});
