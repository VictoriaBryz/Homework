//task1
function testThrow(exception){
   try {
       throw exception;
   }
   catch (error){
       console.log(`Caught: ${error}`);
   }
};
testThrow(5);

//task2
function calcRectangleArea(width, height){
    try {
        if (isNaN(width) || isNaN(height)) {
            throw new Error("Enter a number");
        }
        if ( width < 0 || height < 0){
            throw new Error("Enter only positive numbers");
        }
           
        return width*height;
    }
     catch (exception) {
            console.log(exception.name);
            console.log(exception.message);
            console.log(exception.stack);
        }
        
}



//task3
function checkAge(){
    let age = Number(prompt("How old are you?"));
    switch(true) {
        case (Number.isNaN(age)) :
            throw new Error("Enter a number");
        case (age == "" ):
            throw new Error("The field is empty! Please enter your age");
        case (age < 14):
            throw new Error("You are too young");
        default:
            alert("You can continue");
        
    }
};
try {
    let result = checkAge();
    console.log(result);
}
catch(exception) {
    console.log(exception.name);
    console.log(exception.message);
    console.log(exception.stack);
}

//task4 
class MonthException {
    constructor (message){
        this.message = message;
        this.name = "MonthException";
    }
}
function showMonthName(month) {
    let months = ["Juniory", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",	"December"];
    if (month > 12){
        throw  new MonthException("Incorrect month number");
    }
    return months[month - 1];
}
try {
    let result = showMonthName(13);
    console.log(result);
}
catch(MonthException) {
    console.log(MonthException.name);
    console.log(MonthException.message);
}    
console.log(showMonthName(5)); 

 //task5
function showUser(id){
    try {
        if ( id < 0){
            throw new Error("Enter only positive numbers");
        }
        return id;
    }
    catch (exception){
        console.log(exception.name);
        console.log(exception.message);
        console.log(exception.stack);
    }
}

function showUsers(ids){
    try {
        let x = [];
        for( let i = 0; i < ids.length; i++){
            if ( ids[i] < 0){
                throw new Error("ID must not be negative:" + ids[i]);
        }
        x += `ID:${ids[i]},`;
    }
    return x;
    }
    catch (exception){
        console.log(exception.name);
        console.log(exception.message);
        console.log(exception.stack);
    }
    
};
showUsers([7, -12, 44, 22]);