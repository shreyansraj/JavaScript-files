//for loop
for(let i=0; i<10; i++){
    console.log(i);
}

for(let i=10; i>=0; i--){
    console.log(i);
}

// print odd num
console.log("odd number");
for(let i=1; i<=20; i++){
    if(i%2!=0){
        console.log(i);
    }
}

//multiple of n
// console.log("tableof a given number");
// let n=prompt("write your number");
// n=parseInt(n); // convert string to integer
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

//nested for loop
console.log("nested loop");
for(let i=1; i<=4; i++){
    console.log(`outer loop ${i}`);
    for(let j=1; j<=4; j++){
        console.log(j);
    }
}

// guess my fav movie

// const favMovie="Joker";

// let guess= prompt("guess my faourite movie");

// while( (guess!=favMovie) && (guess!="quit") ){
//     guess=prompt("Wrong ans. Try again");
// }

// if(guess==favMovie){
//     console.log("congrats!");
// }else{
//     console.log("You quit");
// }


