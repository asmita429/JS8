// Practice Qs

// if all numbers in our array are multiples of 10 or not
let nums = [1, 10, 20, 30];

let result = nums.every( (el) => el % 10 == 0);

console.log(result); //false

// function to mind the min number in an array
function getMin(nums) {
    let min = nums.reduce( (min, el) => {
        if (min < el) {
            return min;
        } else {
            return el;
        }
    });
    return min;
}

console.log(getMin(nums)); //1

// default parameters: parameters in order1,2,3,..

// function func (a, b=2) { //some code }

function sum(a, b=2) {
    return a+b;
}
console.log(sum(5)); // 7
console.log(sum(10, 3)); //13


// Spread: expands an iterable into multiple values
// eg. array, string
let string = "asmita";
function printName(string) {
    console.log(...string);
}
printName(string); //a s m i t a

// print minimum
let arr = [1, 2, 3, 4, 5, 6];

console.log(arr);
console.log(Math.min(...arr)); //1


//quick revision of array methods

arr.forEach( (el) => {
    console.log(el); //print arr
});

let map = arr.map( (el) => el+1); //increment array elements by 1

let filter = arr.filter( (el) => el>=5); //[5, 6]

let every = arr.every( (el) => el>0); //true

let some = arr.some( (el) => el>5); //true

let greatest = arr.reduce( (prevValue, el) => { //loops all el of arr, returns a previousValue
    if (prevValue>el){
        return prevValue; //prevValue = prevValue
    } else {
        return el; //prevValue = el
    }
}); //6


// spread with array lterals

let numbers = [1, 2, 3, 4, 5];
let newNum = [...numbers];

console.log(newNum);
newNum.push(6);

let chars = [..."hello"]; //h e l l o

let odd = [1, 3, 5, 7, 9];
let even =[2, 4, 6, 8, 10];
let oddEven = [...odd, ...even]; 

console.log(oddEven);


// spread with object literals

const data = {
    email: "Ironman@gmail.com",
    password: "abc"
};

// const dataCopy = { ...data }; //copies properties of data obj
const dataCopy = { ...data, id: 123}; // adds new property

// let arr = [1, 2, 3, 4, 5]  //key is index of arr elements
let obj1 = { ...arr }; //obj -> key: value

console.log(obj1); //{0: 1, 1: 2, so on}

let obj2 = { ..."asmita" };

console.log(obj2); //{0: 'a', 1: 's', 2: 'm', so on}