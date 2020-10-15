//task1
function upperCase(str){
    if(str.match(/^[A-Z]/)){
        console.log("String's starts with uppercase character");
    } else{
        console.log("String's not starts with uppercase character ");
    }
}


//task2
/*function checkEmail(str){
    if(str.match(/\w/)){
        console.log(true);
    }
}*/


//task3
let res  = /(d)b+(d)/gi;
console.log("cdbBdbsbz".match(res));


//task4
let re = /(\w+)\s(\w+)/gi;
let str = "Java Script";
let newstr = str.replace(re, '$2, $1');
console.log(newstr);


//task5
function card(str){
    str = str.match(/\d/g).join('');
    if(str.match(/\d{16}/g)){
        console.log("Correct");
    }else{
        console.log("Incorrect");
    }
}


//task6
function checkEmail(str){
    if(str.match(/^[a-z0-9]+(\w+)/i)){
        if(str.match(/(-)+/)){
            console.log("Inorrect");
        }else{
            console.log("Email is correct!");
        }
    }
    else{
        console.log("Email is not correct!");
    }
}


//task7
function checkLogin(str){
    if(str.match(/(^[a-z]+[0-9]*[.,]?[0-9]+(\w+))/gi)){
        console.log(true);
    }else{
        console.log(false);
    }
    console.log(str.match(/\d*[.,]?\d/g));
}


