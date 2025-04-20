const favMovie="pk";
let guess= prompt("guess my favourite movie!");
while((guess!=favMovie)&&(guess!="quit")){
    guess=prompt("Wrong!! please guess my favourite movie!");

} 
if(favMovie==guess){
    console.log("congrats");
}
else{
    console.log("blnt");
}

