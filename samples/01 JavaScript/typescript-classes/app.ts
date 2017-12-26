class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    show() {
        console.log(this.x + ", " + this.y);
    }
}

class PointEx extends Point {
    z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);

        this.z = z;
    }

    show() {
        super.show();

        console.log(this.z);
    }
}

var pt1 = new PointEx(5, 10, 20);
show(pt1);

function show(pt: Point) {
}
