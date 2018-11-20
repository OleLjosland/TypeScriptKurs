// KONFIGURASJON OG AVANSERT KOMPILERING

/*
    1. Kjør 'tsc --init'
    2. Se i generert tsconfig.json

    3. Legg til følgende i compilerOptions:
        "noImplicitAny": true,
        "removeComments": true,
        "sourceMap": true,
        "outDir": "dist/"

    4. Legg til hvilke filer/mapper som skal inkluderes i kompileringen:
        "include": [
            "src/**\/*"
        ],

    5. Legg til mapper som skal ekskluderes:
        "exclude": [
            "node_modules",
            "dist"
        ]

    6. Kjør 'tsc'
    7. Se genererte filer i /dist-mappa

    8. Endre module til 'amd' og legg til følgende i compilerOption:
        "outFile": "./dist/build.js"

    9. Kjør 'tsc' på nytt
    10. Se generert build.js i /dist-mappa
    
    */