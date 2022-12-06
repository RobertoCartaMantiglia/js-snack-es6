/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */

const persone = [
    {
        nome: "Tonino",
        cognome: "Carramone",
        age: 22,
    },
    {
        nome: "Marco",
        cognome: "Pillittu",
        age: 28,
    },
    {
        nome: "Gaetano",
        cognome: "Migliore",
        age: 72,
    },
    {
        nome: "Mirko",
        cognome: "Coacella",
        age: 38,
    },
    {
        nome: "Giangiusto",
        cognome: "Calabresi",
        age: 80,
    },
    {
        nome: "Gian Gianni",
        cognome: "Mariottide",
        age: 55,
    },
    {
        nome: "Mario",
        cognome: "Mariani",
        age: 72,
    },
    {
        nome: "Cristoforo",
        cognome: "Colombo",
        age: 90,
    },
    {
        nome: "Marcello",
        cognome: "Marcellini",
        age: 43,
    },
    {
        nome: "Romolo",
        cognome: "Mastropasqualini",
        age: 85,
    },
];

const statusPeople = persone.map((persona) =>{
    return ` ${persona.nome} ${persona.cognome}`;
})
console.log(statusPeople);