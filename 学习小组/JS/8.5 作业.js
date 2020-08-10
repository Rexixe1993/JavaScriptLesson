function words(a) {
    for (let b = 0; b <= 9; b++) {
        if (parseInt(a) === b) {
            console.log("true");
            return
        }
    }
    console.log("false");
}

// words(0);
// words(9);
// words("0");
// words("9");
// words("啊");
words('10000000', 2);
words("ab");
words(0x11010001);
words("是吧");
words("aaaaaAAAA123");


// 第一个版本。


