//Count how many times a string has the letter a and A
let count=0;
const str= "Javascript is A fantAstic languAAge";
for(let i=0; i<=str.length; i++){
    if(str[i]== 'a' || str[i]== 'A'){
        count++;
    }
}
console.log(count);