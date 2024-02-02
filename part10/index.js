// let btn= document.querySelector(".btn");
// console.dir(btn);

// btn.onclick = function(){
//     console.log("button is clicked");
// };

// let btns = document.querySelectorAll(".btn");

// for(btns of btns){
//     // btns.onclick=sayHello;
//     // //btns.onclick=sayName;
//     // console.dir(btns);

//     // btns.addEventListener("click", function(){
//     //     console.log("Hello");
//     //     console.log("Shreyans");
//     // });

//     btns.addEventListener("click", sayHello);
//     btns.addEventListener("click", sayName);
// }

// function sayHello(){
//     console.log("Hello");
// }
// function sayName(){
//     console.log("Shreyans");
// }

let h1=document.querySelector("h1");
let h2=document.querySelector("h2");
let p=document.querySelector("p");
let button=document.querySelector("button");

function changeColor(){
    this.style.backgroundColor="orange";
}

button.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h2.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);

// --------------keyword event-------------------
let input=document.querySelector("input");

input.addEventListener("keydown", function(event){
    console.log("key=", event.key);
    console.log("code=", event.code);
    console.log("key was pressed");
});

// ------------------form event-------------------

let form=document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     alert("form submitted");
// });

// ------Extracting Form Data---------------
form.addEventListener("submit", function(event){
    event.preventDefault();
    
    let inp=document.querySelector("#forminput");
    console.dir(inp);
    console.log(inp.value);
});






