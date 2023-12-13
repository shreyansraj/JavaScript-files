// str.trim(); strings are immutable in javascript
// toUpperCase();  SHREYANS
// LowerCase();  shreyans
// str.indexOf(sub str); it will tell the first occurance of a string
 
// let msg="ILoveRitu";
// let index= msg.indexOf("Ritu");
// console.log(index);

// let msg= "    ritu";
// let newmsg= msg.trim().toUpperCase();
// console.log(newmsg);

//str.slice(index from where u want to slice);
// let msg="ILoveRitu";
// let newMsg= msg.slice(5);
// console.log("newMsg");

// replace some words with other word str.replace("", "");
// let msg="ILoveRitu";
// console.log(msg.replace("Love", "Like"));
// console.log(msg.repeat(3));

        //   Array methods

//arr.push("");     add in last   
let cars=["bmw", "maruti", "xuv", "ferrari"];
cars.push("rolls royal");
console.log(cars);  

//arr.pop();   delete from last
cars.push("shreyans");
cars.pop();
console.log(cars);

//arr.unshift("") add in first
//arr.shift() delete from start

let start=['january', 'july', 'march', 'august'];
console.log(start);
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");
console.log(start);

//indexOf: return index of something arr.indexOf("");
//includes: search for a value arr.includes("");

let primary=["red", "green", "yellow"];
console.log(primary.indexOf("green"));
console.log(primary.includes("yellow"));

//concat: merge 2 arrays   arr1.concat(arr2);
// reverse: revere an array  arr.reverse();

let color1=['red', 'yellow', 'blue'];
let color2=['orange', 'green', 'violet'];
console.log(color1.concat(color2));
console.log(color1.reverse());

console.log("hii javascript!");

// slice : copies a portion f a array

let colors= color1.concat(color2);
console.log(colors.slice(1,4));

// splice : removes/replaces/add elemnts in place

// sort : sort string by char order in sring

// Array refrences : it stores address

// nested arrays
console.log("nested arr");
let nesarr=[ [1, 2, "raj"], [3, 4, 8, 9, 45], [7, 8, 9] ];
console.log(nesarr);