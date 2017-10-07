export class UserDetail {
    private username: string;
    private age: number;

    // Normal way of implementing  getters and setters
    getName = () => {return this.username};
    
    setName = (nameparam: string) => { 
        if(nameparam.length < 0) {
            throw new Error('UserName cannot be blank.');
        }
        this.username = nameparam;
    }
    
    constructor(private x?: string) {this.username = x};   

    // Using getters and setters directly in a different way is called Properties in Typescript
    get AGE() {
        return this.age;
    };

    set AGE(x) {
        if(this.age < 0) {
            throw new Error('Age cannot be negative value.');
        }
        this.age = x;
    }

    printUserName() {console.log(this.getName()); }

    printUserAge() {console.log(this.getName() + ' age is '+ this.AGE)}
}