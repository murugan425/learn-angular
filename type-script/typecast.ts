let mynameStr = 'murugan';

let mynameendswithN =  mynameStr.endsWith('N');

console.log(mynameendswithN);
let mynameAny;

mynameAny = 'murugan';

// the typeassist will work only with string type but not with any.
// so we need to typecast the any type to string as shown below.

let mynameAnyendswithN = (mynameAny as string).endsWith('N');

// Another way of typecasting
mynameAnyendswithN = (<string>mynameAny).endsWith('N');

console.log(mynameAnyendswithN);

