"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/api/contact", function (req, res) {
    res.json([
        { id: 1, name: "Ori" },
        { id: 2, name: "Roni" },
    ]);
});
app.listen(3000, function () {
    console.log("Server is running");
});
//# sourceMappingURL=main.js.map