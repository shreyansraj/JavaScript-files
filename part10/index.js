// let btn= document.querySelector(".btn");
// console.dir(btn);

// btn.onclick = function(){
//     console.log("button is clicked");
// };

let btns = document.querySelectorAll(".btn");

for(btns of btns){
    // btns.onclick=sayHello;
    // //btns.onclick=sayName;
    // console.dir(btns);

    // btns.addEventListener("click", function(){
    //     console.log("Hello");
    //     console.log("Shreyans");
    // });

    btns.addEventListener("click", sayHello);
    btns.addEventListener("click", sayName);
}

function sayHello(){
    console.log("Hello");
}
function sayName(){
    console.log("Shreyans");
}


