//create paragraph

let para1=document.createElement('p');
para1.innerText='hi i am red';
document.querySelector("body").append(para1);


para1.classList.add('red');

//create h3 

let h3=document.createElement('h3');
h3.innerText='hi iam blue';
document.querySelector("body").append(h3);


h3.classList.add('blue');

//create div inside text

let div=document.createElement('div');
let h1=document.createElement('h1');
let para2=document.createElement('para2');

h1.innerText='hi i am ';
para2.innerText='mee tooo';

div.append(h1);
div.append(para2);
div.classList.add('box');

document.querySelector("body").append(div);     


