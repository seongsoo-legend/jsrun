// 배열 공부
// let colorList = ["푸른", "하얀", "초록", "노랑", "오렌지"];
// let natureList = ["태양", "달", "구름", "하늘", "무지개"];
// let wordList = ["눈물", "웃음", "환생", "행복", "기쁨"];
// let feelList = ["격렬한", "영원한", "평온한", "안락한"]

// let color = colorList[Math.floor(Math.random() * colorList.length)];
// let nature = natureList[Math.floor(Math.random() * natureList.length)];
// let word = wordList[Math.floor(Math.random() * wordList.length)];
// let feel = feelList[Math.floor(Math.random() * feelList.length)];

// let userName = `${feel} ${color} ${nature}의 ${word}이다!`;

// console.log(userName);

// let dog = {
//   legs: 4,
//   name: "boo",
//   color: "white",
//   bark: "walwal",
// };

// let cat = {
//   legs: 4,
//   name: "baba",
//   color: "gold",
//   bark: "nyaong",
// };

// console.log(dog);
// console.log(cat);

// let bird = {};

// bird["legs"] = 3;
// bird["name"] = "blue",
// bird["color"] = "blue";

// let bird = {};
// bird.legs = 3;
// bird.name = "blue";
// bird.color = "blue";

// let animals = [
//   { kind: "dog", year: 1 },
//   { kind: "cat", year: 2 },
//   { kind: "bird", year: 0},
// ];
//종류만 가져올때
// animals[0]["kind"];
// animals[1]["year"];

// animals[2].kind;

// let seongsoo = { name: "seongsoo", age: 30, luckyNumbers: [2, 5, 10, 28] };
// let jisoo = { name: "jisoo", age: 34, luckyNumbers: [0, 1, 7,12]};
// let boo = { name: "boo", age: 1, luckyNumbers: [3, 6, 8, 9]};

// let family = [seongsoo, jisoo, boo];

// let money = {};
// money["jisoo"] = 30;
// money["boo"] = 1;

// let movie = {
//   "nimo find": {
//     year: 2003,
//     learningTime: 100,
//     actor:["brooks", "dne", "alex"],
//     type: "DVD"
//   },
//   "starWas ep6": {
//     year: 2001,
//     learningTime: 140,
//     actor:["boo", "cene", "kax"],
//     type: "DVD"
//   },
//   "harrypoter": {
//     year: 1996,
//     learningTime: 150,
//     actor:["aio", "edene", "uos"],
//     type: "blue-ray"
//   }  
// }

// let nimo = movie["nimo find"];

// let name = "seongsoo";

// if (name.length > 10) {
//   console.log("너가 성수구나");
// } else {
//   console.log("넌 누구냐");
// }

// let try1 = false;
// let hello = true;
// let script = true;

// if(try1) {
//   console.log("1");
// } else if (hello) {
//   console.log("2");
// } else if (script) {
//   console.log("3");
// } else {
//   console.log("4");
// }

// let name = "어머니";

// if(name === "아버지") {
//   console.log("아버지");
// } else if(name === "어머니") {
//   console.log("어머니");
// } else {
//   console.log("누구셈?");
// }

// var sleep = 0;

// while (sleep < 100) {
//   console.log(`양을 ${sleep}까지 세었다 `);
//   sleep++;
// }

// console.log("ZZzzzz")

// for (var sleep = 0; sleep < 10; sleep++) {
//     console.log(`양을 ${sleep}까지 세었다 `);
// }

// console.log("zzzz")

// var hi = 3;

// for(var i = 0; i < hi; i++) {
//   console.log("hi")
// }

// let animals = ["사자", "홍학", "북극곰", "보아뱀"];
//
// for (let i = 0; i < animals.length; i++) {
//     console.log(`이 동물원에는 ${animals[i]}가 삽니다.`);
// }
//
// let name = 'seongsoo';
//
// for (let i = 0; i < name.length; i++) {
//     console.log(`My name is ${name[i]}.`)
// }

// for (let x = 3; x < 10000; x = 3 * x) {
//     console.log(x);
// }
//
// let x = 3;
//
// while (x < 10000) {
//    x = x * 3
//    console.log(x);
// }

// let animals = ["cats", "dog", "baam", "monkey"];
//
// for (i = 0; i< animals.length; i++) {
//     animals[i] = "Awesome " + animals[i];
// }
//
// console.log(animals);


// let alphabet = "abcdefghijklmnopqrstuvwxyz";
//
// let randomString = "";
//
// let stringLength = 6;
//
// for (var i = 0; i < stringLength; i ++) {
//     randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
// }

// console.log(randomString);

// for (var i = 0; i < stringLength; i++) {
//     randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
// }

// var input = "javascript is awesome";
// var output = " ";
// for (let i = 0; i < input.length; i++) {
//     if (input[i] === "a") {
//         output += "4";
//     } else if (input[i] === "e") {
//         output += "3";
//     } else if (input[i] === "i") {
//         output += "1";
//     } else if (input[i] === "o") {
//         output += "0";
//     } else {
//         output += input[i];
//     }
// }

// for (let i = 0; i < input.length; i ++) {
//     if (input[i] === "a") {
//         output += 4;
//     } else if (input[i] === "e") {
//         output += "4";
//     } else if (input[i] === "i") {
//         output += "1";
//     } else if (input[i] === "o") {
//         output += "0";
//     } else {
//         output += input[i];
//     }
// }
//
// console.log(output);

