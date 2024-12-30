// Q1

// function Rev_num(x) {
//     let num = x.toString().split('').reverse().join('');
//     return parseInt(num, 10); 
// }

// console.log(Rev_num(532443)); 

// Q2
// for(let a=0 ;a<=15 ; a++){
//     if ( a%2==0 ){
//         console.log(a + " is even");
//     }
//     else{
//         console.log (a + " is odd ");
//     }
// }

// Q3
// bulit in function 
// function alphabetical_order(word){
//     let letters=word.split('').sort().join('');
// return(letters)
// }
// console.log(alphabetical_order("orange"));

// using for loops 
// function alphabetical_order(word) {
//     let letters = [];
//     for (let i = 0; i < word.length; i++) {
//         letters.push(word[i]);
//     }

//     for (let i = 0; i < letters.length; i++) {
//         for (let j = i + 1; j < letters.length; j++) {
//             if (letters[i] > letters[j]) {
//                 let temp = letters[i];
//                 letters[i] = letters[j];
//                 letters[j] = temp;
//             }
//         }
//     }
//     let result = '';
//     for (let i = 0; i < letters.length; i++) {
//         result += letters[i];
//     }

//     return result;
// }

// console.log(alphabetical_order("orange"));

// q3

// let str = "orange";
// let asciiCodes = [];
// let result = '';


// for (let i = 0; i < str.length; i++) {
//     asciiCodes.push(str.charCodeAt(i));
// }

// function bubbleSort(arr) {
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {

//         for (let j = 0; j < n - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {

//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }



// let sortedNumbers = bubbleSort(asciiCodes);


// for (let i = 0; i < asciiCodes.length; i++) {

//     result += String.fromCharCode(asciiCodes[i]);
// }

// console.log(result);




// Q4
function insertDashes(number) {

    let numStr = number.toString();
    let result = numStr[0]; 
 
    for (let i = 1; i < numStr.length; i++) {
        if (parseInt(numStr[i]) % 2 === 0 && parseInt(numStr[i - 1]) % 2 === 0) {
            result += '-'; 
        }
        result += numStr[i]; 
    }

    return result;
}

console.log(insertDashes("025468"));

// Q5

// let age = parseInt (prompt("please enter your age"));

// function AgeChecker(age) {
//     if (age >= 18) {
//         console.log("The user is an adult");
//     } else {
//         console.log("The user is a minor");
//     }
// }
// AgeChecker(age); 