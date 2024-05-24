

function calculate(x, y, callback) {
    console.log("เริ่มต้นคำนวณ");
    setTimeout(() => {
        const sum = x + y
        callback(sum)
    }, 3000)
}

calculate(10, 5, function (result) {
    console.log(`ผลบวก = ${result}`);
})