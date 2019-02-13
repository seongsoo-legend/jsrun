let colorList = ["푸른", "하얀", "초록", "노랑", "오렌지"];
let natureList = ["태양", "달", "구름", "하늘", "무지개"];
let wordList = ["눈물", "웃음", "환생", "행복", "기쁨"];
let feelList = ["격렬한", "영원한", "평온한", "안락한"]

let color = colorList[Math.floor(Math.random() * colorList.length)];
let nature = natureList[Math.floor(Math.random() * natureList.length)];
let word = wordList[Math.floor(Math.random() * wordList.length)];
let feel = feelList[Math.floor(Math.random() * feelList.length)];

let userName = `${feel} ${color} ${nature}의 ${word}이다!`;

console.log(userName);