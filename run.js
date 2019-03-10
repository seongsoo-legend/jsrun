// var headingElement = document.getElementById("main-heading");
// console.log(headingElement.innerHTML);
// var newHeadingText = prompt("새로운 제목을 입력해주세요.");
// headingElement.innerHTML = newHeadingText;
// $('h1').css({'color':'red'});
// $(function () {
//
//     $('h1').css('color', 'red'); // css 속성 하나를 변경;
//     // h1, .typo:hover {background-color:green;}
//     // 이벤트가 일어난 그것
//     $('.typo, h1').mouseover(function () {
//         //.클래스 typo의 배경색을 green으로 변경
//         $(this).css('background-color', 'green');
//     })
//     .mouseout(function () {
//         $(this).css('background-color', 'white');
//     });
// });
//

// var timeUp = function () {
//     alert("시간 끝!");
// }
//
// setTimeout(timeUp, 3000)
//
// var doHomeworkAlarm = function () {
//     alert("숙제할 시간입니다!");
// };
//
// var timeoutId = setTimeout(doHomeworkAlarm, 60000);
//
// clearTimeout(timeoutId);
//
//
// var counter = 1;
//
// var printMessage = function () {
//     console.log("기록을 시작한 지 " + counter + "초 지났습니다.");
//     counter++;
// };
//
//
// var intervalId = setInterval(printMessage, 5000);

// var leftOfttset = 0;
//
// var moveHeading = function () {
//     $("#heading").offset({ left: leftOfttset });
//
//     leftOfttset++;
//
//     if (leftOfttset > 200) {
//         leftOfttset = 0;
//     }
// };
//
// setInterval(moveHeading, 30);
//
//
// var clickHandler = function (event) {
//     console.log("Click! " + event.pageX + " " + event.pageY);
// };
//
// $("h1").click(clickHandler);

// $("html").click(function (event) {
//     $("#heading").offset({
//         left: event.pageX,
//         top: event.pageY
//     });
// });

// var direction = "right";
// var offset = 0;
// var intervalLength = 120;
// var clicks = 0;
//
// $("#heading").offset({ left: offset, top: offset });
//
// var moveHeading = function () {
//     if (direction === "right") {
//         $("#heading").offset({ left: offset });
//         offset++;
//         if (offset > 200) {
//             offset = 0;
//             direction = "down";
//         }
//     } else if (direction === "down") {
//         $("#heading").offset({ top: offset });
//         offset++;
//         if (offset > 200) {
//             offset = 200;
//             direction = "left";
//         }
//     } else if (direction === "left") {
//         $("#heading").offset({ left: offset });
//         offset--;
//         if (offset < 0) {
//             offset = 200;
//             direction = "up";
//         }
//     } else if (direction === "up") {
//         $("#heading").offset({ top: offset });
//         offset--;
//         if (offset < 0) {
//             offset = 0;
//             direction = "right";
//         }
//     }
// };
//
// var intervalId = setInterval(moveHeading, intervalLength);
//
// $("#heading").click(function () {
//     clearInterval(intervalId);
//     intervalLength /= 2;
//     clicks++;
//
//     if (clicks > 10) {
//         $("#heading").text("You Win.");
//     } else {
//         intervalId = setInterval(moveHeading, intervalLength)
//
//     }
// });

// var dog = {
//     name: "봉구",
//     legs: 4,
//     isAwesome: true
// };
//
// dog.name;
//
// var speak = function () {
//     console.log(this.sound + "! 내 이름은 " + this.name + "닷!");
// }
//
// var cat = {
//     sound: "야옹",
//     name: "옹디",
//     speak: speak
// }
//
// var pig = {
//     sound: "꿀꿀",
//     name: "팔계",
//     speak: speak
// }
//
// var hourse = {
//     sound: "히힝",
//     name: "프린스",
//     speak: speak
// }

// var Car = function (x, y) {
//     this.x = x;
//     this.y = y;
// };
//
// Car.prototype.draw = function () {
//     var carHtml = '<img src="http://nostarch.com/images/car.png">';
//
//     this.carElement = $(carHtml);
//
//     this.carElement.css({
//         position: "absolute",
//         left: this.x,
//         top: this.y
//     });
//
//     $("body").append(this.carElement);
// }
//
// Car.prototype.moveRight = function () {
//     this.x += 5;
//
//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     })
// }
//
// Car.prototype.moveLeft = function () {
//     this.x -= 5;
//
//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     })
// }
//
// Car.prototype.moveUp = function () {
//     this.y -= 5;
//
//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     })
// }
//
// Car.prototype.moveDown = function () {
//     this.y += 5;
//
//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     })
// }
//
//
// var tesla = new Car(20, 20);
// var nissan = new Car(100, 200);
//
// tesla.draw();
// nissan.draw();

// var mag;
//
// msg  = "Hello world";
// alert(msg);

