/*Prompt the user to provide a password.

If the password is correct then add the class green to the text and remove the class transparent in order to show it.*/

var user = prompt("please provide your password")
console.log(user)
 var pTag = document.querySelector('p');

 if(password === 'stanley'){
     pTag.classList.remove('transparent')
     pTag.classList.add('green');
 }