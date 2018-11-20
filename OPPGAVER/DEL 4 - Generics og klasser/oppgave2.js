// GENERICS OG KLASSER

var Klasse = (function () {
    function Klasse(num, textObject) {
        this.num = num;
        this.textObject = textObject;
    }
    Klasse.prototype.getNumberString = function () {
        return this.textObject.text + this.num;
    };
    return Klasse;
})();

var klasseObjekt = new Klasse(20, { text: 'Tallet er: ' });
console.log(klasseObjekt.getNumberString()); // Skal skrive ut "Tallet er: 20"