// var name = prompt("이름을 말해라");
// console.log(name, "님 환영합니다.");

// var a = 100, b = 3.14;
// var c = "안녕하세요.", d = "a";
// var e = true, f = false;

// var a = 100, b = 3.14;
// var c = "안녕", d = "a";
// var e = true, f = false;
//
// console.log(a, typeof(a));
// console.log(c, typeof(c));
// console.log(e, typeof(e));

// var n = 1;
// console.log(typeof(n));
//
// var b = true;
// console.log(typeof(b));
//
// var s = "문자열";
// console.log(typeof(s));
//
// var height = prompt("키를 입력해 주세요.");
// console.log(height, typeof(height));
//
// // typeof(1);
// // typeof("1");
//
// var height_int = parseInt(height);
//
// console.log(height_int, typeof(height_int));
//
// var height_float = parseFloat(height);
//
// console.log(height_float, typeof(height_float));

// var str = "3.141592 는 Pi의 근사값입니다.";
//
// var pi_int = parseInt(str);
//
// var pi_float = parseFloat(str);

// var a = "큰 따옴표 문자열에는 작은 \'따옴표\'를 사용할 수 있습니다.";
// var b = '작은따옴표를 쓰고 싶다면 \"이렇게\" 사용하면 됩니다.';
// var g = "\\\\ 두번쓰면 됩니다."

// console.log("큰따옴표 \"를 문자열 안에 쓸 수 있습니다.")
//
// console.log("문자열입니다. \n줄 바꿈")

// var empty_obj = {};
//
// typeof(empty_obj);

// var man = {name: "홍길동", age: 20, height: 180};

// var a = 1, b = 2, c = 3, d =4;

// var str = "Hello";

// str.length;

// var str2 = "World";

// var str3 = str.concat(str2);

// var str = "abcdeaabcde";

// str.charAt(0);

// str.length;

// str.charAt(9);
//
// var mixed_arr = [1, true, 3.14, "string", {name: "object"}, [1, 2, 3]];
//
// // function firstElement(arr) {
// //     return arr[0];
// // }
//
// // var arr = [1,2 ,3]
//
// mixed_arr.reverse();

// var arr = [1, 2, 3];
//
// arr.push("end");
// arr.unshift("begin");

// var a = 1;
//
// var b = 2;
//
// var c = a + b;
//
// if (Boolean type 조건) {
//     조건이 참일 때만
//     코드 실행
// }

// if (false) {
//     console.log("1");
// } else if (true) {
//     console.log("2");
// } else if (true) {
//     console.log("3");
// } else {
//     console.log("4");
// }

// var age = 25;
//
// if (age < 20) {
//     console.log("20세 미만입니다.");
// } else {
//     console.log("20세 이상입니다.");
// }

// function is20s(age) {
//     if (20 <= age && age < 30) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
//
// is20s(age);

// function isLeapYear(year) {
// //     return (year % 4 == 0);
// // }
//
// console.log("Menu");
//
// console.log("1. 아이스아메리카노");
// console.log("2. 카페라떼");
// console.log("3. 카푸치노");
// console.log("4. 홍차");
//
// var choice = parseInt(prompt("메뉴를 선택해 주세요."));
//
// console.log(choice + "번 메뉴를 선택하셨습니다.");
//
// switch (choice) {
//     case 1:
//         console.log("아아는 1500");
//         break;
//     case 2:
//         console.log("카페라떼는 1500");
//         break;
//     case 3:
//         console.log("카푸치노는 1500");
//         break;
//     case 4:
//         console.log("홍차는 1500");
//         break;
//     default:
//         console.log("죄송해요 그런 메뉴 없습니다.")
//         break;
// }

// function daysInMonth(month) {
//     switch (month) {
//         case 2:
//             return 28;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             return 30;
//         default:
//             return 31;
//     }
// }

// console.log("Menu");
//
// console.log("1. 아이스아메리카노");
// console.log("2. 카페라떼");
// console.log("3. 카푸치노");
// console.log("4. 홍차");
//
// console.log(choice + "번 메뉴를 선택하셨습니다.");
//
//
//
// var count = 0;
//
// while (count < 3) {
//     var choice = parseInt(prompt("메뉴를 선택해 주세요."));
//
//     switch (choice) {
//         case 1:
//             console.log("아아는 1500");
//             break;
//         case 2:
//             console.log("카페라떼는 1500");
//             break;
//         case 3:
//             console.log("카푸치노는 1500");
//             break;
//         case 4:
//             console.log("홍차는 1500");
//             break;
//         default:
//             console.log("죄송해요 그런 메뉴 없습니다.")
//             break;
//     }
//     count++;
// }
//
// var count = 0;
//
// while (true) {
//     var ans = null;
//     ans = parseInt(prompt("1+1=?"));
//     if (ans != 2) {
//         console.log((++count) + "번 틀렸습니다. 다시 도전하세요.");
//         continue;
//     }
//     ans = parseInt(prompt("7-3=?"));
//
//     if (ans != 4) {
//         console.log((++count) + "번 틀렸습니다. 다시 도전하세요.");
//         continue;
//     }
//     ans = parseInt(prompt("9*7=?"));
//     if (ans != 63) {
//         console.log((++count) + "번 틀렸스습니다. 다시 도전하세요.")
//         continue;
//     }
//     break;
// }
//
// console.log("참 잘했어요!")


