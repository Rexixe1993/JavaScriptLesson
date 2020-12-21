function linshi() {
    var a = 1000000000000;
    console.log(typeof a);

    var payload = JSON.stringify({
        lid: String(a),
        sad: "111"
    });
    console.log(typeof a);

    a++;

    console.log(a);

}

linshi();