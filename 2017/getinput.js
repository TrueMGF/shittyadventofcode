const fs = require("fs");
const readline = require("readline");
const consoleinput = readline.createInterface(process.stdin,process.stdout);
consoleinput.question("Enter day you wish to grab input from.",(num)=>{
    const http = require("http");
    let request = http.get(`http://adventofcode.com/2017/day/${num}/input`,(req)=>{
        req.on("data",(data)=>{
            fs.writeFile(`inputs/day${num}.txt`,data.toString(),(err)=>{
                if (err) throw err; else console.log("it's done.");
            });
        });
    });
})
