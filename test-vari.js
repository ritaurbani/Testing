//QUI CREO TUTTE LE FUNZIONI

//1.
// function dividi(x, y) {
//     return x / y
// }

//2.Funzione dopo refactoring del divisore = 0
function dividi(x, y) {
    if(y === 0){
        throw new Error('Impossibilile dividere per 0!')
    }
    return x / y
}

//3.isEven
const isEven = (num) => num % 2 === 0

//4.capitalize
function capitalize(stringa){
    return stringa.charAt(0).toUpperCase() + stringa.slice(1).toLowerCase()
}

//5.sumArray
function sumArray(arr){
    return arr.reduce((acc, num) => acc + num, 0 )
}

//6.countOccurences
function countOccurences(str, char){
    return str.split("").filter((c) => c === char).length
}

//7.getEmailDomain
function getEmailDomain(email){
    return email.split("@")[1]
}

//8 findUserById
function findUserById(users, id) {
    return users.find((u) => u.id === id)
}

//9 addUsers
function addUsers(users, newUser) {
    users.push(newUser)
}

//10 removeUser
function removeUser(users, id){

    const userIndex = users.findIndex(u => u.id === id)
    users.splice(userIndex, 1) //togliere un elemento a quell indice

    // const user = users.find((u) => u.id === id);
    // const userIndex = users.indexOf(user)
    // users.splice(userIndex,1) //togliere un elemento a quell indice
}

module.export = {
    dividi,
    isEven,
    capitalize,
    sumArray,
    countOccurences,
    getEmailDomain,
    findUserById,
    addUsers,
    removeUser
}