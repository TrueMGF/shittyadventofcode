/*Part 1
    Input is a table-like string with spaces and \n.
    Get the greatest difference between numbers of each row, and form a checksum by adding all of them together.
    http://adventofcode.com/2017/day/2 
*/
/*Part 2
    In each line of the input, only two of the numbers can be combined to divide with a modulo of 0.
    Get that division and add all the values together, wanker.
*/
const fs = require("fs");
let input = fs.readFileSync("./inputs/day2.txt","utf8");
let data = input.split("\n").map(i=>i.split(" "));

function part1(data){
    let result = 0;
    for (let i=0;i<data.length;i++){
        result += Number(data[i].reduce((a,b)=>{return Math.max(a,b)}))-Number(data[i].reduce((a,b)=>{return Math.min(a,b)}));
    }
    console.log(result);
};

function part2(data){

}

part1(data);