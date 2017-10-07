var Employee = /** @class */ (function () {
    function Employee() {
    }
    // implementation of funcation is not possible in interface
    // so we start using classes
    Employee.prototype.calcGratitude = function () { return this.experience * this.salary * 0.5; };
    Employee.prototype.printGratitude = function () { console.log(this.gratitude); };
    return Employee;
}());
var myEmpProfile = new Employee();
myEmpProfile.name = 'Murugan';
myEmpProfile.experience = 5;
myEmpProfile.salary = 10000;
myEmpProfile.gratitude = myEmpProfile.calcGratitude();
myEmpProfile.printGratitude();
