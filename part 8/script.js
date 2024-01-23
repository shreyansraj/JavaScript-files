let arr=[1, 2, 3, 4, 5];

function print(el){
    console.log(el);
}
arr.forEach(print);
//or
arr.forEach(function(el){
    console.log(el);
});
//using arrow function
arr.forEach((el)=>{
    console.log(el);
});

let obj_arr=[{
    name:"shreyans",
    marks: 99
}, 
{
    name: "vishal",
    marks: 100
}, 
{
    name: "sameer",
    marks: 120
}];
obj_arr.forEach((el)=>{
    console.log(el);
});
obj_arr.forEach((el)=>{
    console.log(el.name);
});

// map
let num=[1, 2, 3, 4];

let double = num.map((el)=>{
    return el*el;
});

let gpa = obj_arr.map((el)=>{
    return (el.marks)/10;
});

// filter

let height = [6, 5, 8, 7, 10, 9];

let select = height.filter((el)=>{
    return el>6;
});

// every

let check = height.every((el)=>{
    return el%2==0;
});

// reduce

let reduced= height.reduce((res, el)=>res+el);
console.log(reduced);

// max in arr

// let max=-1;
// for(let i=0; i<height.length; i++){
//     if(max<height[i]){
//         max=height[i];
//     }
// }
// console.log(max);

let ans=height.reduce((max, el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
});
console.log(ans);

// check if all are multiple of 10

let multi= [10, 20, 30, 40];

let multi_ten = multi.every((el)=>{
    return el%10==0;
});

// default parameter

function sum(a, b=2){
    return a+b;
}
console.log(sum(10));

// spread

console.log(Math.max(...height));
console.log(Math.min(...height));
console.log(...height);
console.log(..."shreyans");

// spread with array literal

let newHeight=[...height];
console.log(newHeight);

let char=[..."shreyans"];
console.log(char);

let odd=[1, 3, 5, 7];
let even=[2, 4, 8, 10];

let odd_even=[...odd, ...even];
console.log(odd_even);

//spread with object literals

const data={
    email: "shreyansraj181@gmail.com",
    password:"abcd",
}

const dataCopy={...data, id:123, country:"India"};
console.log(dataCopy);

let obj1= {...height};
console.log(obj1);

let obj2={..."shreyans"};
console.log(obj2);

//Rest

function sum_rest(...args){
   return args.reduce((res, el)=> res+el);
}
console.log(sum_rest(1, 2, 3, 4));
// arguments array is only accessible and methods can't be apply on arguments
// so we will use args to store the value and then we can apply array methods

function min(...args){
    return args.reduce((min, el)=> {
        if(min>el){
            return el;
        }else{
            return min;
        }
    })
}
console.log(min(10, 78, 5, -20, 45));

// Destructuring
let names = ["tony", "bruce", "peter", "abc", "xyz", "pyq"];

// let winner=names[0];
// let runnerup=names[1];
// let secondrunnerup=names[2];

let [winner, runnerup, secondrunnerup, ...others]=names;
console.log(winner);
console.log(runnerup);
console.log(secondrunnerup);
console.log(others);

// destructuring for objects

const student = {
    name: "karan",
    class: 9,
    age: 16,
    subjects: ["eng", "math", "phy", "chem", "hindi"],
    username: "karan123",
    password: 4567,
};

const {username: user, password: pass} = student;
console.log(user);
console.log(pass);