// create a interface to define a datatype which can be used to 
// pass parameter input inside a function
interface User {
    fullname: string;
    mobile: number;
}

let printUserDetails = (user: User) => {
    console.log(user.empno);
};

let myprofile = {fullname : 'Murugan Nagarajan', mobile : 13199301234 , empno : 126440};
printUserDetails(myprofile);

