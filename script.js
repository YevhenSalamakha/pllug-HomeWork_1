// let text = 'Фріланс'
// console.log;

// let textHi = 'Привіт життя'
// let textAll = `${textHi} я тебя люблю`
// console.log(textAll)

// let One = `Список студентів:
// Андрій
// Назар
// Остап`
// console.log(One)

// let two = 'список студентів: \nАндрій \nНазар \nОстап'
// console.log(two)

// let text1 = 'Привіт!\n\t це тестування\n\t\t тексту'
// console.log(text1)

// let text2 = 'Тестування слешу \\'
// console.log(text2)

const str = 'Test'
const newStr = str.replace('Test', 'tEST')
console.log(newStr);
// 1 спосіб


let string = 'Test'
let upString = string.toUpperCase()
let firstChar = upString[0].toLowerCase()
let resultString = firstChar + upString.slice(1)
// 2 спосіб


console.log(resultString)