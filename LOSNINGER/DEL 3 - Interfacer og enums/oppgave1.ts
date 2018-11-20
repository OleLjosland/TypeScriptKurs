// INTERFACES AND ENUMS

// Erstatt any med en interface

var objekt: any = {
    value1: 'value',
    value2: 20,
    value3: true,
    value4: [1,2,3],
    value5: (parameter: string) => { return parameter.substring(0,1); }
}