class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

// document.body.innerHTML = greeter(user);
var a = function(){
    setInterval(function(){
      document.getElementById("apple").innerText = new Date().toString();
    },1000);
    };
a();
