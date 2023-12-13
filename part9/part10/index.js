let btn= document.querySelector(".btn2");
console.dir(btn);

btn.onclick = function(){
    console.log("button is clicked");
};

let btns = document.querySelectorAll("button");

for(btn2 of btns){
    btn2.onclick=sayHello;
    console.dir(btn2);
}

function sayHello(){
    console.log("Hello!");
}