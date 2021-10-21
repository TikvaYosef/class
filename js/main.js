// 1.	צרו פונקציה שמקבלת מספרים מהמשתמש, עד שהמשתמש מכניס 0, הדפיסו למסך את המספר הגדול ביותר ואת המספר הקטן ביותר.

// let userInput = Number(prompt("choose a number"))

// function numBigOrSmall(userInput) {
//     let array = [];
//     console.log(array)
//     while (userInput != 0) {
//         userInput = Number(prompt("choose a number"));
//         array.push(userInput);
//         array.sort(function (a, b) {
//             return a - b;


//         });
//         let smallNum = array[1];
//         let bigNum = array[array.length-1]
//         para1.innerText = ` the samll number is: ${smallNum}`
//         para2.innerText = `the big number is: ${bigNum}`  
//     }
// }
// numBigOrSmall(userInput);


// שאלה 2
// 2.	צרו פונקציה שמקבלת 10 מספרים מהמשתמש, המספרים נכנסים למערך שמודפס למסך, הפונקציה מחזירה בסוף מערך של מספרים זוגיים בלבד.

// let userInput2 = Number(prompt("enter 10 numbers"))

// function allEvenNumber() {
//     let arrayOfNumbers = [];
//     let arrayOfEvenNumbers = [];

//     console.log(arrayOfNumbers)
//     for (let i = 0; i < 10; i++) {

//         userInput2 = Number(prompt("enter 10 numbers"));
//         arrayOfNumbers.push(userInput2);
//         para3.innerText = `The numbers is: ${arrayOfNumbers}`
//         if (arrayOfNumbers[i] % 2 == 0) {
//             arrayOfEvenNumbers.push(arrayOfNumbers[i])
//             para4.innerText = ` The even numbers is: ${arrayOfEvenNumbers}` 
//         }

//     }

// }
// allEvenNumber()


// שאלה3
// צרו פונקציה שמקבלת מספר מהמשתמש, הפונקציה יוצרת מערך של 100 מספרים רנדומליים ובודקת האם המספר קיים במערך, במידה וכן יש להדפיס למסך הודעת הצלחה והודעת כישלון במידה ולא.

// let userInput3 = Number(prompt("enter 10 numbers"))


// function name(userInput3) {
//     let randomArray = []
//     randomArray ==

// }
// name(userInput3)




// 17.10.2021

// class Car {
//     company;
//     year;
//     static counter = 0;
//     stars;


//     constructor(company1, year1, stars1) {
//         this.company = company1;
//         this.year = year1;
//         Car.counter++
//         this.stars = stars1;
//     }

//     static newCar(object1, object2) {
//         return object1.year > object2.year ? object1 : object2;
//     }
//     static moreStars(star1, star2) {
//         return star1.stars > star2.stars ? star1 : star2;

//     }

// }

// const car1 = new Car("vfevre", 1996, 100)
// const car2 = new Car("vfevre", 2020, 78)
// const car3 = new Car("vfevre", 2022, 3)


// console.log(Car.newCar(car1, car2))
// console.log(Car.counter)
// console.log(Car.moreStars(car1, car2))

// ==============================================================================

// class Cat {
//     name;
//     age;
//     color;

//     constructor(name1, age1, color1) {
//         this.name = name1;
//         this.age = age1;
//         this.color = color1;
//     }
//     sound() {
//         return `my name ${this.name} miyaoo`
//     }

//     stringClass() {
//         return `${this.name} ${this.age} ${this.color}`

//     }

// }
// class Lion extends Cat {
//     weight;
//     constructor(name1, age1, color1, weight) {
//         super(name1, age1, color1)
//         this.weight = weight
//     }

//     allData(){
//       return `${super.stringClass()} ${ this.weight}`
//     }
// }


// const cat1 = new Cat("sany",10,"grey")
// const lion1 = new Lion("sany",10,"grey",30)
// console.log (cat1.sound("sany"))
// console.log(cat1.stringClass())
// console.log(lion1.allData())

// class Tiger extends Cat {
// }

// class Puma extends Cat {
// }

// ====================================================================================

