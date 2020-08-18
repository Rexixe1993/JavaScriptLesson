var abc = {
    a: "",
    b: 1,
    c: function () {
        for (let d = 0; d <= 9; d++) {
            if (d === 5) {
                console.log("hahahahaha");
                return;
            }
            console.log(d + "riririiririr");
        }
    }
};

function e() {
    abc.c();
}


e();