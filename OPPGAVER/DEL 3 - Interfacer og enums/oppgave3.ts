// INTERFACES AND ENUMS

// 1. Gi variabelen 'test17' og 'test18' verdier som stiller alle krav for InterfaceTest

interface Interface1 {
    value1: string;
}

interface Interface2 extends Interface1 {
    value2: number;
}

var test17: Interface2 = {

}

var test18: Interface2 & Interface1 = {

}
