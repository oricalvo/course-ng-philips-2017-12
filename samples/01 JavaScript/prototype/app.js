function Counter() {
    this.num = 0;
}

Counter.prototype.inc = function() {
    ++this.num;
}

Counter.prototype.dec = function() {
    --this.num;
}

Counter.prototype.timer = function() {
    setInterval(() => {
        console.log(++this.num);
    }, 1000);
}

var c1 = new Counter();
c1.timer();

// class Counter {
//     constructor() {
//         this.num = 0;
//     }
//
//     inc() {
//         ++this.num;
//     }
//
//     dec() {
//         --this.num;
//     }
//
//     timer() {
//         setInterval(() => {
//             console.log(++this.num);
//         }, 1000);
//     }
// }

