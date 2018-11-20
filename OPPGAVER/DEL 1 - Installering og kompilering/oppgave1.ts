// INSTALLERING OG KOMPILERING

/* 
    1. Kjør 'npm install'
    2. Gå til denne mappen og kjør følgende: 
        - tsc oppgave1.ts
    3. Se resultatet i oppgave1.js
*/

function greeter(person: string): string {
    return "Hello, " + person;
}

var user: string = "Ola Nordmann";

console.log(greeter(user));