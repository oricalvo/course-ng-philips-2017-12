function Counter() {
    var num = 0;

    function inc() {
        ++num;
    }

    function dec() {
        --num;
    }

    function get() {
        return num;
    }

    return {
        inc: inc,
        dec: dec,
        get: get,
    };
}

var c1 = Counter();
var c2 = Counter();

console.log(c1.inc == c2.inc);