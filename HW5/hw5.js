//task1
function propsCount(currentObject) {
    let count = 0;
    for ( key in currentObject){
        count++;
    }
    return count;
}
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};
console.log(propsCount(mentor));


//task2
let country  = {
    capital : "Kyiv",
    square : 42,
    lang : "ukrainian",
    president : "Zelenskiy",
    sea : 2
};
function showProps(obj) {
    let arr = [];
    let arr1 = [];
    for (let key in obj){
        arr.push(key);
        arr1.push(obj[key]);
    }
    console.log(arr, arr1);
}
console.log(showProps(country));


//task3
class Person {
    constructor( name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return `${this.name } ${this.surname }`;
    }
}
class Student extends Person {
    constructor ( name, surname, year){
        super (name, surname);
        this.year = year;
    }
    showFullName(midleName) {
        return `${this.name } ${this.surname } ${midleName} `;
    }
    showCourse() {
        let date = new Date();
        let currentYear = date.getFullYear();
        return (currentYear - this.year);
    }
}
let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 5


//task4
class Worker {
    #experience = 1.2;
    constructor (fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary() {
        return this.dayRate*this.workingDays;
    }
    showSalaryWithExperience() {
        return this.#experience*this.dayRate*this.workingDays;
    }
    get showExp() {
        return this.#experience;
    }
    set setExp(value) {
        return this.#experience = value;
    }
}
function sortSalary(arr) {
    arr.sort((a, b) => a.showSalaryWithExperience() > b.showSalaryWithExperience() ? 1 : -1);
    console.log("Sorted salary:");
    function res(value) {
      console.log(`${value.fullName} - ${value.showSalaryWithExperience()}`);
   }
     arr.forEach(res);
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);                 
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
console.log(worker2.showSalaryWithExperience());
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
console.log(worker2.showSalaryWithExperience());

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);                 
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
console.log(worker3.showSalaryWithExperience());
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
console.log(worker3.showSalaryWithExperience());

let objArray = [ worker1, worker2, worker3];
console.log(sortSalary(objArray));


//task5
class GeometricFigure {
    getArea() {
        return 0;
}
toString() {
    return Object.getPrototypeOf(this).constructor.name;
}
}
class Triangle extends GeometricFigure {
    constructor(a, h) {
        super();
        this.a = a;
        this.h = h;
    }
    getArea() {
        return (this.a*this.h)/2;
    }
}
class Square extends GeometricFigure{
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return this.side**2;
    }
}
class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }
    getArea() {
        return Math.PI*this.r**2;
    }
}
function handleFigures(figures) {
    for ( let i = 0; i < figures.length; i++) {
        if ( figures[i] instanceof GeometricFigure){
            console.log(`Geometric figure:  ${figures[i]} - ${figures[i].getArea()}`);
        }
    }
}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));
