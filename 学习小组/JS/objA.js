var abc = {
    a: "",
    b: 1,
    c: function () {
        for (let d = 0; d <= 9; d++) {
            if (d % 2 !== 0) {
                console.log("hahahahaha");
                continue;
            }
            console.log(d + "riririiririr");
        }
    }
};   //介是一个对象，用来实现一些奇怪的功能，可以直接引用它。
abc.c();