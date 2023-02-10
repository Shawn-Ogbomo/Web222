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
