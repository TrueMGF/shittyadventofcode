/*Task
    Input: table-like string with spaces and \n.
    Output: Get the greatest difference between numbers of each row, and form a checksum by adding all of them together.
    http://adventofcode.com/2017/day/2 
*/
/*Advanced
    n/a
*/
const http = require("http");
let request = http.get("http://adventofcode.com/2017/day/2/input",(req)=>{
    req.on("data",(data)=>{
        console.log(data);
    });
});