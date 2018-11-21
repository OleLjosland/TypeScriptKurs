// KONFIGURASJON OG AVANSERT KOMPILERING

/*
    1. Kjør 'tsc --init'
    2. Se i generert tsconfig.json

    3. Legg til følgende i compilerOptions:
        "noImplicitAny": true,
        "removeComments": true,
        "sourceMap": true,
        "outDir": "dist/"

    4. Legg til ny mappe /src med en TypeScript-fil med noe innhold, feks. main.ts.

    5. Legg til hvilke filer/mapper som skal inkluderes i kompileringen:
        "include": [
            "src/**\/*"
        ],

    6. Legg til mapper som skal ekskluderes:
        "exclude": [
            "node_modules",
            "dist"
        ]

    7. Kjør 'tsc'
    8. Se genererte filer i /dist-mappa

    9. Endre module til 'amd' og legg til følgende i compilerOption:
        "outFile": "./dist/build.js"

    10. Kjør 'tsc' på nytt
    11. Se generert build.js i /dist-mappa

    12. For konfigurering for Gulp, følg tutorial her:
        https://www.typescriptlang.org/docs/handbook/gulp.html

    */