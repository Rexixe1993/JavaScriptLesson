function is_number(num) {
    for(let i=0; i <= 9; i++) {
        if(num === i.toString()) {
            return true;
        }
    }
    return false;
}

function string_is_number(str, i = 0) {
    if(i === str.length) {
        return true;
    }
    if(is_number(str[i])) {
        string_is_number(str, i++);
    }
    return false;
}

let num = string_is_number("11111")

console.log(num)