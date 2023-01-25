//question 1
let label = "senecacollege";
let tld = "ca";
let domainName = label + "." + tld;
console.log(domainName);


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
let ipInt = ((byte1 + byte2 + byte3 + byte4).toString(2));


//let result =  parseInt(ipInt,2);
//console.log(result);


//question 8


//question 9
const imATeapot = 418;
let statusCode = imATeapot;
console.log(statusCode);

//question 10
const fourxxMin = 400;
const fourxxMax = 451;
if (statusCode >= fourxxMin && statusCode <= fourxxMax) {
    console.log("Status code: " + statusCode + " is a 4xx client error...");
}

//question 11
const cont = 100;
const switchingProtocols = 101;
const processing = 102;
const earlyHints = 103;
switch (statusCode) {
    case cont:
        console.log(statusCode + " continue");
        break;
    case switchingProtocols:
        console.log(statusCode + " switching protocols");
        break;
    case processing:
        console.log(statusCode + " processing");
        break;
    case earlyHints:
        console.log(statusCode + " early hints");
        break;
    default:
        console.log("Status code: " + statusCode + " is unknown...");
}

//question 12
function is2xx(status) {
    const twoxxstatusMin = 200;
    const twoxxstatusMax = 226;
    return status >= twoxxstatusMin && status <= twoxxstatusMax;
}

console.log(is2xx(statusCode));
