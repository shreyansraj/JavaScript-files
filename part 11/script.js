//visualizing call stack

// function one() {
//     return 1;
// }

// function two() {
//     return one()+one();
// }

// function three() {
//     let sum=two()+one();
//     console.log(sum);
// }
// three();

// js is single threaded
    //eg of single threaded
let a=25;
console.log(a); //phle ye print hua
let b=20;
console.log(b); // uske bad ye print hoga
console.log(a+b); // fir ye print hua eska mtlb ek bar me ek kam ho rha hai

setTimeout(()=>{
    console.log("shreyans");
}, 2000);
setTimeout(()=>{
    console.log("shreyans");
}, 2000);

console.log("hii..");
