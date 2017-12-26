class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        console.log(this.x + ", " + this.y);
    }
}

class PointEx extends Point {
    constructor(x, y, z) {
        super(x, y);

        this.z = z;
    }

    show() {
        super.show();

        console.log(this.z);
    }
}

var pt1 = new PointEx(5, 10, 20);
pt1.show();

function show(pt) {
}
