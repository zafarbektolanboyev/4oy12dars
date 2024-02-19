//1.Berilgan stiring ichidan olib tashlanishi kerak bo’lgan stringni birinchi uchraganini olib tashlang.
// Example
/*
*   'To be or not to be', 'not'  => 'To be or to be'
*   'I like legends', 'end' => 'I like legs',
*   'ABABAB','BA' => 'ABAB'
*/

//     function removeFirstOccurrences(str, value) {
//         const index = str.indexOf(value);
//         if (index !== -1) {
//             return str.slice(0, index) + str.slice(index + value.length);
//         }
//     }
// console.log(removeFirstOccurrences('To be or not to be', 'not')); 
// console.log(removeFirstOccurrences('I like legends', 'end')); 
// console.log(removeFirstOccurrences('ABABAB', 'BA'));



//2.Birinchi va so’ngi burchali qavslarni olib tashlang.
// example
/*
*   '<div>' => 'div'
*   '<span>' => 'span'
*   '<a>' => 'a'
*/

// function unbracketTag(str) {
//     let startIndex = str.indexOf('<') + 1;
//     let endIndex = str.lastIndexOf('>');
//     return str.slice(startIndex, endIndex);
// }

// console.log(unbracketTag('<div>')); 
// console.log(unbracketTag('<span>')); 
// console.log(unbracketTag('<a>')); 

// 3.Funksiyaga berilgan son tub bo’lsa true, aks holda false qaytarsin:
// Example
/*   
*   4 => false
*   5 => true
*   6 => false
*   7 => true
*   11 => true
*   12 => false
*   16 => false
*   17 => true
*/
// let son = prompt(`soni kirting:`);
// function isPrime() {
//   if (son % 2 == 1) {
//     console.log(false);
//   } else {
//     console.log(true);
//   }
// }
// isPrime()

// 4.Berilgan array ichidagi ma’lumotlardan yangi object yasab qaytaring. Functionga so’ralgan argumentlar kiritish orqali.
// const country = [
//     { country: 'Belarus', city: 'Brest' },
// 	{ country: 'Russia', city: 'Omsk' },
// 	{ country: 'Russia', city: 'Samara' },
// 	{ country: 'Belarus', city: 'Grodno' },
// 	{ country: 'Belarus', city: 'Minsk' },
// 	{ country: 'Poland', city: 'Lodz' }
//   ];
//   function organizeCitiesByCountry(arr) {
//     let result = {};

//     arr.forEach(item => {
//         if (!result[item.country]) {
//             result[item.country] = [];
//         }
//         result[item.country].push(item.city);
//     });

//     return result;
// }

// const data = [	
//     { country: 'Belarus', city: 'Brest' },
//     { country: 'Russia', city: 'Omsk' },
//     { country: 'Russia', city: 'Samara' },
//     { country: 'Belarus', city: 'Grodno' },
//     { country: 'Belarus', city: 'Minsk' },
//     { country: 'Poland', city: 'Lodz' }
// ];

// console.log(organizeCitiesByCountry(data));


// 5. n1 va n2 orasidagi butun sonlar yig‘indisini qaytaring.
/*
  1,2   =>  3  ( = 1+2 )
  5,10  =>  45 ( = 5+6+7+8+9+10 )
  -1,1  =>  0  ( = -1 + 0 + 1 )
*/
// function getSumBetweenNumbers(n1, n2) {
//     let sum = 0;
//     if (n1 > n2){
//         [n1, n2] = [n2, n1];
//     }
//     for(let i = n1; i <= n2; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(getSumBetweenNumbers(1,2));
// console.log(getSumBetweenNumbers(5,10));
// console.log(getSumBetweenNumbers(-1,1));




// 7n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsing.
// const number = [9,9,8,2,5,4,4,6,6];
// const newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (!newNumbers.includes(numbers[i])) {
//     newNumbers.push(numbers[i]);
//   }
// }
// console.log(newNumbers);


// 8.n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0< k < m < n). Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin.
// function deleteElements(arr, k, m) {
//     let n = arr.length;
//     arr.splice(k, m - k + 1);
//     let newLength = arr.length;
//     return [newLength, arr];
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 9, 8, 9];
// let k = 2;
// let m = 5;
// let [newLength, newArr] = deleteElements(arr, k, m);
// console.log("O'chirilgan elementlar soni:", arr.length - newLength);
// console.log("Yangi massiv:", newArr);


// 9.Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.
// const books = [
//       {
//         title: "Halqa",
//         author: "Akrom Malik",
//         alreadyRead: false,
//       },
//       {
//         title: "Dunyo ishlari",
//         author: "O'tkir Hoshimov",
//         alreadyRead: true,
//       },
//       {
//         title: "Vaqtning qadri",
//         author: "Abdulfattoh Abu G'udda",
//         alreadyRead: false,
//       },
//     ];
    
//     function alreadyRead(books) {
//           books.forEach((book) => {
//             if (book.alreadyRead){
//                 console.log(`${book.author}ning ${book.title} kitobi o'qilgan`);
//             }else{
//                 console.log(`${book.author}ning ${book.title} kitobi o'qilmagan`)
//             }
//           });
//     }
//     alreadyRead(books)


// 10.Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.
const products = [
    { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
    { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
    { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
    { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
    { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
  ];
