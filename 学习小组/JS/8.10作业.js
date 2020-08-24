// 输入任意年份，判断是不是闰年（8.10日作业）
// 输入任意字符，判断是否为0~9中任意整数。


function year(y) {

    if (typeof (y) == "number") {

        if (y % 4 == 0 && y % 100 !== 0 || y % 400 == 0) {
            console.log(y + "年是闰年。")
            return;
        } else {
            console.log(y + "年是平年。");
        }
    } else {
        console.log("输入有误！");
    }
}           // 判断输入的年份是不是闰年

function num(a) {

    for (let b = 0; b <= 9; b++) {
        if (a == String(b)) {
            console.log("yes");
            return;
        }
    }
    console.log("no");
}            // 判断输入内容是否属于0~9任意整数。
