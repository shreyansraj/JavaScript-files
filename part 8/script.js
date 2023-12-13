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

