console.log("ques:1");
let random=Math.floor(Math.random()*6)+1;
console.log(random);

console.log("ques:2");
let car={
    name:"Maybach",
    model:"Top class",
    color:"Royal White"
};
console.log(car.name);
console.log(car['model']);

console.log("ques:3");
let Person={
    name:"shreyans",
    age:20,
    city:"Gaya"
};
console.log("Before change:",Person.city);
Person.city="New York";
console.log("AfterChange:",Person.city);
Person.Country="United States";
console.log(Person.Country);


