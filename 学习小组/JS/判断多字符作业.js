function zuoye(num1) {
    for (let i = 0; i < num1.length; i++) {

        let falg = num1[i];

        for (let A = 0; A <= 9; A++) {

            if (falg === String(A)) {
                break;
            }

            if (falg !== String(A)) {
                continue;
            }

        }
        console.log("no");
        return;


    }
    console.log("yes");
}

zuoye("9")