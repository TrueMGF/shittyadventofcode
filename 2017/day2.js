/*Part 1
    Input is a table-like string with spaces and \n.
    Get the greatest difference between numbers of each row, and form a checksum by adding all of them together.
    http://adventofcode.com/2017/day/2 
*/
/*Part 2
    In each line of the input, only two of the numbers can be combined to divide with a modulo of 0.
    Get that division result and add all the values together, wanker.
*/
const fs = require("fs");
let input = fs.readFileSync("./inputs/day2.txt","utf8");
let data = input.split("\n").map(i=>i.split(" "));
let result = 0;

function part1(data){
    for (let i=0;i<data.length;i++){
        result += Number(data[i].reduce((a,b)=>{return Math.max(a,b)}))-Number(data[i].reduce((a,b)=>{return Math.min(a,b)}));
    }
    console.log(result);
};

function part2(data){
    for (let i=0;i<data.length;i++){ // i is the row, ignore this mostly
        for (let j=0;j<data[i].length;j++){ //j is position
            for (let k=0;k<data[i].length;k++){ //k is the loop for each j
               if (j==k){continue;} //ignore value if same position 
               if (data[i][j]%data[i][k] == 0){
                   result += data[i][j]/data[i][k];
                   break;
               }
            }
        }
    }
    console.log(result);
}

part1(data);
result = 0;
part2(data);