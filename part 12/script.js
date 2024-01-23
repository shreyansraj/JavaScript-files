// let obj={
//     a: undefined, // no error but in JSON it will show error

// };

let jsonRes='{"fact":"When a domestic cat goes after mice, about 1 pounce in 3 results in a catch.","length":76}';
console.log(jsonRes);
let validRes=JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);
console.log(validRes.length);

let student={
    name:"shreyans",
    marks:99,
};
let jsonD=JSON.stringify(student);
console.log(jsonD);

