'use strict';

let x = "five";
let y = 10;
x = y.toString();

let myParagraph = document.getElementById("apple");
myParagraph.innerText = "hello there";
let step = 0;
for (step = 0; step < 1000000; step++) {
    window.setInterval(function(){
        myParagraph.innerText = step.toString();
        console.log(step.toString());
    }, 1000);
}

