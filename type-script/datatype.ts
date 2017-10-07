var count = 5;
let naming = 'murugan';

// count = 'alp';
// naming = 1234;

console.log(count);

let n: number;
let b: boolean;
let s: string;
let a: any; // if the variable is not initialized their a defaulted as type 'any';
let na: number[];
let aa: any[];

// n = '3jehrehrr';
b = true;
s = 'alphabet/string';
a = 6;
a = 'changed the type as string instead of number at run time';
na = [1, 3, 4];
aa = [1, 'a', false, 'murugan'];

const WHITECOLOR = 1;
const REDCOLOR = 2;
const BLACKCOLOR = 3;

// Declaring and using enums is very simple in typescript but its tough in js file. 
// Please refer the equivalent datatype.js file if required.
enum ColorEnumSet1 {White= 0, Red= 1, Black= 2}

enum ColorEnumSet2 {White, Red, Black}
// The number/value will be set as 0,1,2.... if the values are not given explicitly

let bgColor = ColorEnumSet1.Red;



