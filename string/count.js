//Count how many times a string has the letter a
let count=0;
const str= "Javascript is a fantastic language";
for(let i=0; i<=str.length; i++){
    if(str[i]== 'a'){
        count++;
    }
}
console.log(count);