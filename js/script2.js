/**
 * 
   Crea un array composto da 10 automobili.
   Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

   Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
   Infine stampa separatamente i 3 array.
 */


   const automobili = [
        {
            marca : "alfa romeo",
            modello: "159",
            alimentazione: "diesel",
        },
        {
            marca : "lamborghini",
            modello: "hurus",
            alimentazione: "benzina",
        },
        {
            marca : "renault",
            modello: "twingo",
            alimentazione: "gpl",
        },
        {
            marca : "peugeot",
            modello: "107",
            alimentazione: "benzina",
        },
        {
            marca : "dodge",
            modello: "ram",
            alimentazione: "diesel",
        },
        {
            marca : "toyota",
            modello: "yaris",
            alimentazione: "hybrid",
        },
        {
            marca : "lancia",
            modello: "ypsilon",
            alimentazione: "hybrid",
        },
        {
            marca : "nissan",
            modello: "xtrail",
            alimentazione: "diesel",
        },
        {
            marca : "volvo",
            modello: "c30",
            alimentazione: "diesel",
        },
        {
            marca : "audi",
            modello: "q5",
            alimentazione: "diesel",
        },
   ];

   const benzina = [];
   const diesel = [];
   const other = [];


   for (let i=0; i < automobili.length; i++){
        // for(let alimentazione in automobili){
        //     benzina.push(automobili.alimentazione[benzina]);
        // }
        // console.log(benzina[i]);    SBAGLIATO
        const auto = automobili [i];
        if (auto.alimentazione === "benzina"){
            benzina.push(auto);
        } else if (auto.alimentazione === "diesel") {
            diesel.push(auto);
        } else {
            other.push(auto);
        }
   }
   console.log(benzina, diesel, other);
  
   