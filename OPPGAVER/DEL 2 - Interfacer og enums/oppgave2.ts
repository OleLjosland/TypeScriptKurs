// INTERFACES AND ENUMS

// Gi variabelen 'test16' verdier som stiller alle krav for InterfaceTest

interface ObjectInterface {
    value1: string;
}

interface InterfaceTest {
    value1: string;
    value2: number;
    value3: () => void;
    value5: ObjectInterface;
    value4?: string;
}

var test16: InterfaceTest = {

}