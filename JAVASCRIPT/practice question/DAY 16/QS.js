//trim and convert string:--
let msg = "help!";
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

//predict output:--

let name= "ApnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna","Our"));
console.log(name.slice(4).replace('l','t'))

//replace two t in college string;

let newMsgi= name.slice(4).replace('l','t');
console.log(newMsgi)
console.log(newMsgi.replace('l','t'));



//array question 
// before:-["january","july","march","august"];
//after:-["july","june","march","august"];


let month = ["january","july","march","august"];
month.shift();
month.shift();
month.unshift("june");
month.unshift("july");
console.log(month);