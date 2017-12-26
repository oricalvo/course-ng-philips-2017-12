"use strict";

function show() {
    console.log(this.id + ", " + this.name);
}

function run() {
    var data = "123";

    var contact = {
        id: 1,
        name: "Ori",
        show: function () {
            console.log(data);
        }
    }
}

var group = {
    id: 1,
    name: "Ori",
}

show.call(contact);
show.call(group);

show();
obj.show();
show.call(x);


