var array = ['a', 'c', 'p', 'd', 1, 7, 3, 6, 9, 4, 'h', 'y'];
var num = 0
var string = 0
for (let i = 0; i< array.length; i++) {
    if (typeof array[i] === "string") {
        string++
    }else if (typeof array[i] === "number") {
        num++
    }else {
        console.log("numbers are the same");
    }
}
console.log("the length of the array is " + array.length);
console.log("numbers of the array are " + num + " in the array ");
console.log("string are " + string + " in the array ");