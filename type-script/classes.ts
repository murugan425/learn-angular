class Employee {
    name: string;
    experience: number;
    gratitude: number;
    salary: number;

    // implementation of funcation is not possible in interface
    // so we start using classes
    calcGratitude() { return this.experience * this.salary * 0.5; }

    printGratitude() {console.log(this.gratitude); }
}

//let myEmpProfile: Employee = new Employee();
let myEmpProfile = new Employee();
myEmpProfile.name = 'Murugan';
myEmpProfile.experience = 5;
myEmpProfile.salary = 10000;
myEmpProfile.gratitude = myEmpProfile.calcGratitude();
myEmpProfile.printGratitude();