// var a = Math.ceil(Math.random()*10);
// var b = Math.ceil(Math.random()*10);
//
// var solution = a * b;
//
// var ans;
//
// ans = parseInt(prompt(a+"*"+b+"=?"));
//
// if (ans == solution) {
//     console.log("맞았습니다.");
// } else {
//     console.log("틀렸습니다.");
// }

// var count = 0;
// while (count < 10) {
//     console.log(count);
//     count++;
// }

// function sumFrom1ToN(n) {
//     var count = 1;
//     var sum = 0;
//     while (count <= n) {
//         sum = sum + count;
//         count++;
//     }
//     return sum;
// }
//
//
// function pinonachi(n) {
//     var count = 1;
//     var sum = 0;
//     while (count <= n) {
//         sum = sum + count;
//         count++;
//     }
//     return sum;
// }

// var cond = false;
//
// while (cond) {
//     console.log("이 구문은 실행되지 않습니다.");
// }
//
// do {
//     console.log("한번은 실행됨.");
// } while (cond);

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// var i = 0;
//
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }
//
// for (var i = 0; i < arr.length; i++) {
//     console.log(array[i]);
// }

// for (var i = 2; i <= 9; i++) {
//     for (var j = 1; j <= 9; j++) {
//         console.log(i + "*" + j + "=" + i * j);
//     }
// }
//
// var cost = [85, 42, 37, 10, 22, 8, 15];
//
// var total_cost = 0;
//
// for (var i = 0; i < cost.length; i++) {
//     total_cost = total_cost + cost[i];
// }

// var obj = {
//     속성1: 1,
//     속성2: 2,
//     속성3: 3
// }
//
// var obj = {
//     name: "object",
//     weight: 30,
//     isObject: true,
//     arr: [1, 2, 3],
//     obj: {property:1}
// };
//
// // var property_list = Object.keys(obj);
//
// // for (var i = 0; i < property_list.length; i++) {
// //     var propertyName = property_list[i];
// //     console.log("\t", propertyName, ": ", obj[propertyName]);
// // }
//
// for (var propertyName in obj) {
//     console.log( propertyName, ":", obj[propertyName]);
// }
// var obj = {
//     name: "object",
//     age: 10,
//     weight: 5
// }
//
// var sum = 0;
//
// for (var property in obj) {
//     if (typeof obj[property] == "number") {
//         sum = sum + obj[property];
//     }
// }
// console.log(sum);

// function a() {
//     var v_a = "a";
//
//     function b() {
//         var v_b = "b";
//         console.log("b :", typeof(v), typeof(v_a), typeof (v_b));
//     }
//
//     b();
//
//     console.log("a :", typeof(v), typeof(v_a), typeof (v_b));
// }
//
// var v = "v";
//
// a();
//
// console.log("o :", typeof(v), typeof(v_a), typeof (v_b));
//
// function test() {
//     for (let i = 0; i < 3; i++) {
//         console.log("typeof(i) inside the block:", typeof(i));
//     }
//     console.log("typeof(i) outside the block:", typeof (i));
// }
//
// test();
//
// console.log("typeof(i) outside the function:", typeof(i));
//
// function shadowing_example() {
//     var val = 0;
//     console.log("F", val);
//     val++;
// }
//
// var val = 0;
// shadowing_example();
// console.log("0", val);
//
// function f() {
//     console.log(this);
//     console.log("f is called");
// }
//
// function setName(name) {
//     this.name = name; // this의 이름을 name로 변경
// }
//
// //객체 o를 만들고 setName 속성에 방금 정의한 함수를 지정
// var o = {name: "object", method: f, setName:setName};
//
// //비슷한 객체 o2 만들고 name 속서으이 값은 비워둠
//
// var o2 = {name: " ", setName:setName};
//
// o.setName("object1");
// o2.setName("object2");
//
// console.log(o, o2);
//
//
//
// function makeCounterFunction(initVal) {
//     var count = initVal;
//     function Increase() {
//         count++;
//         console.log(count);
//     }
//     return Increase;
// }
//
// var counter1 = makeCounterFunction(0);
// var counter2 = makeCounterFunction(10);
//
// counter1();
// counter2();

// var newContent = prompt("자바스크립트");
// document.body.innerText = newContent;