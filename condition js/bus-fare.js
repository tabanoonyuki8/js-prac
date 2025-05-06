const age =40;
const busFare=800;

if(age<10){
    console.log("Free ticket");
}
else if(age>=10 && age<=35){
          const price=busFare/2;
          console.log(price);
}
else if(age>=60){
          const price2=(busFare*15)/100;
          const totalPrice=busFare-price2;
          console.log(totalPrice);
}
else{
    console.log(busFare);
}
