var a = {
    id: 1,
};

var b = Object.create(a);

b.id = 2;

console.log("a", a.id);
console.log("b", b.id);
