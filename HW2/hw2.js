// task1
let x = 1;
let y = 2;
let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1); 


res2 = Boolean(x) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"


res3 = Boolean(y-x);
console.log(res3); // true
console.log(typeof res3); // "boolean"


res4 = parseInt(Boolean(x));
console.log(res4); // NaN
console.log(typeof res4); // "number"
console.log(res4);

// task2
let number = prompt("Enter a number", 7);
if (number % 2 == 0){
    console.log("It/'s even number");
}
else if (number % 7 == 0) {
    console.log("It/'s number divide on 7");
}
else {
    console.log("It/'s just a number");
};

//task3
let arr = [];
arr[0] = 2;
arr[1] = "String";
arr[2] = true;
arr[3] = null;
document.write(`${arr.length}</br>`);
arr[5] = prompt("Enter a number", 0);
document.write(`${arr[5]}</br>`);
arr.shift();
document.write(arr);

//task4
let cities = ["Rome", "Lviv", "Warsaw"]; 
console.log(cities.join('*'));

//task5
let isAdult = prompt("How old are you?", 18);
if (isAdult >= 18){
    alert("You can continue");
}
else {
    alert("You are too young");
};

//task6
let a = parseInt(prompt("Enter the first side", 1));
let b = parseInt(prompt("Enter the second side", 2));
let c = parseInt(prompt("Enter the third side", 3));
if ( a**2 == b**2 + c**2 || b**2 == a**2 + c**2 || c**2 == a**2 + b**2 ){
    alert("It\'s a right triangle");
}
if ((a <= 0 || b <= 0 || c <= 0) || Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)){
    alert("Incorrect data");
}
else {
    if ( (a + b) < c || (a + c) < b || (b + c) < a) {
        alert("Enter another side");
    }
    else {
        let p = (a + b + c) / 2;
        console.log(p);
        let square =  Math.sqrt(p * (p - a) * (p - c) * (p - b));
        console.log(square);
        alert(square.toFixed(3));
    }

};

//task7
let time = new Date().getHours();
console.log(time);
if (time >= 5 && time <=11){
    alert("Good morning");
}
else if ( time > 11 && time <= 17){
    alert("Good afternoon");
}
else if ( time > 17 && time <= 23){
    alert("Good evening");
}
else {
    alert("Good night");
}; 
 switch(true){
     case (time > 5 && time <= 11) :
         alert("Good morning");
         break;
    case (time > 11 && time <= 17) :
        alert("Good afternoon");
        break;
    case (time > 17 && time <= 23):
        alert("Good evening");
        break;
    default:
        alert("Good night");

 };