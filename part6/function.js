function hello(){
    console.log("hello! function");
}
hello();

function onetofive(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
onetofive();

function isAdult(){
    let age=18;
    if(age>=18){
        console.log("Adult")
    }else{
        console.log("not adult");
    }
}
isAdult();

function rollDice(){
    let num=Math.floor(Math.random()*6)+1;
    console.log(num);
}
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();

function printInfo(name, age){
    console.log(`${name}'s age is ${age}`);
}
printInfo("shreyans", 22);
printInfo("ritu", 21);
printInfo("soumya", 20);

function sum(a, b){
    console.log(a+b);
}
sum(45, 85);

function avgof3num(a, b, c){
    console.log((a+b+c)/3);
}
avgof3num(5, 7, 80);

function tableofAnum(n){
    for(let i=n; i<=n*10; i=i+n){
        console.log(i);
    }
}
tableofAnum(9);
tableofAnum(17);

function sum2(a,b){
    return a+b;
}
console.log(sum(2,7));
console.log(sum(7,7));

function sumof1ton(n){
    let sum=0;
    for(let i=1; i<=n; i++){
        sum+=i;
    }
    return sum;
}
console.log(sumof1ton(10));

function concat(arr){
    let result="";
    for(let i=0; i<arr.length; i++){
        result+=arr[i];
    }
    return result;
}
let ans=concat(["shreyans", "bhai", "amir", "bano"]);
console.log(ans);

let greet="hello"; // global scope

function chnageGreet(){
    let greet="namaste";// function scope
    console.log(greet);

    function innerGreet(){
        console.log(greet);// lexical scope
    }
}
console.log(greet);
chnageGreet();

// functional expression
let sum7=function(a, b){
    return a+b;
}

// higher order function

function multipleGreet(func, count){
    for(let i=1; i<=count; i++){
        func();
    }
}

let Greet=function(){
    console.log("hello!");
}

multipleGreet(Greet, 100);
multipleGreet(function(){console.log("namaste!")}, 100);

// higher order funtions returns

function oddOrEvenFactory(request){
    if(request=="odd"){
        let odd=function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }else if(request=="even"){
        let even=function(n){
        console.log(n%2==0);
        }
    }
    return even;
}
let request="odd";

//methods

const calculator={
    num:55,
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
};
console.log(calculator.add(7,8));