const process = require("child_process");
const open = require("open");

process.spawn("node node_modules/webpack/bin/webpack -w", {
    shell: true,
    stdio: "inherit",
});

process.spawn("node node_modules/http-server/bin/http-server", {
    shell: true,
    stdio: "inherit",
});

open("http://localhost:8080");
