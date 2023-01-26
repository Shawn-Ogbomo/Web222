//Question 1
class Invalid {
};

function area(r) {
    if (r <= 0) {
        throw Invalid;
    }
    if (isNaN(r)) {
        throw Invalid;
    }
    return (Math.PI * Math.pow(r, 2)).toPrecision(4);
}

try {
    console.log(area(0));
} catch (Invalid) {
    console.log("oops, something went wrong...");
}

//question 2
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function roll(sides) {
    if (sides <= 0 || typeof sides == "string") {
        throw Invalid;
    } else if (!sides) {
        sides = 6;
    }
    if (sides) {
        return getRandomIntInclusive(1, sides);
    }
}

try {
    console.log(roll(53.54));
} catch (Invalid) {
    console.log("oops, something went wrong...");
}

//question 3 / 4
const farenheit = 32;

function celciusToFarenheit(temp, delimiter) {
    let absoluteZero = -7777;
    delimiter = delimiter.toUpperCase();
    const celcius = "C";
    const farenheit = "F";
    if (temp === absoluteZero || typeof temp == "string" || (delimiter !== celcius && delimiter !== farenheit)) {
        throw Invalid;
    }
    if (delimiter === celcius) {
        return ((temp * (9 / 5)) + 32).toPrecision(5);
    } else if (delimiter === farenheit) {
        return (temp - 32) * (5 / 9).toPrecision(5);
    }
}

try {
    console.log(celciusToFarenheit(-22, "c"));
} catch (Invalid) {
    console.log("oops, something went wrong...");
}


//question 5