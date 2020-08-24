function tiaojian(age) {

    age > 3 ? age = 1 : age = 2;
    return age;

}


function shishi(nowadays) {

    let wrf = tiaojian(nowadays);

    if (wrf === 1) {
        console.log(wrf = "small")
    }

    if (wrf === 2) {
        console.log(wrf = "big");
    }

}

shishi(27);


//多个function套用；
//牛逼