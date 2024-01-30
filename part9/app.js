// console.dir(document);
// console.dir(document.all);
// console.dir(document.all[9]);
// console.dir(document.all[9].innerText);
// document.all[9].innerText="Peter Parker";

//  let smallImages=document.getElementsByClassName("oldImg");

//     for(let i=0; i<smallImages.length; i++){
//     console.dir(smallImages[i].src);
// }

// using query selector : select single element
// document.querySelector("h1");
// document.querySelector("#description");
// document.querySelector(".oldImg");

// document.querySelector(("div a")); // selecting first anchor tag under div

// document.querySelectorAll("p") // select all paragraph


// let para= document.querySelector("p");
// para.innerText="Hi, I am <b>Peter Parker!<b>";
// para.innerHTML="Hi, I am <b>Peter Parker!<b>";

// let img = document.querySelector('img');
// console.dir(img);

// let heading=document.querySelector('h1');
// heading.style.color='red';
// heading.style.backgroundColor='purple';

// let links=document.querySelectorAll(".box a");

// // for(let i=0; i<links.length; i++){
// //     links[i].style.color='purple';
// // }
// for(link of links){
//     link.style.color='purple'; // inline style
// }

// console.dir(heading.classList); // to check class of heading

// let h4 = document.querySelector('h4');
// console.dir(h4.parentElement);

// console.dir(h4.children);

// let box = document.querySelector('.box');
// console.dir(box.children);

// let newP = document.createElement('p');
// newP.innerText = "Hi, I am Shreyans";

// let body = document.querySelector('body');
// body.append(newP);

// console.dir(newP);

// box.appendChild(newP);

// newP.append("I am inserting new words");

// newP.prepend("Hello,");

let para1 = document.createElement('p');
para1.innerText="Hey, i'm red";
document.querySelector("body").append(para1);
para1.classList.add('red');


let h3 = document.createElement('h3');
h3.innerText="I'm blue h3!";
document.querySelector("body").append(h3);
h3.classList.add('blue');

let div=document.createElement('div');
let h1=document.createElement("h1");
let para2=document.createElement("p");

h1.innerText="I'm in a div";
para2.innerText="Shreyans";

div.append(h1);
div.append(para2);
div.classList.add('box');

document.querySelector("body").append(div);