// שאלה1
// שאלה מהמצגת



class Car {
    wheels;
    capacity;
    color;

    // constructor(wheels, capacity, color) {
    //     this.wheels = wheels;
    //     this.capacity = capacity;
    //     this.color = color;

    // }

    constructor(inp1, inp2, inp3) {
        this.wheels = inp1.value;
        this.capacity = inp2.value;
        this.color = inp3.value;
    }

    str() {
        return `${this.wheels} ${this.capacity} ${this.color}`
    }

    static bigCapacity(arrayOfNumber) {
        let max = arrayOfNumber[0].capacity
        for (const item of arrayOfNumber) {
            if (item.capacity > max) max = item.capacity;
        }
        return max
    }

}
const car1 = new Car(4, 1800, "red")
const car2 = new Car(2, 1600, "black")
const car3 = new Car(4, 1200, "blue")
console.log(car1.str())
console.log(Car.bigCapacity([car1, car2, car3]))

// btn.onclick = () => {
//     switch (typeOfCar.value.toLowerCase) {
//         case "truk":
//             return new Truck(inp1.value, inp3.value, inp4.value)
//         case "bus":
//             return new Bus(inp1.value, inp2.value, inp3.value)
//             case "plane":
//             return new Plane(inp1.value, inp2.value, inp3.value)

//     }
//     div1.innerHTML += `<table><tr><td>${inp1.value} </td><td>${inp2.value}</td><td> ${inp3.value}</td></tr></table>`
// }


// class Truck extends Car {
//     name;
//     constructor(wheels1, capacity1, color1, name1) {
//         super(wheels1, capacity1, color1);
//         this.name = name1;

//     }
//     string1() {
//         return `${super.str()} ${this.name} `
//     }

//     bigLetters1() {
//         return this.name.toUpperCase()
//     }

//     get bigLettersAll1() {
//         return this.bigLetters1()
//     }

// }
// const truck1 = new Truck(4, 1900, "yelow", "truky")
// console.log(truck1.string1())
// console.log(truck1.bigLettersAll1)

// class Bus extends Car {
//     name;
//     constructor(wheels1, capacity1, color1, name1) {
//         super(wheels1, capacity1, color1);
//         this.name = name1;

//     }
//     string1() {
//         return `${super.str()} ${this.name} `
//     }
// }

// class Plane extends Car {
//     name;
//     constructor(wheels1, capacity1, color1, name1) {
//         super(wheels1, capacity1, color1);
//         this.name = name1;
//     }

//     string1() {
//         return `${super.str()} ${this.name} `
//     }

// }

// =========================================================================

// שאלה 1 מהוורד
//צרו מחלקה עם 3 שדות ופונקציה סטטית אחת,2 שדות טקסט ושדה מספר אחד, הפונקציה היא פונקציית random מותאמת לפי הנתונים שהמחלקה מקבלת בבנאי. לדוג': במידה והמספר הוא 1000 אז המספר שיחזור יהיה בין 0 ל 999 . 

// class Numbers{
//     fName;
//     lName;
//     age;

//     constructor (fname,lname,age){
//         this.fName = fname;
//         this.lName = lname;
//         this.age = age;
//     }

//     randomNum(){
//        return Math.floor(Math.random()*this.age)

//     }

// }
// const num1 = new Numbers("dede","dewfd",1000)
// console.log(num1.randomNum())



// שאלה 2

// כתבו תוכנית שמקבלת מהמשתמש נתונים של שם, סיסמה, מייל ושם משתמש. התוכנית יוצרת מופע של משתמש.
// לאחר מכן היא משווה בין שני אובייקטים, כדי לקבוע האם הראשון מכיל ערכי מאפיינים שווי ערך לזה השני. אחד מהאובייקטים ניצור ידנית בקוד (הארדקודד).= לכתוב אובייקט ידנית.


class Users {
    name;
    password;
    mail;
    userName;

