// function sayName() {
//     var name='Ed';
//     console.log(name);
// }
// sayName('there')

//you can not redeclare a "let"
// let newvar = 10;
// let newvar =1000;
// console.log(newvar);

// const toDoList = ['Milk', 'Thai Tea', 'Boba'];
// toDoList = ['Pizza'];
// console.log(toDoList);

//"let" making i only available inside the function
// const listMenu = ['Pizza', 'Calzone', 'Calamari', 'Matza Ball soup'];
// for (let i = 0; i < listMenu.length; i++) {
//     console.log(i);
// }
// console.log(i);

// const jeneng = "John Doe";
// console.log(`Hey, my name is ${jeneng}. It's happy to see you.`);

//old version
// function getBook(title, author) {
//     return{
//         title: title,
//         author: author
//     };
// }

// es6 version
// you dont need to specified the variable name if it's same as parameter
// function getBook(title, author) {
//   return {
//     title,author
//   };
// }

// var book = getBook('Harry Potter', 'JK');
// console.log(book);

// ---------------------------------------------------------------
//object deconstruction (old version)
// var user = {
//     name : "Ed",
//     age : "25"
// }
// var userName = user.name;
// console.log(userName);

// object deconstruction (ES6)
// const list = {
//     name:'Shopping List',
//     items: ['Milk', 'Egg', 'Bread']
// };
// const {name, items} = list;
// console.log(name, items);

// ---------------------------------------------------------------
// arrow function (old version)
// function sayName() {
//     console.log(`Hello I'm Jane`);
// }
// var sayAge = function(){
//     console.log(`I'm 25 years old`);
// }
// sayName();
// sayAge();

// arrow function (ES6)
// const sayLocation = (location) => {
//     console.log(`My location is ${location}`);
// }
// sayLocation('Paris');

// ---------------------------------------------------------------
// (old version)
// it is too complicated and waste fo time LOL

// (ES6)
// the key is to use arrow function to be able to use "this.name"
// inside a function within an object
// const user = {
//     name : 'adinda',
//     age: 25,
//     sayName: function () {
//         console.log(`My name is ${this.name}`);
//         const fullName = () => {
//             console.log(`My name is ${this.name} and my age is ${this.age}`);
//         };
//         fullName();
//     }
// };
// user.sayName();

// ---------------------------------------------------------------
// default parameter (old)
// function multiply(x, y) {
//     console.log(x*y);
// }
// multiply(1, 12)
// if user doesn't put input, the result will be NaN
// to solve this bug, use default parameter
// function multiply(x, y) {
//   var a = x || 1;
//   var b = y || 0;
//   console.log(a * b);
// }
// multiply(10, 11);

// default parameter (ES6)
// this is the more simple way typing default parameter
// const add = (c=0, d=0) => {
//     console.log(c + d);
// };
// add();

// ---------------------------------------------------------------
// 