//task1
let el = document.getElementById("test");
el.innerHTML = "Last";

let el2  = document.getElementsByTagName("div")[0];
el2.innerHTML = "Last";

let el3 = document.body.firstElementChild;
el3.innerHTML = "Last";


//task2
let img = document.getElementsByClassName("image")[0];
img.src = "cat.jpg";
alert(img.src);


//task3
let select = document.querySelectorAll("#text p");
for( let i = 0; i < select.length; i++){
    alert(`Selector text ${i}: ${select[i].innerHTML}`);
}


//task4
let list = document.getElementById("list");
let arr = [];
arr.push(list.children[0].innerHTML);
arr.push(list.children[4].innerHTML);
arr.push(list.children[1].innerHTML);
arr.push(list.children[3].innerHTML);
arr.push(list.children[2].innerHTML);
alert(arr);
let arr1 = [];
arr1.push(list.firstElementChild.innerHTML);
arr1.push(list.lastElementChild.innerHTML);
arr1.push(list.firstElementChild.nextElementSibling.innerHTML);
arr1.push(list.lastElementChild.previousElementSibling.innerHTML);
arr1.push(list.firstElementChild.nextElementSibling.nextElementSibling.innerHTML);
alert(arr1);


//task5
document.getElementsByTagName("h1")[0].style.fontSize = "24px";
document.getElementsByTagName("h1")[0].style.background = "lightgreen";
document.getElementsByTagName("p")[0].style.fontWeight = "bold";
document.getElementsByTagName("p")[1].style.color = "red";
document.getElementsByTagName("p")[2].style.textDecoration = "underline";
document.getElementsByTagName("p")[3].style.fontStyle = "italic";
document.getElementsByTagName("span")[0].style.visibility = "hidden";
document.getElementById("myList").style.display = "inline";

//task6
let inp1 = prompt("Enter a value");
let inp2 = prompt("Enter a value");
let x = inp1;
inp1 = inp2;
inp2 = x;
document.getElementById("input1").value = inp1;
document.getElementById("input2").value = inp2;

