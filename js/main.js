'use strict';

let x = "five";
let y = 10;
x = y.toString();

let myParagraph = document.getElementById("apple");
myParagraph.innerText = "hello there";
let step = 0;
let sravan = new Date();

var a = function(){
    setInterval(function(){
      myParagraph.innerText = new Date();
    },1000);
        
    };

    a();
