
var min = 6;
var max = 45;
var A = [];

function fillArray(A, length) {  
    for (i = 0; i < length; i++) {
        A.push(Math.floor(Math.random() * (max - min + 1)) + min);        
    }   
}

fillArray(A, 20);
console.log(A);


// var A = new Array(20);

// function fillArray(A, min, max) {
//     for (i = 0; i < A.length; i++) {
//         A[i] = Math.floor(Math.random() * (max - min + 1)) + min;
//     }
// }

// fillArray(A, 6, 45);
// console.log(A);


