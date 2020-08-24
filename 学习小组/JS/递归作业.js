let i = 0;

function recursion(num1) {

    let flag = num1[i];   //1 , A
    let signA = "wrong";

    if (i === num1.length) {                     //递归出口
        console.log("yes")
        // return;

    } else {

        for (let A = 0; A <= 9; A++) {

            if (flag === String(A)) {
                signA = "right";
                break;
            }

            if (flag !== String(A)) {
                // continue;
            }
        }

        if (signA === "wrong") {
            console.log("no");
            return;
        }

        if (signA === "right") {
            i = i + 1;
            recursion(num1);
        }
    }

}

recursion("");