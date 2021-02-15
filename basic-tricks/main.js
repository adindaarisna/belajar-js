// Ternary operator
// Another form of if else statement
// var age = 26;
// var drink = (age > 18) ? "What do you wanna drink?" : "Can i get yor id?";
// console.log(drink);

// Change number to string tricks 
// const dish = 1000 + "";
// console.log(dish + " is a "+ typeof dish);

// Making array with empthy string
// const students = Array(10);
// console.log(students)
// const emphtyStudent = Array(5).fill('');
// console.log(emphtyStudent)

// Filter out only the unique value from an array
// const people = ["John", "Anna", "Lara", "David", "Anna"];
// const uniquePeople = Array.from(new Set(people));
// console.log(uniquePeople)

// Dinamic Objects
// const city = "lives"
// const email = "change.gmail.com"
// const dinamicUsers = { 
//     name:"John",
//     email:"john@gmail.com",
//     [city]:"LA"
// };
// console.log(dinamicUsers)


// Slicing Array
// const train = [1,2,3,4,5,1];
// train.length=4;
// console.log(train);
// console.log(train.slice(-3));

// Array to Object
// const courtJury = ["Jude", "Albert", "Jane"];
// const courtJuryObject = { ...courtJury };
// console.log(courtJuryObject);

// Oject to Array
// const bansos ={
//     nama:"Soleh",
//     pekerjaan:"Petugas Kebersihan",
//     umur:"50"
// }
// const bansosArrayKeys = Object.keys(bansos);
// const bansosArrayValues = Object.values(bansos);
// console.log(bansosArrayKeys);
// console.log(bansosArrayValues);

// Check Code Performance
// let starAt = performance.now();

// // here you will put you code that might take looong time to finish
// for (let i=0; i<2033234; i++){
//     console.log(i);
// }
// let endAt = performance.now();
// console.log('$(endAt - startAt) tool milliscends to execute');

// console.log('%cThis is red', 'color:red');
// console.log("%cThis is blue", "color:blue");
// console.log('this is normal log');
// console.error('this is console error');
// console.warn('this is console warn');

// const food = "kebabs";
// console.log(food);
// console.log(food, "<< The food is here")
// // this will print the variable name and the value
// console.log({food})

// making the order of a function not so strick
// function getLocation(city, country) {
//     return '$(city), $(country)'
// }
// const city = "Jakarta";
// const country = "Indonesia";
// const ress = getLocation(city, country)
// console.log(ress)


// // {} untuk mengatasi urutan variable yang terbalik
// function join({nama, pekerjaan}) {
//   return (nama + " : " + pekerjaan);
// }
// nama="daniel";
// pekerjaan="web dev";
// console.log("Benar>> ", join({pekerjaan, nama}));

// console.log(Math.random())

// // print variable into string
// namaPanjang = 'Rihanna Blake';
// console.log(`Nama dia adalah ${namaPanjang}`);

// const nomer = 10.1 
// console.log(`Hasil floor dari ${nomer}:`, Math.floor(nomer));

// -------------------NEW FEATURES IN ES6

// 1. Javascript let
// const can redeclare in another scope & another block
// const ye=12;
// console.log(ye)
// {
//   const ye=10;
//   console.log(ye)
// }
// {
//   const ye = 100000;
//   console.log(ye);
// }

// var in different scope > locally/inside a function and global
// var now="John";
// {
//   let now="Alex"; //this will not change the value of global 'now' var
//   console.log(now);
// }
// console.log(now) //the value is still 'John'

// 

// 2. Javascript const
// var here = 100;
// {
//   const here = 900;
// }
// console.log(here)

// 3. Arrow Function
// const perkalian = (c,d) => c*d;
// console.log(perkalian(1,10));
// function longName(first, last){
//   return `Hey ${first} ${last}!`;
// }
// console.log(longName("Adinda", "Blake"));
// const superLongName = (one, two, three) => `Hey ${one} ${two} ${three}! How are you?`
// console.log(superLongName('Adinda', 'Blake', 'Lively'));

// Javascript Classes
// class Flower{
//   constructor(namaBunga, harga){
//     this.namaBunga = namaBunga;
//     this.harga = harga;
//   }
// }
// Using Class
// let bunga1 = new Flower("Adenium", 20000)
// console.log(bunga1)

// Promise ?????

// Symbol type

// Default Parameter Values
// const multiByTen = (numb, ten=10) => numb * ten;
// console.log(multiByTen(13)) 

// Function Rest Parameter ???

// Array.find() 
// return the first element that passes a test function
// const lnumb = [1,2,3,4,10,90,-11, -100]
// function firstPos (arr){
//   return arr>0;
// }
// let here = lnumb.find(firstPos)
// console.log(here)

// Array.findIndex()
// const numb = [100,200,300,400]
// function firstPos (arr){
//   return arr>0;
// }
// let indexFind = numb.findIndex(firstPos)
// console.log(indexFind)

// New Number Methods
// let s = 10.9;
// console.log(`Is ${s} an integer? `, Number.isInteger(s))

// New Global Method
// console.log(isFinite(0/0));
// console.log(isFinite(-1 / 0));
// console.log(isFinite(10 / 1));
// console.log(isNaN(0));
// console.log(isNaN('here')); //Nan is Not A Number


// -------------------NEW FEATURES IN ES2020
// 1. BigInt
// console.log(1n+10n)
// console.log(typeof BigInt(1))
// console.log("10n/2n=", 10n / 2n);

// 2. Optional Chaining Operator
// const paket = {
//   pengirim:{
//     nama:'Adinda'
//   },
//   penerima:{
//     nama:'Leo',
//     alamat:'Semarang'
//   }
// }
// let ress= paket.pengirim?.alamat;
// console.log(ress)
// console.log(paket.pengirim.alamat);