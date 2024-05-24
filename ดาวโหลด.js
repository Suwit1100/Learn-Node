const url1 = "fildev/fil1.com";
const url2 = "fildev/fil2.com";
const url3 = "fildev/fil3.com";
const url4 = "fildev/fil4.com";
const url5 = "fildev/fil5.com";

function dowloading(url, callback) {
    console.log(`เริ่มต้นโหลด ${url}`);
    setTimeout(() => {
        callback(url)
    }, 1700)
}

dowloading(url1, function (result) {
    console.log(`ดาวโหลด ${result} สำเร็จ`);
    dowloading(url2, function (result) {
        console.log(`ดาวโหลด ${result} สำเร็จ`);
        dowloading(url3, function (result) {
            console.log(`ดาวโหลด ${result} สำเร็จ`);
            dowloading(url4, function (result) {
                console.log(`ดาวโหลด ${result} สำเร็จ`);
                dowloading(url5, function (result) {
                    console.log(`ดาวโหลด ${result} สำเร็จ`);
                })
            })
        })
    })
})