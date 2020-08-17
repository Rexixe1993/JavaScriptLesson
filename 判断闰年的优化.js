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