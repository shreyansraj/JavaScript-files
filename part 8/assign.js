// ques: 1

let arrQ1 = [1, 5, 7, 8, 10];

let square= arrQ1.map((el)=> el*el);
console.log(square);

let sumQ1= square.reduce((acc, el)=> acc+el, 0);
let avg= sumQ1/arrQ1.length;
console.log(avg);

// ques: 2

let newarr= arrQ1.map((el)=> el+5);
console.log(newarr);

// ques: 3

let nameQ3 = ["shreyans", "ritu", "peter"];
console.log(nameQ3.map((string)=> string.toUpperCase()));

// ques: 4

