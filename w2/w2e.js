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
function isUnder50(numbers) {
    const max = 50;
    if (numbers === undefined) {
        throw Invalid;
    }
    for (let i = 0; i < arguments.length; ++i) {
        if (typeof arguments[i] !== "number") {
            throw  Invalid;
        }
        if (arguments[i] >= max) {
            return false;
        }
    }
    return true;
}

try {
    console.log(isUnder50(1, 2, 3, 4, 5, 6, 7, 8, 9, 19));
} catch (Invalid) {
    console.log("oops, something went wrong...");
}

//question 6
function sum(numbers) {

    if (!arguments.length) {
        throw Invalid;
    }
    let total = 0;
    for (let i = 0; i < arguments.length; ++i) {
        if (typeof arguments[i] !== "number") {
            throw  Invalid;
        }
        total += arguments[i];
    }
    return total;
}

try {
    console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
} catch (Invalid) {
    console.log("oops, something went wrong...");
}

//question 7
function allExist() {
    if (!arguments.length) {
        throw Invalid;
    }
    for (let i = 0; i < arguments.length; ++i) {
        let exists = arguments[i];
        if (!exists) {
            return false;
        }
    }
    return true;
}

try {
    console.log(allExist(1, "1", 0));
} catch (Invalid) {
    console.log("oops, something went wrong...");
}

//question 8
function generateName(targetString) {
    if (typeof targetString !== "string") {
        throw Invalid;
    }
    if (!arguments.length || arguments.length > 1 || (/\s/).test(targetString)) {
        throw Invalid;
    }
    const invalids = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+',
        '[', ']', '{', '}', '|', ':', ';', '"', ',', '<', '>', '.', '?', '/'
    ];
    targetStringAsArray = targetString.split('');
    for (let i = 0; i < targetStringAsArray.length; ++i) {
        for (let j = 0; j < invalids.length; ++j) {
            if (targetStringAsArray[i] === invalids[j])
                throw Invalid;
        }
    }
    const fileExtension = ".js"
    return targetString + fileExtension;
}

try {
    console.log(generateName(" "));
} catch (Invalid) {
    console.log("oops, something went wrong...");
}

//question 9
function isMultipleOf3(number) {
    return number % 3 === 0;
}

//question10
function checkBetween(number1, number2, number3, option) {
    if (option) {
        return number2 >= number1 && number2 <= number3;
    } else if (!option) {
        return !(number2 >= number1 && number2 <= number3);
    }
}

console.log(checkBetween(100, 150, 200, false));

//question11
function calculateHst(purchaseAmount) {
    const hst = .13;
    return purchaseAmount + (purchaseAmount * hst);
}

console.log(calculateHst(100));

//question 12
function discount(amount, cost) {
    if (!arguments.length) {
        return cost;
    }
    const discountPercentage = amount / 100;
    return cost - (discountPercentage * cost);
}

console.log(discount(30, 500));

//question 13
function daysHoursMins(seconds) {
    if (typeof seconds !== "number") {
        throw Invalid;
    }
    if (!arguments.length) {
        throw Invalid;
    }
    const secInDay = 86400;
    const secInHour = 3600;
    const secInMin = 60;
    let days = 0;
    let result = (seconds / secInDay);
    if (result >= 1) {
        days += result
        seconds -= (secInDay * result);
    }
    result = (seconds / secInHour);
    let hour = 0;
    if (result >= 1) {
        hour += result;
        seconds -= (secInHour * result);
    }
    result = (seconds / secInMin);
    let min = 0;
    if (result >= 1) {
        min += result;
        seconds -= (secInMin * result);
    }
    return days.toString() + " days " + hour.toString() + "hours "
        + min.toString() + " minutes";
}

console.log(daysHoursMins(98465464))