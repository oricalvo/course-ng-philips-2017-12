const obj = {
    id: 1,
    name: "Ori",
};

function g(obj) {
    // obj = {
    //     id:1,
    //     name: "Roni",
    // };

    obj.id = 33;
}

g(obj);

console.log(obj);
