var objAlpha = {
    a: "123",
    b: false,
    c: 1,
    d: function (Fa) {
        console.log(Fa + 1);
    }
}

objAlpha.d(1);

console.log(Object.keys(objAlpha));



