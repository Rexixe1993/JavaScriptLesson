function recursion(num1, i = 0) {

    let flag = num1[i];   //1 , A
    let signA = "wrong";

    if (i === num1.length) {
        console.log("yes")
    } else {

        for (let A = 0; A <= 9; A++) {

            if (flag === String(A)) {
                signA = "right";
                break;
            }

        }

        if (signA === "wrong") {
            console.log("no");
            return;
        }

        if (signA === "right") {
            recursion(num1, i += 1);
        }
    }

}

recursion("123123123213");
recursion("12312AAA13");
recursion("1277773");