    constructor(inp1, inp2, inp3, inp4) {
        this.name = inp1;
        this.password = inp2;
        this.mail = inp3;
        this.userName = inp4;
    }



}
const user2 = new Users("tikva", "1234564", "tikva@gmail", "tiki")
btn.onclick = () => {
    const user1 = new Users(inp1.value, inp2.value, inp3.value, inp4.value)
    console.log(user1)
    for (const key in user1) {
        (user1[key] == user2[key])? console.log(`${key}: same`):console.log(`${key}: not the same`)
        
    }

}


//  שאלה 3

// צרו מחלקה של יישוב עם שדות של מס תושבים ושם. 
// בנו פונקציה שמחזירה את הפרטים בטקסט אחד. 
// לאחר מכן צרו מחלקה של מדינה, עיר וכפר, המחלקות יורשות מהמחלקה יישוב. 
// הוסיפו לכל מחלקה פונקציה שקוראת לפונקציה ממחלקת ההורה ומחזירה את הטקסט עם סוג היישוב . 
// צרו פונקציה סטטית במחלקה יישוב שמקבלת מספר אובייקטים ומחזירה את האובייקט עם מספר התושבים הגדול ביותר.
// צרו טופס שמקבל נתונים מהמשתמש ועל פי הטופס יוצרת את האובייקט המתאים ומוסיפה אותו לטבלה מתחת לטופס.


// class City {
//     name;
//     numberOfpeople;

//     // constructor(name, numberOfpeople) {
//     //     this.name = name;
//     //     this.numberOfpeople = numberOfpeople;
//     // }
//     constructor() {
//         this.name = inp1.value;
//         this.numberOfpeople = inp2.value;


//     }

//     oneText() {
//         return this.name + this.numberOfpeople.toString()
//     }

//     static morePeople(array) {


//         for (let i = 0; i < array.length; i++){

//             max  = array[i].numberOfpeople;
//             if(max<this.numberOfpeople){
//             this.numberOfpeople = max;

//             }
//         }


//     }




// }

// const city1 = new City("netanya", 145000)
// console.log(city1.oneText())
// btn.onclick = () => {
//     div1.innerHTML += `<table><tr><td>${inp1.value} </td><td>${inp2.value}</td></tr></table>`
// }

// class Vilege extends City {
//     type;
//     constructor(name, numberOfpeople, type) {
//         super(name, numberOfpeople);
//         this.type = type;
//     }

//     toText() {
//         return `${super.oneText()}${this.type.toString()}`
//     }


// }
// const vilege1 = new Vilege("netanya", 1000, "type1")
// console.log(vilege1.toText())

// class city2 extends City {
//     type;
//     constructor(name, numberOfpeople, type) {
//         super(name, numberOfpeople);
//         this.type = type;
//     }

//     toText() {
//         return `${super.oneText()}${this.type.toString()}`
//     }


// }
// class state extends City {
//     type;
//     constructor(name, numberOfpeople, type) {
//         super(name, numberOfpeople);
//         this.type = type;
//     }

//     toText() {
//         return `${super.oneText()}${this.type.toString()}`
//     }

// }



// let fruit = new Map([["apple", "red"], ["banana", "yellow"], ["pinaapple", "orenge"], ["orenge", "orenge"], ["apple", "green"]]);
// fruit.set("", "purple")
// fruit.set("blackberry", "black")
// console.log(fruit.get("blackberry"))
// console.log(fruit.values())
// console.log(fruit.keys())

// for (const item of fruit.values()) {
//     if (item == "orenge") {
//         console.log(fruit.get(item))
//     }
// }
// console.log(fruit)



// let people = new Map([["tikva",25],["keren",23],["edan",25],["yafit",25]])
// console.log(people.keys())
// console.log(people.values())

// for (let item of people.keys()) {
//         tr1.innerHTML += `<td>${item}</td>`
//         tr2.innerHTML +=`<td>${people.get(item)}</td>` 
// }


// let categories = new Map([["color", ["red,green,yelow,black"]], ["fruits", ["apple,banana,orenge"], ["vegetables", ["cucumber,tomato,onion"]]]])
// // console.log(categories)

