var count = 5;
var naming = 'murugan';
// count = 'alp';
// naming = 1234;
console.log(count);
var n;
var b;
var s;
var a; // if the variable is not initialized their a defaulted as type 'any';
var na;
var aa;
// n = '3jehrehrr';
b = true;
s = 'alphabet/string';
a = 6;
a = 'changed the type as string instead of number at run time';
na = [1, 3, 4];
aa = [1, 'a', false, 'murugan'];
var WHITECOLOR = 1;
var REDCOLOR = 2;
var BLACKCOLOR = 3;
// Declaring and using enums is very simple in typescript but its tough in js file. 
// Please refer the equivalent datatype.js file if required.
var ColorEnumSet1;
(function (ColorEnumSet1) {
    ColorEnumSet1[ColorEnumSet1["White"] = 0] = "White";
    ColorEnumSet1[ColorEnumSet1["Red"] = 1] = "Red";
    ColorEnumSet1[ColorEnumSet1["Black"] = 2] = "Black";
})(ColorEnumSet1 || (ColorEnumSet1 = {}));
var ColorEnumSet2;
(function (ColorEnumSet2) {
    ColorEnumSet2[ColorEnumSet2["White"] = 0] = "White";
    ColorEnumSet2[ColorEnumSet2["Red"] = 1] = "Red";
    ColorEnumSet2[ColorEnumSet2["Black"] = 2] = "Black";
})(ColorEnumSet2 || (ColorEnumSet2 = {}));
// The number/value will be set as 0,1,2.... if the values are not given explicitly
var bgColor = ColorEnumSet1.Red;
