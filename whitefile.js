const fs = require("fs")
const path = "./files/hello2.txt"
const data = "สวัสดีครับท่านสมาชิกชมรมคนชอบหมี 2";
fs.writeFile(path, data, (err, data) => {
    if (err) {
        console.log("Error:" + err);
        return
    }
    console.log("สร้างไฟล์แล้ว" + data);
})