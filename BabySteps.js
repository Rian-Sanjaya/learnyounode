// Write a program that accepts one or more numbers as command-line arguments  
// and prints the sum of those numbers to the console (stdout)

// console.log(process.argv);
const sum = process.argv.reduce( (acc, val) => Number(val) ? acc + Number(val) : acc, 0 );

console.log(sum);