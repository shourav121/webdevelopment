let student = ["aman","shourav","priyanka"];
//empty array
let arr=[];
student[0]="priyanshu";
console.log(student);

//Array Method--

//PUSH

let cars = ["toyta","audi","bmw","xuv"];
console.log(cars);
cars.push("honda");
console.log(cars);

//pop

cars.pop();

//unshift

cars.unshift("city honda");

//shift

cars.shift();

//blocked and remoive followers

let foolowers =["a","b","c","d"];
let blocked = foolowers.shift();
console.log(foolowers);

//conct method:---

let primary =["red","yellow"];
let secondary =["pink","purple"];
let merge = primary.concat(secondary);
console.log(merge);  

//slice method:-----
let colors = [ "pinkk","purple","blue","white","green"]
let hhh = /*colors.slice(3);*//*colors.slice(1,3)*/
colors.slice(-2)
console.log(hhh);

//splice----
let colorss = ["pinkk","purple","blue","white","green"]
