// javascript is a dynamicly typed scripting language, dynamic because we dont have explicitly mention a data type
// the smallest possible javascript code is empty file, when a javascript file is created a global execution context.(environment where javascript gets executed)

// 2 + 2

// 2 - 2

// 2 * 2

// 2 / 2

// variables -- creation

//1> resserved key words - words alredy defined by the programming language
//   var , let , const    //let and const were added in 2015, called ES6

// var name = "Sayan";
// console.log(name);


// first project - counter app

let count = 0;

let plusbutt = document.querySelector(".button1");

let minusbutt = document.querySelector(".button2");

let headingtext = document.querySelector("h1");


plusbutt.addEventListener("click", function incrementer() {
    count++
    headingtext.innerHTML = count;
})

minusbutt.addEventListener("click", function incrementer() {
    count--
    headingtext.innerHTML = count;
})

let resetbutt = document.querySelector(".reset");

resetbutt.addEventListener("click", function reseter() {
    count = 0;
    headingtext.innerHTML = count;
})

let isUserActive = true;
let inactiveTimer;


function handleUserActivity() {
    isUserActive = true;
    clearTimeout(inactiveTimer);
    document.querySelector('h2').classList.remove('blink');

    inactiveTimer = setTimeout(() => {
        isUserActive = false;
        document.querySelector('h2').classList.add('blink');
    }, 10000); 
}


document.addEventListener('mousemove', handleUserActivity);
document.addEventListener('keydown', handleUserActivity);


handleUserActivity();