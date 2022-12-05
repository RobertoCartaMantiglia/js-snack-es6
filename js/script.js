// 1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
// 2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
// 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.


const studente = {
    nome : "Gian Gianni",
    cognome : "Morandi",
};

for (let key in studente) {
    console.log(key, studente[key]);
}

const studentessa ={
    nome : "Marilina",
    cognome : "Parmisan",
};

const studenti = [];

studenti.push(studente, studentessa);
console.log(studenti);