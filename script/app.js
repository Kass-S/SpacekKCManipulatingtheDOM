

let btnChange1 = document.getElementById('btnChange1');
let btnChange2 = document.getElementById('btnChange2');
let btnChange3 = document.getElementById('btnChange3');
let btnChange4 = document.getElementById('btnChange4');
let btnChange5 = document.getElementById('btnChange5');
let btnChange6 = document.getElementById('btnChange6');
let btnChange7 = document.getElementById('btnChange7');
let btnChange8 = document.getElementById('btnChange8');
let btnChange9 = document.getElementById('btnChange9');
let btnChange10 = document.getElementById('btnChange10');

let textChange1 = document.getElementById('textChange1');
let textChange2 = document.getElementById('textChange2');
let textChange3 = document.getElementById('textChange3');
let textChange4 = document.getElementById('textChange4');
let textChange5 = document.getElementById('textChange5');
let textChange6 = document.getElementById('textChange6');
let textChange7 = document.getElementById('textChange7');
let textChange8 = document.getElementById('textChange8');
let textChange9 = document.getElementById('textChange9');
let textChange10 = document.getElementById('textChange10');


btnChange1.addEventListener('click', function(event) {  
    alert('You clicked button 1')
});
btnChange2.addEventListener('click', function(event) { 
    textChange2.innerText = 'Changed the value to an integer: ' + 5; 
});
btnChange3.addEventListener('click', function(event) {  
    textChange3.innerText = 'Changed the value to a random integer: ' + Math.floor(Math.random()*26) ;
});
btnChange4.addEventListener('click', function(event) {
    textChange4.innerText = 'Time for a color change';  
    textChange4.className = 'textBtnChange4';
});
btnChange5.addEventListener('click', function(event) {  
    textChange5.innerText = 'More color!';
    textChange5.className = 'textBtnChange5';
});
btnChange6.addEventListener('click', function(event) { 
    textChange6.innerText = 'Its getting interesting now';
    textChange6.className = 'textBtnChange6'; 
    btnChange6.innerText = 'Ha ha!';
    btnChange6.className = 'textBtnChange6';
});
btnChange7.addEventListener('click', function(event) {  
    textChange7.className = 'textBtnChange7';
    textChange7.innerText = 'Font change time!';
});
btnChange8.addEventListener('click', function(event) {  
    textChange8.className = 'textBtnChange8';
    textChange8.innerText = 'Less get some variety';
});
btnChange9.addEventListener('click', function(event) {
    textChange9.className = 'textBtnChange9';
    textChange9.innerText = 'More random integers but stylish: ' + Math.floor(Math.random()*101) + ' ' + Math.floor(Math.random()*10001) ;
});
btnChange10.addEventListener('click', function(event) {  
    textChange10.className = 'textBtnChange10';
    textChange10.innerText = 'Moving time';
});