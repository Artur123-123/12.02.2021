const isDog = true;
let imie = "Ala ma kota"

imie = "Ala ma psa"
const liczba = 46
console.log(liczba)
console.log("imie", imie)

let isLux = false;
isLux = true
console.log(isLux)

let isJaroInRoom = true;
isJaroInRoom = false;
console.log(isJaroInRoom)

const number1 = 1
const number2 = 2
const number3 = 3
const wynik = number1 + number2 + number3
console.log(wynik)

const imie1 = "Jan"
const nazwisko = "ź"
const wynik1 = imie1.toLowerCase() + ' ' + nazwisko.toLowerCase()
console.log(wynik1)

const tablica = [12, "Roman", wynik1]
console.log(tablica[1])

const tablicaImiona = ["Artur", "Marzena", "Marta", "Magdalena", "Martyna", "Mordora", "Alicja", "Oskar", "Radosław", "Robert", "Karolina", "Aleksander", "Aleksandra", "Elżbieta", "Łukasz", "Amelia", "Maria", "Antoni", "Dawid", "Sewerus", "Tomasz", "Jeży", "Kacper", "Daniel", "Róża", "Hanna"]
console.log("Imię numer 1", tablicaImiona[0])
console.log("Imię numer 2", tablicaImiona[1])
console.log("Imię numer 3", tablicaImiona[2])
console.log("Imię numer 4", tablicaImiona[3])
console.log("Imię numer 5", tablicaImiona[4])
console.log("Imię numer 6", tablicaImiona[5])
console.log("Imię numer 7", tablicaImiona[6])
console.log("Imię numer 8", tablicaImiona[7])
console.log("Imię numer 9", tablicaImiona[8])
console.log("Imię numer 10", tablicaImiona[9])
console.log("Imię numer 11", tablicaImiona[10])
console.log("Imię numer 12", tablicaImiona[11])
console.log("Imię numer 13", tablicaImiona[12])
console.log("Imię numer 14", tablicaImiona[13])
console.log("Imię numer 15", tablicaImiona[14])
console.log("Imię numer 16", tablicaImiona[15])
console.log("Imię numer 17", tablicaImiona[16])
console.log("Imię numer 18", tablicaImiona[17])
console.log("Imię numer 19", tablicaImiona[18])
console.log("Imię numer 20", tablicaImiona[19])
console.log("Imię numer 21", tablicaImiona[20])
console.log("Imię numer 22", tablicaImiona[21])
console.log("Imię numer 23", tablicaImiona[22])
console.log("Imię numer 24", tablicaImiona[23])
console.log("Imię numer 25", tablicaImiona[24])
console.log("Imię numer 26", tablicaImiona[25])

tablicaImiona.forEach(item => {
    console.log("stare", item)
    console.log("nowe", "Henryk")
})

const noweImiona = tablicaImiona.map(item => item = "Henryk")
console.log(noweImiona)

const oskar = tablicaImiona.find(item => {
    if (item === "Oskar") {
        return item
    }
})
console.log(oskar)

const tablicaLiczb = new Array(1, 43, 45, 53, 52, 76)
console.log(tablicaLiczb)
const BiggerThanOne =
    tablicaLiczb.some(item => item > 1)
console.log(BiggerThanOne)

const tablicaLiczbDruga = new Array(100, 200, 300, 400)
console.log(tablicaLiczbDruga)
const BiggerThanOneHundred =
    tablicaLiczbDruga.every(item => item > 100)
console.log(BiggerThanOneHundred)

tablicaLiczb.push(666)
console.log(tablicaLiczb)

const numbersTillHundred = new Array()

for (let i = 1; i < 101; i++) {
    numbersTillHundred.push("Jan" + i)
}

console.log(numbersTillHundred)

const liczbyParzyste = new Array()
for (let i = 1; i < 201; i++) {
    liczbyParzyste.push(i * 2)
}

console.log(liczbyParzyste)

// const numberEightyEight = liczbyParzyste.find(item => {
//     if (item =="88") {
//         return item
//     }
// })

// console.log(numberEightyEight)

// let indexLiczby88
// liczbyParzyste.forEach((item, index) => }
// if (item===88) {
//     indexLiczby88 = index
// }
// )

const liczbyNieparzyste = new Array()
for (let i = 1; i < 1001; i++) {
    liczbyNieparzyste.push(i * 3)
}

console.log(liczbyNieparzyste)