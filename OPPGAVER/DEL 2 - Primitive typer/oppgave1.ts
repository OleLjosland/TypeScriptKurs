// PRIMITIVE TYPES

// 1. Gi variablene riktige primitive typer

var test = 'test',
    test2 = 2,
    test3 = 0.5,
    test4 = true,
    test5 = [1,2,3],
    test6 = [1, "2" , true],
    test7 = { value: 'value' },
    test8 = () => { },
    test9 = () => { return 'test'; },
    test10 = (parameter) => { return parameter.substring(0, 1); },
    test11 = undefined,
    test12 = null;

// 2. Fikse feilene, få 'tsc oppgave1.ts' til å kjøre

var test13: string = 2,
    test14: number = 'test',
    test15: (parameter: string) => number = (parameter: string) => { return parameter.toString(); };