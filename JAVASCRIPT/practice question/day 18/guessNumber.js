let msg=prompt("enter max number");
let num=Math.floor(Math.random()*msg)+1;
let find=prompt("find your number you should entered");
while(true){
    if(find=="quit"){
        console.log("quit");
        break;
    }
    if(find==num){
        console.log("congrats your number is",num);
        break;
    }
    else{
        find=prompt("find your number you should entered");
    }
}