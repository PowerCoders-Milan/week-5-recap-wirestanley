/*Create a function that, when the button is clicked, takes the text in the input box and creates a p tag with the input text inside.*/

var button = document.querySelector("button");
var input = document.querySelector("input")
function onclick(){
    var p = document.createElement("p")
    p.appendChild(document.createTextNode(input.value));
    document.body.appendChild(p);
    
}
button.addEventListener("click", onclick);