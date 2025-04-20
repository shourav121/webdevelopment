//!js call stack

// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     let ans=two()+one();
//     console.log(ans);
// }
// three();

//!js is single threded

// setTimeout(()=>{
//     console.log("apna clg");
// },2000);

// console.log("hi")

//!call back hell

// h1=document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange)nextColorChange();
//     },delay);
// }

// changeColor("red",1000,()=>{
//     changeColor("blue",1000,()=>{
//         changeColor("grey",1000,()=>{
//             changeColor("purple",1000,()=>{
//                 changeColor("green",1000,()=>{
//                 });
//             });
//         });
//     });
// });

//!setting up promises

// function savetoDb(data,success,failure){
//     let internetSpeed= Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }
//     else{
//         failure();
//     }
// }
// savetoDb("apna college",()=>{
//     console.log("sucess:your data was saved");
//     savetoDb("apna two clg",()=>{
//         console.log("sucess 2: saved")
//         savetoDb("sharadha",()=>{
//             console.log("sucess 3: saved");
//         },()=>{
//             console.log("failure 3:not saved");
//         })
//     },()=>{
//         console.log("failure2: not saved");
//     })
// },()=>{
//     console.log("failure:your data was saved");
// });

//! refactoring with promises

// function savetoDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed= Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve(" data was saved");
//         }
//         else{
//             reject("failure weak connection");
//         }
//     });
// }

//!.then()==> resolved/success   .catch==>reject/failure


// savetoDb("apna clg")
// .then(()=>{
//     console.log("promise was resolved")
// })
// .catch(()=>{
//     console.log("promise was rejected")
// })

//!promise chaining

// savetoDb("apna clg")
// .then(()=>{
//     console.log("data 1 was saved");
//     return savetoDb("hello sir")
// })
// .then(()=>{
//     console.log("data 2 was saved")
// })
// .catch(()=>{
//     console.log("promise was rejected")
// })

//! result and error in promise
//!resolve hi result hai and reject hi error hai.

// savetoDb("apna clg")
// .then((result)=>{
//     console.log("data 1 was saved");
//     console.log("result of promise ",result);
//     return savetoDb("hello sir")
// })
// .then(()=>{
//     console.log("data 2 was saved")
//     console.log("result of promise ",result);
// })
// .catch(()=>{
//     console.log("promise was rejected")
//     console.log("error of promise ",error);
// })

//! refactoring old code
// h1=document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             resolve("color change");
//         },delay);
//     });
    
// }

//!this code is more redable then old colour code
// changeColor("red",1000)
// .then(()=>{
//     console.log("red colour was completed");
//     return changeColor("green",1000);
// })
// .then(()=>{
//     console.log("green colour was changed");
//     return("purple",1000);
// })
// .then(()=>{
//     console.log("purple colour was changed");
//     return("brown",1000);
// })
// .then(()=>{
//     console.log("brown was changed");
// });


//! async function
// async function greet(){
    //! agar ye line ko uncomment karte hai to error dega console me ...
    //throw "404 page not found";
//     return "hello";
// }


// greet()
// .then((result)=>{
//     console.log("promise was resolved",result);
// })
// .catch((err)=>{
//     console.log("romise was rejected with err ",err);
// })

// let demo= async()=>{
//     return 5;
// }


//! await keyword...

h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            console.log(`colour changed to ${color}`);
            resolve("color change");
        },delay);
    });
}

async function demo(){
    await changeColor("red",1000);
    await changeColor("blue",1000);
    await changeColor("purple",1000);
    await changeColor("lightpink",1000);
    await changeColor("brown",1000);
    await changeColor("green",1000);
}

