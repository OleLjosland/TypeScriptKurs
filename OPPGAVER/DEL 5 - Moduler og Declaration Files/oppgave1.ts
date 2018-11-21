// MODULER OG DECLARATION FILES

/*
    1. Lag en module (ny .ts-fil) som eksporterer slik at den kan kalles som en funksjon (default exportering).
    2. Importer modulen
    3. Kjør tsc (med module parameter) og se at det fungerer
*/

siHei(); // Skal skrive ut "Hei!"

/*
    4. Lag modulen TestModul (ny .ts-fil) som eksporterer funksjonen siHadet så det skrives ut riktig.
    5. Importer modulen
    6. Kjør tsc (med module parameter) og se at det fungerer
*/

TestModul.siHadet(); // Skal skrive ut "Hadet!"

