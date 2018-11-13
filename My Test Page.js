var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
alert('Hello');

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');

    if(mySrc === 'https://i.stack.imgur.com/wVCyD.png') {
        myImage.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/d/d2/Firefox_Logo%2C_2017.png';
    } else{
        myImage.setAttribute('src','https://i.stack.imgur.com/wVCyD.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}