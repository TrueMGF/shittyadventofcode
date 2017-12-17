const fs = require("fs");
let cookie = fs.readFileSync("./sekrit/cookie.txt");
const readline = require("readline");
const consoleinput = readline.createInterface(process.stdin,process.stdout);
consoleinput.question("Enter day you wish to grab input from.",(num)=>{
    const http = require("http");
    let request = http.request({
        host:`www.adventofcode.com`,
        path:`/2017/day/${num}/input`,
        headers:{"Cookie":`session=${cookie}`}
    },(req)=>{
        console.log(`status ${req.statusCode}`);
        req.on("data",(data)=>{
            console.log(data);
            fs.writeFile(`inputs/day${num}.txt`,data.toString(),(err)=>{
                if (err) throw err; else console.log("it's done.");
            });
        });
    });
    request.on("error",err=>console.log(`Request encountered an error\n${err}`))
});