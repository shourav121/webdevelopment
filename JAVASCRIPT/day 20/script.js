const student={
    name: "shourav kumar",
    age:22,
    marks:66,
    city:"patna",
    eng:77,
    hindi:33,     
    math:80,
    getAvg(){
        let avg=(this.hindi+this.eng+this.math)/3;
        console.log(avg);
    }
}

const mul=(a,b)=>a*b;


///set timeout


console.log("hi ther000e!");

setTimeout(()=>{
    console.log("apna clg");
},5000)

console.log("welcome to");

//set interval  and for stopping create let id
//for stooping (clear interval id)
console.log("hhhh");
let id=setInterval(()=>{
    console.log("ddddd");
},2000);