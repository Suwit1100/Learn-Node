const fs = require("fs");

const myfile = "./files/hello.txt"

fs.readFile(myfile, "utf-8", (err, data) => {
    if (err) {
        console.log("Error = " + err);
    }

    console.log("file content = " + data);
})