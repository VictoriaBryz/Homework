//task1
let arr = [2, 3, 4, 5];
let res1 = 1;
let res2 = 1;
for (let i = 0; i < arr.length; i++){
    res1 *= arr[i];
}
console.log(res1);

let j = 0;
while ( j < arr.length){
    res2 *= arr[j];
    j++;
}
console.log(res2);

//task2
for (let i = 0; i <= 15; i++){
    if (i % 2 == 0){
        console.log(`${i} is even`);
    }
    else{
        console.log(`${i} is odd`);
    }
};

//task3
function randArray(k){
    let arr = [];
    for (let i = 0; i < k; i++){
        arr[i] = Math.floor((Math.random() * 500));
    }
    console.log(arr);
};
randArray(7);

//task4
function raiseToDegree(a,b){
    a = parseInt(prompt("Enter a number", 3));
    b = parseInt(prompt("Enter degree indicator", 2));
    return a**b;
};
raiseToDegree();

//task5
function findMin() {
    let min = 0;
    for ( let i = 0; i < arguments.length; i++){
        if ( arguments[i] < min){
            min = arguments[i];
        }
    }
    return min;
};
findMin(0, -4, 5, 6);

//task6
function findUnique(array){
    for ( let i = 0; i < array.length; i++){
        for (j = i + 1; j < array.length; j++){
            if(array[i] === array[j]){
                return false;
            }
                
        }
      
    }
    return true;
            
};
findUnique([1, 2, 3, 5, 3]);
findUnique([1, 2, 3, 5, 4]); 

//task7
function lastElem (newArr, x) {
    if (x > 1){
        return newArr.slice(newArr.length - x, newArr.length);
    }
    else {
        return newArr[newArr.length - 1];
    }
    
};

//task8
function changeLetter (string){
    string.split(" ");
    let x = [];
    for ( let i = 0; i < string.length; i++){
        if ( string[i-1] == " " || i == 0 ){
            x += string[i].toUpperCase();
        }
        else {
            x += string[i];
        }
    }
    return x;
};