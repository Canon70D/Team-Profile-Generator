const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("make sure the Emplyoee class was created properly", () => {
    it("create employee object", () => {
      const employee = new Employee();

      expect(typeof employee).toEqual("object");
    });

    it("set name correctly", () => {
      const testName = "testName";
      const employee = new Employee(testName);

      expect(employee.name).toEqual(testName);
    });

    it("set ID correctly", () => {
      const testID = 1;
      const employee = new Employee("testName", 1);

      expect(employee.id).toEqual(testID);
    });

    it("set email correctly", () => {
      const testEmail = "test@test.com";
      const employee = new Employee("testName", 1, testEmail);

      expect(employee.email).toEqual(testEmail);
    });

    it("getName() working correctly", () => {
      const testName = "NameForTest";
      const employee = new Employee(testName);

      expect(employee.getName()).toEqual(testName);
    });

    it("getId() working correctly", () => {
      const testID = 1;
      const employee = new Employee("testName", 1);

      expect(employee.getId()).toEqual(testID);
    });

    it("getEmail() working correctly", () => {
      const testEmail = "test@test.com";
      const employee = new Employee("testName", 1, testEmail);

      expect(employee.getEmail()).toEqual(testEmail);
    });

    it("getRole() working correctly", () => {
      const employee = new Employee("testName", 1, "test@test.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
