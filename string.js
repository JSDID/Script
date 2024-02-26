var abc = "imnoaspdsdjaisdnjijnsda";

var esx = "I don\t \n know"; // \n new line

var len = abc.length; // string length

var str = "- string";

var num = 126;

var trm1 = " tranlate - 1 ";
var trm2 = " tranlate - 2 ";

console.log(abc.indexOf("imno")); // find substring
console.log(abc.lastIndexOf("imno")); // last substring
console.log(abc.slice(3, 6)); // euto out "def"
console.log(abc.replace("imno", "123")); // find and replace
console.log(abc.toLocaleUpperCase()); // convert to upper case
console.log(abc.toLocaleLowerCase()); // convert to loewer case
console.log(abc.concat(" ", str)); // abc + " " + str2
console.log(abc.charAt(2)); // character at index: "n" 
console.log(abc[2]); // unsafem abc[2] = "n"
console.log(abc.charCodeAt(2)); // character code at index: "c"
console.log(abc.split(',')); // spliting a string  
console.log(num.toString()); // transform number to string
console.log(trm1);
console.log(trm2.trimStart()); // Trim string