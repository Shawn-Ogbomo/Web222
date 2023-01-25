//question 1
let label = "senecacollege";
let tld = "ca";
let domainName = label + "." + tld;
console.log( domainName);


//question 2
let isSeneca = (domainName === "senecacollege.ca");
console.log(isSeneca);

//question 3
let isNotSeneca = (!isSeneca);
console.log(isNotSeneca);

//question 4
let byte1 = 11;
let byte2 = 4;
let byte3 = 230;
let byte4 = 100;

//question 5
console.log(byte1.toString(16));
//- If the specified radix is 2, the result will be displayed in binary
// -if the specified radix is 16 the result will be displayed in hex

//question 6
let ipAddress = byte1.toString() + "." + byte2.toString() + "." + byte3.toString() + "." + byte4.toString();
console.log(ipAddress);

//question 7
let ipInt