// Rest (multiple values -> single value), opposite of spread
// it allows a function to take an indefinite 
// number of arguments and bundle them in an array

function sum(...args) {
    return args.reduce((sum, el) => sum + el);
}
// arguments are collections, we can not use array methods on them
console.log(sum(1, 2, 3, 4)); //10

function min(msg, ...args) {
    console.log(msg);
    return args.reduce( (min, el) => {
        if (min<el) {
            return min;
        } else {
            return el;
        }
    });
}

console.log(min("hello", 1, 2, 3, 4)); //hello  \n 1


// Destructuring
// storing values of array into multiple variables

let names = ["asmita", "subash", "prakriti", "kamala"];

// let winner = names[0];
// let runnerup = names[1];

let [winner, runnerup, ...family] = names; 

console.log(winner, runnerup); //asmita, subash
console.log(family); //[prakriti, kamala]

// destructuting objects

const student = {
    name: "asmita",
    age: 24,
    class: 9,
    subjects: ["c", "c++", "JS", "java"],
    username: "asmita429",
    password: "abc"
};

// let username = student.username;
// let password = student.password;

let {username: user, password, city = "tansen"} = student;

console.log(user, password, city); // asmita429,abc,tansen

// Practice Qs

// 1.square & sum the array elements and find average
let array =[1, 2, 3, 4];

let square = array.map( (el) => {
    return el*el;
});
console.log(square);

let total = square.reduce( (sum, el) => sum + el);

let avg = total/array.length;
console.log(avg);

// 2.new array whose element = original element + 5
let plus = array.map( (el) => el+5);
console.log(plus);

// 3.new array whose element = uppercase of original element
let string = ["asmita", "thapa"];
let newStr = string.map( (el) => el.toUpperCase() );

console.log(newStr);

// 4.return a new array with the original array values 
// and all of the additional arguments doubles
function doubleAndReturnArgs(arr, ...args) {
    let newArg = args.map( (el) => el*2);
    let array = [...arr, ...newArg];
    return array;
}

console.log(doubleAndReturnArgs(array, 1,2,3));

// function returns a new obj which contains all 
// the keys and values of the first obj & second obj

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4}));
