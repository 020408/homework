var CURRENTcat = undefined;

class Cat {
    constructor(poroda, age, name, gender, color, sleepingStatus, image) {
        this.poroda = poroda;
        this.age = age;
        this.name = name;
        this.gender = gender;
        this.color = color;
        this.sleepingStatus = sleepingStatus;
        this.image = image;
    }

    askForFood() {
        if (this.sleepingStatus != false) {
            console.log(this.name, +"говорит:", " хочу кушать!");
        } else {
            console.log("я вообщете еще сплю!");
        }
    }
    sleep() {
        this.sleepingStatus = true;
    }
    wakeUp() {
        this.sleepingStatus = false;
    }
}

const vasya = new Cat(
    "порода1",
    2,
    "Рижик",
    "мужской",
    "білий",
    false,
    "img/first.jpg"
);
const funtik = new Cat(
    "порода2",
    8,
    "Тузя",
    "мужской",
    "чорний",
    false,
    "img/second.jpg"
);
const angela = new Cat(
    "порода3",
    5,
    "Бобік",
    "женский",
    "рижий",
    false,
    "img/third.jpg"
);

let catsArray = [vasya, funtik, angela];

let catImg = document.querySelector(".imageCat");
let poroda = document.querySelector(".poroda");
let age = document.querySelector(".age");
let nickname = document.querySelector(".Name");
let gender = document.querySelector(".gender");
let color = document.querySelector(".color");
let sleepStatus = document.querySelector(".SleepingStatus");

let buttons = document.querySelectorAll("button");
buttons = Array.from(buttons);
function showCat(event) {
    let number = event.target.id;
    CURRENTcat = number;
    number--;

    catImg.src = catsArray[number].image;
    catImg.alt = catsArray[number].image;

    poroda.textContent = "Порода:" + " " + catsArray[number].poroda;
    age.textContent = "возрост:" + " " + catsArray[number].age;
    nickname.textContent = "кличка:" + " " + catsArray[number].name;
    gender.textContent = "гендер:" + " " + catsArray[number].gender;
    color.textContent = "цвет:" + " " + catsArray[number].color;
    sleepStatus.textContent =
        catsArray[number].sleepingStatus == true
            ? "статус(спит или не ):" + " " + "да"
            : "статус(спит или не ):" + " " + "нет";
    for (i = 0; i < buttons.length; i++) {
        if (i == number) {
            buttons[i].style.background = "red";
        } else {
            buttons[i].style.background = "gray";
        }
    }
}

catImg.src = catsArray[0].image;
catImg.alt = catsArray[0].image;

poroda.textContent = "порода:" + " " + catsArray[0].poroda;
age.textContent = "возрост:" + " " + catsArray[0].age;
nickname.textContent = "кличка:" + " " + catsArray[0].name;
gender.textContent = "гендер:" + " " + catsArray[0].gender;
color.textContent = "цвет:" + " " + catsArray[0].color;
sleepStatus.textContent =
    catsArray[0].sleepingStatus == true
        ? "статус(спит или не ):" + " " + "да"
        : "статус(спит или не ):" + " " + "нет";
buttons[0].style.background = "red";