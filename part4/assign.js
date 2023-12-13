//assign ques1
console.log("assign ques1");

let arr=[1, 2, 3, 4 , 5, 6, 2, 3];
let num=2;
for(let i=0; i<arr.length; i++){
    if(arr[i]==num){
        i++;
    }
    console.log(arr[i]);
}