// let cars = new Map([["volvo", { company: "grege", year: 2020, smk: 1800, color: "red" }],["kia",{company: "fjfjl", year: 2010, smk: 1200, color: "yellow"}],["infinty",{company: "grege", year: 2020, smk: 1800, color: "red"}]])
// // console.log(cars)


// class Computer {
//     company;
//     model;
//     year;
//     color;
//     constructor(company, model, year, color) {
//         this.company = company;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }


// }
// const computer1 = new Computer("lenovo", "es41", 2008, "red")
// const computer2 = new Computer("hp", "w78", 2010, "black")
// const computer3 = new Computer("apple", "mec", 2020, "blue")
// const computer4 = new Computer("ivory", "t78", 2006, "grey")
// // console.log(computer1,computer2,computer3,computer4)

// let array = [computer1, computer2, computer3, computer4]
// let computer = new Map([]);

// array.forEach(item => {
//     computer.set(item.model, item)
// });
// // console.log(computer)


// btn.onclick = () => {
//     if (computer.has("lenovo")) {
//         alert("yesss")
//     }
//     else{
//         alert("noooo")
//     }
// }




// 4.	בעת ריחוף, הפרטים של הסטודנט מודפסים ללוג.
// 5.	בעת ריחוף, הדיב גדל ומוצגים בו הפרטים של הסטודנט



// הדרך שלי:

// class Student {
//     fName;
//     lName;
//     age;
//     gradsAvr;

//     constructor(fName, lName, age, gradsAvr) {
//         this.fName = fName;
//         this.lName = lName;
//         this.age = age;
//         this.gradsAvr = gradsAvr;
//     }
//     static onmouseover1() {
//         console.log(this.fName, this.lName, this.age, this.gradsAvr)
//     }
// }
// const student1 = new Student("yafit", "samuel", "25", "99")
// const student2 = new Student("eden", "tesama", "24", "85")
// const student3 = new Student("keren", "hailu", "23", "100")

// let array = [student1, student2, student3]
// let students = new Map([]);

// array.forEach(item => {
//     students.set(item.fName, item);
//     divs.innerHTML += `<div class="divForStyle">${item.fName}</div>`

// });
// console.log(students)

// let divForStyle = document.getElementsByClassName("divForStyle");


//     for (let i = 0; i < divForStyle.length; i++) {
//         divForStyle[i].onmouseover = Student.onmouseover1
//     }



// class Student {
//     fName;
//     lName;
//     age;
//     gradsAvr;

//     constructor(fName, lName, age, gradsAvr) {
//         this.fName = fName;
//         this.lName = lName;
//         this.age = age;
//         this.gradsAvr = gradsAvr;
//     }

// }
// const student1 = new Student("yafit", "samuel", "25", "99")
// const student2 = new Student("eden", "tesama", "24", "85")
// const student3 = new Student("keren", "hailu", "23", "100")

// let array = [student1, student2, student3]
// let students = new Map([]);

// array.forEach(item => {
//     students.set(item.fName, item);
//     divs.innerHTML += `<div class="divForStyle"id="${item.fName}">${item.fName}</div>`

// });
// console.log(students)

// let divForStyle = document.getElementsByClassName("divForStyle");


// for (let i = 0; i < divForStyle.length; i++) {
//     divForStyle[i].onmouseover = () => {
//         divForStyle[i].style.width = "200px"
//         divForStyle[i].style.height = "200px"
//         console.log(students.get(divForStyle[i].id));
//         divForStyle[i].innerText += students.get(divForStyle[i].id).lName;
//     }
//     divForStyle[i].onmouseout = () => {
//         divForStyle[i].innerText = divForStyle[i].id
//         divForStyle[i].style.width = ""
//         divForStyle[i].style.height = ""
//     }


// }

































// function numSmallOrBig() {


    // Number(prompt("choose a number"))

    // while(userInput != 0 ){

    //     userInput
    //     let array = [];
    //     array.push(userInput)
    //     console.log(array)

    //     userInput++
    // }



    // if (userInput ) {
    //     console.log(`the biggest number is ${ max } `)
    // } else {
    //     console.log(`the smallest number is ${ max } `)
    // }




// }
// numSmallOrBig()