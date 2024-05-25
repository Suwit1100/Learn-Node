const url1 = "fildev/fil1.com";
const url2 = "fildev/fil2.com";
const url3 = "fildev/fil3.com";
const url4 = "fildev/fil4.com";
const url5 = "fildev/fil5.com";

const connect = true;

function downloading(url) {
    return new Promise(function (resolve) {
        console.log("เริ่มต้นดาวโหลด");
        setTimeout(() => {
            console.log(`ดาวโหลดแล้ว ${url}`);
            resolve();
        }, 1500);
    })
}

async function start() {
    await downloading(url1);
    await downloading(url2);
    await downloading(url3);
    await downloading(url4);
}

start();