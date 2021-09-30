// Створити пустий об’єкт;
let obj = {}

// Створити пустий об’єкт без прототипу;
let emptyObj = Object.create(null);

// Додати до об’єкта будь які нові поля всіма відомими способами;
obj.name = "Yevhenii"; // 1 спосіб


obj['age'] = 19; // 2 спосіб додавання


const key = 'zip';
obj[key] = 'zip';
console.log(obj); // 3 спосіб

// Створити пустий масив;
let arr = [];

// Створити пустий масив довжиною 100500 елементів
let whatever = Array(100500).fill('');
console.log(whatever);

// Створення масиву з декількома елементами
let arrOne = [
	'Ігор',
	'Євгеній',
	'Олег',
];
// або
let arrTwo = ['Ігор', 'Євгеній', 'Олег'];

// Очищаємо масив
arrOne.splice(0, arrOne.length)
console.log(arrOne);

// завдання з масивом 1,2,3,4,5
let masiv = [1, 2, 3, 4, 5];
function removeItem(pos) {
	masiv.splice(pos, 1);
	console.log(masiv);
	return masiv;
}
removeItem(1);

function getMasiv(masiv) {

}
