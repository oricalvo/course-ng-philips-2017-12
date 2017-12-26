const obj = {
    id: 1,
    name: "Ori",
};

// if(typeof JSON == "undefined") {
    window.JSON = {
        stringify: function() {
            return "XXX";
        },
        parse: function() {
        }
    };
// }

const str = JSON.stringify(obj);

console.log(str);