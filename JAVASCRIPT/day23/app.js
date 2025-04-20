// let btn=document.querySelector("button")
// console.dir(btn); 


// btn.onclick=function(){
//     console.log("button was clicked")
//     alert("btn clicked")
// }

function sayhello(){
    alert("hello");
}
function sayname(){
    console.log("ffffff")
}



// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     // btn.onclick=sayhello;
//     // btn.onmouseenter=function(){
//     //     console.log("touch the btn"); 
//     // }

    
//     btn.addEventListener("dblclick",sayname);
//     // btn.addEventListener("click",sayhello);
// }
//!addeventlister example on element
// let para=document.querySelector("p");
// para.addEventListener("click",function(){
//     console.log("para was clicked");
// });

// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse was entered");
// });

//!this event listener

// butn=document.querySelector("button");
// butn.addEventListener("click",function(){
//     console.log(this);
// });


// let p=document.querySelector("p");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");

//!this event listener functon use
// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// }

// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// butn.addEventListener("click",changeColor);


//!keyboard event 
let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    console.log("button clicked");
});

// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log("key->",event.key)
//     console.log("code->",event.code); 
//     console.log(event); 
//     console.log("key was pressed");
// });


let inp=document.querySelector("input");
inp.addEventListener("keydown",function(event){
    console.log("event->",event.code)
    if(event.code=="KeyU"){
        console.log("move up")
    }
    else if(event.code=="KeyD"){
        console.log("move down")
    }
    else if(event.code=="KeyL"){
        console.log("move left")
    }
    else if(event.code=="KeyR"){
        console.log("move right")
    }
});

//!form events
// form=document.querySelector("form");
// form.addEventListener("submit",function(event)


// //!for stopping action for going next page please add event.PreventDefault();


// {
//     event.preventDefault();
//     alert("form submitted");
// });


//!Extracting from data

let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();

    let inp=document.querySelector("input");
    console.dir(inp);
    console.log(inp.value); 
});


