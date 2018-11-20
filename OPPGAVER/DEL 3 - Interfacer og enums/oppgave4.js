// INTERFACES AND ENUMS
// Lag en enum for SimpleResponse så utskriften blir riktig
var SimpleResponse;
(function (SimpleResponse) {
    SimpleResponse[SimpleResponse["No"] = 0] = "No";
    SimpleResponse[SimpleResponse["Yes"] = 1] = "Yes";
    SimpleResponse[SimpleResponse["Unknown"] = 2] = "Unknown";
})(SimpleResponse || (SimpleResponse = {}));

function respond(response) {
    if (response === 0)
        return 'Ja';
    if (response === 1)
        return 'Nei';
    return 'Ukjent';
}

console.log(respond(0 /* No */)); // Skal logge "Ja"
console.log(respond(1 /* Yes */)); // Skal logge "Nei"
console.log(respond(2 /* Unknown */)); // Skal logge "Ukjent"
