//task1
newWindow = window.open("","","width=300,height=300");
setTimeout(function () {
    newWindow.resizeTo(500, 500);
 }, 2000);
 setTimeout(function () {
    newWindow.moveTo(200, 200);
 }, 4000);
 setTimeout(function () {
    newWindow.close();
 }, 6000);
 


//task2
function changeCSS(){
    document.getElementsByTagName("button")[0].style.font = "20px Comic Sans MS";
    document.getElementsByTagName("button")[0].style.color = "orange";
}


//task3
function btn1(){
    document.body.style.backgroundColor = "blue";
}
function btn2(){
    document.body.style.backgroundColor = "pink";
}
function btn3(){
    document.body.style.backgroundColor = "brown";
}
function btn3_2(){
    document.body.style.backgroundColor = "white";
}
function link1(){
    document.body.style.backgroundColor = "yellow";
}
function link2(){
    document.body.style.backgroundColor = "white";
}


//task4
function deleteBtn(){
    let x = document.getElementById("list");
    x.remove(x.selectedIndex);
    
}
DeleteBtn.addEventListener("click", deleteBtn);


//task5
let y = document.getElementById("live");
y.addEventListener("click", clickFunc);
y.addEventListener("mouseover", over);
y.addEventListener("mouseout", out);
function clickFunc(){
    document.getElementById("myId").innerHTML += "I was pressed<br>";
}
function over(){
    document.getElementById("myId").innerHTML += "Mouse on me!<br>";
}
function out(){
    document.getElementById("myId").innerHTML += "Mouse is not on me!<br>";
}


//task6
function resizeWindow(){
    let w = window.innerWidth;
    let h = window.innerHeight;
    let size = "Width:" + w + "," + "Height:" + h;
    document.getElementById("result").innerHTML = size;
}
window.addEventListener("resize", resizeWindow);
resizeWindow();

          
//task7
const city = {
    'ger' : ['Berlin', 'Hamburg', 'Bremen'],
    'usa' : ['New York', 'Washington', 'Chicago'],
    'ukr' : ['Odessa', 'Lviv', 'Kyiv'],
}
let primeSelect = document.getElementById("country");
primeSelect.addEventListener("change", func);
primeSelect.addEventListener("change", toPar);

let citySelect = document.getElementById("cities");
citySelect.addEventListener("change", toPar);

function func(){
    citySelect.innerHTML = "";
    let countrySelect = primeSelect.value;
    for(let i = 0; i < city[countrySelect].length; i++){
        let new_option = document.createElement("option");
        new_option.innerHTML = city[countrySelect][i];
        citySelect.appendChild(new_option);
    }
}
let par = document.querySelector("p");
function toPar(){
    par.innerHTML = "";
    par.innerHTML = primeSelect.options[primeSelect.selectedIndex].text + "," 
    + citySelect.options[citySelect.selectedIndex].text;
}