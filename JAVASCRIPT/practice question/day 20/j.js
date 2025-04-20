
///find square

const square = (n)=>{
    return n*n;
}


//five time hello world and stop 10 second reach 

const id=setInterval(()=>{
    console.log("hello");
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("all done");
},10000);