const url1 = "fildev/fil1.com";
const url2 = "fildev/fil2.com";
const url3 = "fildev/fil3.com";
const url4 = "fildev/fil4.com";
const url5 = "fildev/fil5.com";

const connect = true;

function dowloading(url) {
    return new Promise(function (resolve, reject) {
        console.log("เริ่มต้นดาวโหลด");
        if (connect) {
            setTimeout(() => {
                resolve(`ดาวโหลด ${url} เรียบร้อย`)
            }, 1500);
        } else {
            reject('มีข้อผิดพลาดยังไม่มีการเชื่อมต่อ')
        }
    })
}

dowloading(url1).then(function (result) {
    console.log(result);
    return dowloading(url2)
}).then(function (result) {
    console.log(result);
    return dowloading(url3)
}).then(function (result) {
    console.log(result);
    return dowloading(url4)
}).then(function (result) {
    console.log(result);
    return dowloading(url5)
}).then(function (result) {
    console.log(result);
}).finally(function () {
    console.log("จบการทำงาน");
})