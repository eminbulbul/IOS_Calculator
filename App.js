//they are calculator's screens
let screenOne = document.getElementById('screen1');
let screenSec = document.getElementById('screen2');

let ac = document.querySelector('.AC');
let remove = document.querySelector('.remove');
let modulus = document.querySelector('.modulus');
let divide = document.querySelector('.divide');
let button7 = document.querySelector(".button7");
let button8 = document.querySelector(".button8");
let button9 = document.querySelector(".button9");
let multiply = document.querySelector(".multiply");
let button4 = document.querySelector(".button4");
let button5 = document.querySelector(".button5");
let button6 = document.querySelector(".button6");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let button0 = document.querySelector(".button0");
let minus = document.querySelector(".minus");
let add = document.querySelector(".add");
let comma = document.querySelector(".comma");
let equal = document.querySelector(".equal");


let mind1 ;

let numbers1 = [];



if (numbers1.length == 0) {
    screenSec.innerText = 0;
};

button0.addEventListener('click',()=>{
    numbers1.push(button0.innerText)
    screenSec.innerText = Number(numbers1.join(''));

});
button1.addEventListener('click',()=>{
    numbers1.push(button1.innerText)
    screenSec.innerText = Number(numbers1.join(''));
});
button2.addEventListener('click',()=>{
    numbers1.push(button2.innerText)
    screenSec.innerText = Number(numbers1.join(''));
});
button3.addEventListener('click',()=>{
    numbers1.push(button3.innerText)
    screenSec.innerText = Number(numbers1.join(''));
});
button4.addEventListener('click',()=>{
    numbers1.push(button4.innerText)
    screenSec.innerText = Number(numbers1.join(''));
});
button5.addEventListener('click',()=>{
    numbers1.push(button5.innerText)
    screenSec.innerText = Number(numbers1.join(''));
});
button6.addEventListener('click',()=>{
    numbers1.push(button6.innerText)
    screenSec.innerText = Number(numbers1.join(''));
});

button7.addEventListener('click',()=>{
    numbers1.push(button7.innerText)
    screenSec.innerText = Number(numbers1.join(''));
});

button8.addEventListener('click',()=>{
    numbers1.push(button8.innerText)
    screenSec.innerText = Number(numbers1.join(''));
});

button9.addEventListener('click',()=>{
    numbers1.push(button9.innerText)
    screenSec.innerText = Number(numbers1.join(''));
});

comma.addEventListener('click',()=>{
    numbers1.push(".")
    screenSec.innerText = Number(numbers1.join(''));
});
ac.addEventListener('click',()=>{
    window.location.reload(false);
    
});

add.addEventListener('click',()=>{
    mind1 = Number(screenSec.innerText)
    screenOne.innerText = `${screenSec.innerText} + `
    numbers1 = [];
});
minus.addEventListener('click',()=>{
    mind1 = Number(screenSec.innerText)
    screenOne.innerText = `${screenSec.innerText} - `
    numbers1 = [];
});
multiply.addEventListener('click',()=>{
    mind1 = Number(screenSec.innerText)
    screenOne.innerText = `${screenSec.innerText} ?? `
    numbers1 = [];
});
divide.addEventListener('click',()=>{
    mind1 = Number(screenSec.innerText)
    screenOne.innerText = `${screenSec.innerText} ?? `
    numbers1 = [];
});
modulus.addEventListener('click',()=>{
    mind1 = Number(screenSec.innerText)
    screenOne.innerText = `${screenSec.innerText} % `
    numbers1 = [];
});
remove.addEventListener('click',()=>{
    numbers1.pop();
    screenSec.innerText =Number(numbers1.join(''));
});

equal.addEventListener('click',()=>{
    if ((screenOne.innerText).includes('+')) {
        screenOne.innerText = `${mind1} + ${Number(numbers1.join(''))}`;
        screenSec.innerText = mind1 + Number(numbers1.join(''));
    }else if ((screenOne.innerText).includes('-')) {
        screenOne.innerText = `${mind1} - ${Number(numbers1.join(''))}`;
        screenSec.innerText = mind1 - Number(numbers1.join(''));
    }else if ((screenOne.innerText).includes('??')) {
        screenOne.innerText = `${mind1} ?? ${Number(numbers1.join(''))}`;
        screenSec.innerText = (mind1 * Number(numbers1.join('')).toFixed(4));
    }else if ((screenOne.innerText).includes('??')) {
        screenOne.innerText = `${mind1} ?? ${Number(numbers1.join(''))}`;
        screenSec.innerText = (mind1 / Number(numbers1.join(''))).toFixed(4);
        
    }else if ((screenOne.innerText).includes('%')) {
        screenOne.innerText = `${mind1} % ${Number(numbers1.join(''))}`;
        screenSec.innerText = (mind1 * Number(numbers1.join('')) / 100).toFixed(4);
    }

});