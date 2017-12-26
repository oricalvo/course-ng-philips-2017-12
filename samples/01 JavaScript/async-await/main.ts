main();

async function main() {
    try {
        const task = () => run(5, 10);

        const res = await run(5, 10);
        console.log(res);
    }
    catch(err) {
        console.log("ERROR: " + err);
    }
}

async function run(from, to): Promise<number> {
    return await doSomething(from, to);
}

function doSomething(from, to): Promise<number> {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(to - from);

            //reject(new Error("Ooops"));
        }, 1000);
    });
}
