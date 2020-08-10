// 作业：支持投入任意字符都可以正确判断是否是0~9任意数字或任意字符串数字（例如"2")。
// 投入数字例如：数字0、9， 字符0、9， 啊、'A'、  双字节（拓展）。

function words(b) {
    for (let a = 0; a <= 9; a++) {
        if (a == parseInt(b)) {
            console.log("yes");
        }
        return;
    }
    console.log("no");
}


words(0);
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-");
words(9);
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-");
words("0");
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-");
words("9");
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-");
words("啊");
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-");
words("A");
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-");
words("搜索");