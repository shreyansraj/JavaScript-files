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


let para= document.querySelector("p");
para.innerText="Hi, I am <b>Peter Parker!<b>";
para.innerHTML="Hi, I am <b>Peter Parker!<b>";

