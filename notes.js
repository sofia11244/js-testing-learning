const sortByDescendingFriendCount = (users) => {
  return users.slice().sort((a, b) => b.friends.length - a.friends.length);
};

// users.slice().sort((a, b) => b.friends.length - a.friends.length);
// Bu kod, users dizisini azalan arkadaş sayısına göre sıralar. Kodun adım adım nasıl çalıştığını inceleyelim:

// users.slice():

// Bu kısım, users dizisinin bir kopyasını oluşturur. slice() metodu, orijinal diziyi değiştirmeden yeni bir dizi döndürür.
// Bu şekilde, orijinal users dizisi bozulmadan kalır ve sıralama işlemi kopya üzerinde yapılır.
// .sort((a, b) => b.friends.length - a.friends.length):

// sort() metodu, bir diziyi belirli bir sıralama düzenine göre sıralar. Burada, sıralama düzenini belirleyen bir karşılaştırma fonksiyonu kullanılır.
// (a, b) => b.friends.length - a.friends.length karşılaştırma fonksiyonu, her iki elemanın friends dizisinin uzunluğunu karşılaştırır:
// a ve b dizideki iki öğedir.
// b.friends.length - a.friends.length ifadesi, b'nin arkadaş sayısından a'nın arkadaş sayısını çıkarır.
// Eğer b'nin arkadaş sayısı a'nın arkadaş sayısından fazla ise, sonuç pozitif olur ve b önce gelir. Böylece dizi azalan sıraya göre sıralanır.
// Özetle, bu kod, users dizisini arkadaş sayısına göre azalan sırada sıralar ve sıralanmış diziyi döndürür.



// OR

const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.includes(friendName));
};
// Bu fonksiyon şu şekilde çalışır:

// users.filter():

// filter() metodu, orijinal diziyi değiştirmeden belirli bir koşulu sağlayan öğelerle yeni bir dizi oluşturur.
// user her iterasyonda users dizisindeki bir kullanıcı nesnesini temsil eder.
// user.friends.includes(friendName):

// includes() metodu, bir dizinin belirli bir öğeyi içerip içermediğini kontrol eder.
// user.friends kullanıcının arkadaşlarının listesini temsil eder.
// friendName, aradığımız arkadaşın adıdır.
// Eğer bir kullanıcının arkadaş listesi (user.friends), friendName'i içeriyorsa, bu kullanıcı yeni diziye dahil edilir. Aksi takdirde, bu kullanıcı yeni diziye dahil edilmez.


// ------------------------------------------------------------//


// SHORTCUT TO IF{} ELSE{} STATEMENT= TERNARY OPERATOR
// condition ? ifTrue : ifFalse;

let age = 21;
age >= 18 ? "youre an adult" : "youre a minor";

// better than this example:

let ageExamp = 21;

if(ageExamp >= 18) {
  console.log("youre an adult");
  // you can write also "message = "You are an adult";"
} else {
  console.log("youre a minor");
}

// ------------------------------------------------------------//


// SWITCHES efficient way to use/replace to many "else if" statements.
// let day = 1; is monday
let day = 3; // is wednesday

if (day === 1) {
  console.log("monday");
} else if (day === 2) {
  console.log("tuesday");
} else if (day === 3) { 
  console.log("wednesday");
}// etc
else {
  console.log(`${day} is not a day of the week.`);
}

// using swich:

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  default:
    console.log(`${day} is not a day of the week.`);
}


// ------------------------------------------------------------//
// STRING METHODS
let userName = "Bro              ";

userName.charAt(0); // B
userName.charAt(1); // r
userName.charAt(2);  // o
userName.charAt(userName.length - 1); // o

console.log(userName.lastIndexOf("o")); // 2
console.log(userName.length); // 17

userName = userName.trim();
console.log(userName); // Bro
console.log(userName.length); // 3
userName = userName.repeat(4);
console.log(userName); // BroBroBroBro
console.log(userName.length); // 12



// ------------------------------------------------------------//

// LOGICAL OPERATORS

// AND = &&
// OR = ||
// NOT = !

const temp = 20;

if (temp > 0 && temp <= 30) {
  console.log("temp is good");
}
else{
    console.log("temp is bad");
}
  

if (temp <= 0 || temp > 30) {
  console.log("temp is good");
}
else{
    console.log("temp is bad");
}
  
// ------------------------------------------------------------//
// STRICT COMPARISON/EQUALITY OPERATORS
// = assignment
// == comparison (if values are equal)
// === strict comparison (if values and types are equal)
// != not equal (inequeality)
// !== strict inequality
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

const PI = 3.14;

if(PI ="3.14"){
     console.log("That is PI");       // false
}
else {
    console.log("That is not PI");
}

// (PI = 3.14)                           // true
// (PI == 3.14)                          // true
// (PI == "3.14")                        // false
// (PI === "3.14")                       // false
// (PI === 3.14)                         // true
// (PI != 3.14)                          // false
// (PI != "3.14")                        // true

// ------------------------------------------------------------//

// WHILE LOOPS

// let username = Bro;

// while (username === Bro) {
//   console.log("What is your name?");

// }
//   console.log(username);
// until you give break or stop loop its gonna continue.
//  no longer true until you give break or stop loop

let loggedIn = false;
let username;
let password;

while (loggedIn === false) //or set logged in true and you can use !loggedIn instead of loggedIn === false 
{
  username = window.prompt("whats your username?");
  password = window.prompt("whats your password?");

  if (username === "Bro" && password === "password") {
    loggedIn = true;  // this will stop the loop
    console.log("welcome bro"); //youre loggedd  in notification kindof
  }
  else {
    console.log("try again");
  }
}

// do {
//   username = window.prompt("whats your username?");
//   password = window.prompt("whats your password?");

//   if (username === "Bro" && password === "password") {
//     loggedIn = true;  // this will stop the loop
//     console.log("welcome bro");
//   }
//   else {
//     console.log("try again");
//   }
// }while (loggedIn === false)

// ------------------------------------------------------------//
// FOR LOOPS = repeat code limited amoutn of times
for(let i = 0; i <= 2; i++){
  console.log(i);
}

// i++ means increase 1 by 1
// i+=2 means increase 2 by 2

for(let i = 1; i <= 20; i++){
    if(i == 13){
      continue;
      // you can use break to discontinue at 13 (not gonna print 13)
    } 
    else {
        console.log(i);
    }
}



// <---------------------------------------------------------->

// FUNCTIONS


function hello() {
  console.log("hello");
}

hello();
hello();
hello();
hello();
hello();
// 5 hello's will be printed.


function happyBirthday(name, age) {
  console.log(`Happy birthday ${name}! You are ${age} years old!`);
}
happyBirthday("Bro", 25); // Happy birthday Bro! You are 25 years old!




function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}



function isEven(number) {

  if (number % 2 === 0) {
    return true;
  }
  else {
    return false;
  }

  //  OR YOU CAN DO THIS:
  // return number % 2 === 0 ? true : false;
  
}

console.log(isEven(11)); // false
console.log(isEven(10)); // true


function isValidEmail(email) {
  if (email.includes("@")) {
    return true;
  }
    else {
    return false;
  } 

  //  OR YOU CAN DO THIS:
  // return email.includes("@") ? true : false;
}

console.log(isValidEmail("bro@email.com")); // true
console.log(isValidEmail("bro.com")); // false