/*The test results are in but the machine did a mess. <br> The array one should be the names and the array two should be the scores.

Create a function that combines the two arrays together and creates an object with key and value pair like this => name: score.

The two arrays are mixed, but their order is correct.

Use all the strings elements as keys and the number elements as values to create the "score" object.

Once you created the score object print it to the console.

Array1 = ['marco', 'antonio', 'luca', 13, 18, 'leo', 'mary']
Array2 = [21, 19, 12, 'sebastian', 'will', 23, 20]*/

var array1 = ['marco', 'antonio', 'luca', 13, 18, 'leo', 'mary']
var array2 = [21, 19, 12, 'sebastian', 'will', 23, 20]

var score = {};

function arrayConcat(arrayA, arrayB){
    var array = arrayA.concat(arrayB);

    var arrayString = array.filter(element => typeof element === 'string');
    var arrayNumber = array.filter(element => typeof element === 'number');

    for(var i = 0; i < arrayString.length; i++){
        Object.defineProperty(score, `${arrayString[i]}`,{
            value: arrayNumber[i],
            enumerable: true,

        });
    }


}

arrayConcat(array1, array2);
console.log(score);
    





