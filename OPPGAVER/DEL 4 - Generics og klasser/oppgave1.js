// GENERICS OG KLASSER
function genericFunction(argument) {
    var array = [];
    array.push(argument);
    return array;
}

var arrayFromString = genericFunction("beep");
console.log(arrayFromString[0]); // "beep"
console.log(typeof arrayFromString[0]);

var arrayFromNumber = genericFunction(42);
console.log(arrayFromNumber[0]); // 42
console.log(typeof arrayFromNumber[0]);
