require("zone.js");

//console.log(Zone);

const spec = {
    name: "run",
    properties: {
        token: "abc",
    },
    onHasTask: function(parentZoneDelegate, currentZone, targetZone, hasTaskState) {
        console.log(hasTaskState);
    }
};

const newZone = Zone.current.fork(spec);
newZone.run(myFunc);

function myFunc() {
    delay(1000).then(function() {
        console.log(Zone.current.get("token"));
        console.log("FINISHED");
    });
}

function delay(ms) {
    return new Promise((resolve,reject)=> {
        setTimeout(function() {
            resolve();
        }, ms);
    });
}
