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
