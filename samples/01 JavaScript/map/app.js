var map = {};

map["ori"] = 1;
map["roni"] = 2;

for(var key in map) {
    console.log(key + ":" + map[key]);
}

var ori = {id: 1};
var roni = {id: 2};

// console.log(ori.toString());
// console.log(roni.toString());

map[ori] = function () {
    console.log("ori");
}

map[roni] = function() {
    console.log("roni");
}

map[ori]();