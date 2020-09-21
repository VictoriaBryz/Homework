console.log("Bryzghalova");
let a, b;
a = 4;
b = "task3";
document.write(`${a}</br>${b}</br>`);
a = b;
document.write(`${a}</br>${b}</br>`);
task4 = {
    String : "september",
    Number : 16,
    Boolean : true,
    Undefined : undefined,
    Null : null
}
let isAdult = confirm("Is your age 18+?");
alert(isAdult);
let name = "Victoria";
let surname = "Bryzghalova";
let groupNum = 533;
let birthYear = 2000;
document.write(`${typeof(name)}</br> ${typeof(surname)} </br> ${typeof(groupNum)} </br> ${typeof(birthYear)}</br>`);
let c;
let d = null;
document.write(`${typeof(c)}</br>${typeof(d)}`);
login = prompt("What is your login?", "User");
email = prompt("What is your e-mail?", "eusermale@gmail.com");
pin = prompt ("What is your pin?", "qwerty");
alert(`Dear ${login}, your email is ${email}, your password is ${pin}`);
let sec = 1;
let min = 60 * sec;
let hour = 60 * min;
let day = 24 * hour;
let month = 30 * day;
document.write(`${min}</br>${hour}</br>${day}</br>${month}`);
