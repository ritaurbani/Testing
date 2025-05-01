const somma = require("./somma.js")

//2.
//Dopo test fallisce creo effettivamente la funzione somma nel file somma.js

// function somma(x, y){
//     return x + y;
// }

//1.
//Parto da test che fallisce
//funzione di jest si chiama test() -
// dentro scrivo:
// 1.descrizione di cio che deve avvenire
//2.funzione che eseguira il test - check result
test('la funzione "somma" restituisce la somma di due numeri', () => {
    const result = somma(1, 1)
    //expect(somma(1,1)).toBe(2) //posso fare piu di un test...
    //expect(somma(2,3)).toBe(5)
    //expect(somma(1,6)).toBe(7)
    expect(result).toBe(2)
})