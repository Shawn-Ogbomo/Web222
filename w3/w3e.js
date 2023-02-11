//question 1
function log(strings) {
    strings.forEach(element => console.log(element));
}

log(["shawn", "smith", "lewis", "steve", "ricky", "jane"]);
console.log("\n");

//question 2
function addItemToHistory(item) {
    let shoppingHistory = [];
    item.forEach(function (element) {
        shoppingHistory.push(element);
    });
    return shoppingHistory.join("\n");
}

console.log(addItemToHistory(["shirt", "shoes", "tennis-ball", "pen", "radio"]));

//question 3
function buildArray(range) {
    let list = [];
    for (let i = arguments[0]; i <= arguments[1]; ++i) {
        list.push(i);
    }
    return list;
}

console.log(buildArray(7, 77));

//question 4
function addDollars(numbers) {
    return numbers.map(function (element) {
        return "$" + element;
    });
}

console.log(addDollars([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));

//question 5
function tidy(strings) {
    return strings.map(function (element) {
        return element.trim();
    });
}

console.log(tidy(["     shawn    ", "smith     ", "   James   ", " Ricky     ", " Lue    ", " Anne    ", " Jane     ", "   Francis   "]));

//question 6
function measure(strings) {
    let count = 0;
    strings.forEach((element) => {
        count += element.length;
    });
    return count;
}

console.log(measure(["shawn", "b", "c", "d", "Toronto", "Vancouver", "C++", "C#"]));

//question7
function whereIsWaldo(strings) {
    return strings.filter(string => string.includes("Waldo") || string.includes("waldo"));
}

console.log(whereIsWaldo(["Shawn Waldo", "Ricky Greem", "Shawn Ogbomo", "James waldo", "John Smith", "Wlado Wlado", "Where is Waldo?"]));

//question 8
function checkAges(ages, limit) {
    return ages.every(age => age >= limit);
}

console.log(checkAges([23, 24, 27, 21, 20, 22, 25, 29], 20));

//question 9
function containsBadWord(restricted_words, username) {
    let found = "";
    restricted_words.forEach(function (badWord) {
        if (username.includes(badWord)) {
            found = badWord;
        }
    });
    return found.length ? found : null;
}

console.log(containsBadWord(["fool", "daft", "senseless"], "daft punk"));

//question 10
