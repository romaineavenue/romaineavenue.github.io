'use strict';
var a = function(){
    setInterval(function(){
      document.getElementById("apple").innerText = new Date().toString();
    },1000);
    };
a();
