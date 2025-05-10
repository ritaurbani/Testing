//2. CREO FUNZIONE IN ALTRO FILE
const {dividi, isEven, capitalize, sumArray, countOccurrence, getEmailDomain, findUserById, addUser, removeUser} = require("./test-vari.js")

//TEST 2. GESTIONE DEGLI ERRORI
//Se voglio fare altro test per gestire divisione per 0 e lanciare un errore
test("la funzione 'dividi' deve gestire la divisione per 0 lanciando un errore", () => {
    // const operazione = () => dividi(5,0);
    // expect(operazione)

    //mi aspetto che la funzione dividi per zero mi lanci un errore
    //in questo caso vado a fare refactoring per gestire questo
    //dobbiamo passare una funzione perche solo funzioni lanciano errore (significa quando viene fatto un dividi)
    expect(() => dividi(5,0)).toThrow()
})

//TEST 1.
test('la funzione dividi restituisce il quoziente tra due numeri', () => {
    expect(dividi(10,2)).toBe(5)
})


//TEST 3. Lavorare con numeri pari/dispari - BOOLEAN
test('la funzione "isEven" restituisce true per numeri pari e false per dispari', () => {
    expect(isEven(4)).toBeTruthy()
    expect(isEven(3)).toBeFalsy()
})


//TEST-4.Manipolazione di stringhe - Capitalizzazione
test('la funzione capitalize restituisce la stringa con la prima lettera maiuscola', () => {
    expect(capitalize("boolen")).toBe('Boolean')
    expect(capitalize("JAVASCRIPT")).toBe('Javascript')//devo mettere lo lowercase
})


//TEST-5 Operazioni su array - somma degli elementi
test('la funzione "sumArray" restituisce la somma degli elementi in un array di numeri', () => {
    expect(sumArray([1,2,3,4,5])).toBe(15)
    expect(sumArray([-1,-2,-3,-4,-5])).toBe(-15)//funziona? si funziona
})

//TEST-6 Conta le occorrenze di un carattere in una stringa
test('la funzione "countoccurences" conta quante volte un carattere appare in una stringa', () => {
    expect(countOccurrence('boolean', "o")).toBe(2)
    expect(countOccurrence('javascript', "a")).toBe(2)
    expect(countOccurrence('hello world', "l")).toBe(3)
    expect(countOccurrence('boolean', "x")).toBe(0)
})

//TEST-7 Estrarre dominio da un email
test('return the dominium from an email', () => {
    expect(getEmailDomain('mario.rossi@gmail.com')).toContain('gmail.com')
    expect(getEmailDomain('mario.rossi@yahoo.it')).toContain('yahoo.it')
})


//Se sto manipolando l array users, devo risettare l arrya alla versione originale
// prima dei cambiamenti perche i test devono essere slegati > usiamo beforeEach, afterEach
let users;//non definita

//before each test setto la variabile user non definita a questo...
beforeEach(() => {
 const users = [
        {id:1, name:"Mario Rossi", age:30},
        {id:2, name:"Luigi Verdi", age:25},
        {id:3, name:"Anna Bianchi", age:35},
    ]
})

//quando finisco il test - la svuoto
afterEach(() => {
    users = []
})


//TEST-8 Uso di to Equal per confrontare un oggetto
test('la funzione "findUserById" restituisce l\'oggetto corretto dato un array di utenti e un ID', () => {
//toBe e come operatore ===
 expect(findUserById(users, 2)).toEqual({ id: 2, name: "Luigi Verdi", age: 25 })
})



//TEST-9 Verifica che aggiungere utente aumenti la lunghezza dell array
test('Dopo aver aggiunto un utente con la funzione addUser, l\'array users deve contenere un elemento in piu', () =>{
    addUser(users, { id: 2, name: "Luigi Verdi", age: 25 })
    //vediamo se dato modificato ha qualcosa
    expect(users).toHaveLength(4)
})

//TEST-10 
test('Dopo aver rimosso un utente con la funzione removeUser, l\'array users deve contenere un elemento in meno', () => {
    removeUser(users, 2);
    expect(users).toHaveLength(2)//array originario aveva 3
})


