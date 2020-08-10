function words(a) {
    for (let b = 0; b <= 9; b++) {
        if (a == toString(b)) {
            console.log("true");
            return
        }
    }
    console.log("false");
}

words("是");


输入任意年份，判断是不是闰年（8.10日作业）


