// Array Methods

// forEach, map, filter, every, some, reduce

// arr.forEach(some func definition or name);
let arr = [1, 2, 3, 4, 5];

let print = function(el) {
    console.log(el);
};

arr.forEach(print);

// or,
arr.forEach(function(el) {
    console.log(el);
});

// or 
arr.forEach( (el) => {
    console.log(el);
});

// array of objects
let array = [{
    name: "asmita",
    marks: 80
}, 
{
    name: "amrita",
    marks: 79
}, 
{
    name: "kamala",
    marks: 80
}];

array.forEach( (student) => {
    console.log(student); //returns each object in student array
    console.log(student.marks); //returns marks of each student
});


// map: creates a new array, stores returned value from arrowhead func

// let newArr = arr.map(some function definition or name);

let num = [1, 2, 3, 4];

let double = num.map( (el) => {
    return el*2;
});

console.log(double);


let students = [{
    name: "asmita",
    marks: 80
}, 
{
    name: "amrita",
    marks: 79
}, 
{
    name: "anita",
    marks: 80
}];

let gpa = students.map( (el) => {
    return el.marks/10 ;
});

console.log(gpa);


// filter: stores true value elements in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let ans = numbers.filter( (el) => {
    return (el%2 == 0);
});

console.log(ans);


// every: Logical AND && returns true if every element of 
//array gives true for some function else returns false. 

// arr.every(some func definition or name)

let result = [2, 4].every( (n) => {
    return (n%2 == 0);
});

console.log(result); //true

result = [-1, 1, 2, 3].every( (el) => {
    return (el>0);
});

console.log(result); //false


// some: logical OR || , returns true if some elements of 
//array give true for some function. else returns false
result = [-1, 1, 3].some( (el) => {
    return (el<0);
});

console.log(result); //true


// reduce: reduces the array to a single value
// arr.reduce(function with 2 variables for (accumulator, elements));

let nums = [1, 2, 3, 4];
let finalVal = nums.reduce( (res, el) => {
    console.log(res);
    return  res + el;
});

console.log(finalVal); //10

// print maximum from an array
let number = [2, 1, 4, 5, 2, 10, 11, 19];

let res = number.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
});

console.log(res);



