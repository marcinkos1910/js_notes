// Redeclaration of variables

// var x;
// var x;
// console.log(x); // undefined
//
// let y;
// let y;
// console.log(y); // SyntaxError: Identifier 'y' has already been declared
//
// const z;
// const z;
// console.log(z); // SyntaxError: Missing initializer in const declaration

// Hoisting

// console.log(x);
// var x = 10;
//
// var y;
// console.log(y);
// y = 10;

// function hoisting() {
//   var x = 10;
//
//   var y;
//   y = 10;
// }
//
// hoisting()

// Reassignment

// var x = 10;
// x = 20;
// console.log(x);
//
// let y = 10;
// y = 20;
// console.log(y);
//
// const z = 10;
// z = 20; // TypeError: Assignment to constant variable.

// // Scope
//
// {
//     var x = 10;
//     let y = 10;
//     const z = 10;
// }
//
// console.log(x); // 10
// // console.log(y); // ReferenceError: y is not defined
// // console.log(z); // ReferenceError: z is not defined
//
// let a = 1;
//
// if (1 === 1) {
//     a = [1, 2, 3][a];
// } else {
//     a = 30
// }
//
// console.log(a); // 2

// for (let i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 0);
// }

// console.log(i); // 10

// const a = [[1, 2], [3, 4]];
// const b = a;
// b[0][0] = 10;
// // console.log(a); // [ [ 10, 2 ], [ 3, 4 ] ]
// // console.log(b); // [ [ 10, 2 ], [ 3, 4 ] ]

// b[0] = [10, 20];
// // console.log(a); // [ [ 10, 20 ], [ 3, 4 ] ]
// // console.log(b); // [ [ 10, 20 ], [ 3, 4 ] ]

// const c = [...a]; // [ [ 10, 20 ], [ 3, 4 ] ]
// c[0][0] = 100;
// // console.log(a); // [ [ 100, 20 ], [ 3, 4 ] ]
// // console.log(c); // [ [ 100, 20 ], [ 3, 4 ] ]

// c[0] = [100, 200];
// // console.log(a); // [ [ 100, 20 ], [ 3, 4 ] ]
// // console.log(c); // [ [ 100, 200 ], [ 3, 4 ] ]


// const d = JSON.parse(JSON.stringify(a));
// d[0][0] = 1000;
// console.log(d); // [ [ 1000, 200 ], [ 3, 4 ] ]
// console.log(a); // [ [ 100, 200 ], [ 3, 4 ] ]

// Functions

// Named fn

function someName(params) {
    // body
    return params; // optional (without return undefined)
}

console.log(someName(10));

// Anonymous fn

const name2 = function (...params) {
    return params;
};

setTimeout(function (){}, 0);

// Arrow fn

const name3 = (...params) => {
    return params;
};


