const myScore=85;
const frndScore=80;

if (myScore>=80){
          if(frndScore >=80){
            console.log("Go for lunch");
          }
          else if(frndScore<=79 && frndScore>=60){
            console.log("Good luck for next time");
          }
          else if(frndScore<=59 && frndScore>=40){
            console.log("Keep your friand msg unseen");
          }
        
          else if(frndScore>=0 && frndScore<=39){
            console.log("Block your frind");
          }
        
}
else{
    console.log("Go to home ,sleeeeeeeep");
}