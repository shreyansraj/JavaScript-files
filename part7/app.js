console.log("part:7");

// const student={
//     name: "shreyans",
//     age : 21,
//     eng : 92,
//     math : 100,
//     phy : 78,
//     getAvg() {
//         let avg = (this.eng+this.math+this.phy)/3;
//         console.log(avg);
//     }
// }

//----------- try & catch-----------

console.log("hello");
console.log("hello");
try{
    console.log(a)
} catch(err){
    console.log(err);
}
console.log("hello1")
console.log("hello1")
console.log("hello1")

// ------------Arrow function------------
console.log("arrow function");
const sum=(a, b)=>{
    console.log(a+b);
};
sum(7,8);
//implicit return
const multi=(a,b)=>a*b; 

//-----------------Set Timeout------------
console.log("hi there!");
setTimeout(()=>{
    console.log("Shreyans raj");
}, 2000);
console.log("this is")

//--------------set Intertval-------------
// setInterval(()=>{
//     console.log("shreyans")
// }, 2000);

// this with arrow function
const students={
    name: "shreyans",
    marks: 99,
    prop: this, //global scope
    getName: function(){
        console.log(this);
        return this.name; 
    },
    getMarks: ()=>{
        console.log(this); //parent's scope
        return this.marks;
    },
    getInfo1: function(){
        setTimeout(()=>{
            console.log(this); //student
        },2000);
    },
    getInfo2: function(){
        setTimeout(function(){
            console.log(this);// window
        },2000);
    }
};


