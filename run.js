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

var Car = function (x, y) {
    this.x = x;
    this.y = y;
};

Car.prototype.draw = function () {
    var carHtml = '<img src="http://nostarch.com/images/car.png">';

    this.carElement = $(carHtml);

    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    });

    $("body").append(this.carElement);
}

Car.prototype.moveRight = function () {
    this.x += 5;

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}

Car.prototype.moveLeft = function () {
    this.x -= 5;

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}

Car.prototype.moveUp = function () {
    this.y -= 5;

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}

Car.prototype.moveDown = function () {
    this.y += 5;

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}


var tesla = new Car(20, 20);
var nissan = new Car(100, 200);

tesla.draw();
nissan.draw();