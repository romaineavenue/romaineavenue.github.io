'use strict';

let x = "five";
let y = 10;
x = y.toString();

let myParagraph = document.getElementById("apple");
myParagraph.innerText = "hello there";
let step = 0;
for (step = 1000; step < 1000000; step++) {
    window.setTimeout(function(){
        console.log(step.toString());
    }, step);
}

