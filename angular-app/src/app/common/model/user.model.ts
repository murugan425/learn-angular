export class User {

    public name: string;

    public age: string;

    public email: string;

    public dob: string;

    constructor(name: string, age: string, email: string, dob?: string) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.dob = dob;
    }

}