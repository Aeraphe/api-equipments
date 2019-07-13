"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var https = require("https");
var fs = require("fs");
require('dotenv').config({ debug: process.env.DEBUG });
var PORT = process.env.API_PORT;
var app = new app_1.App().app;
var httpsOptions = {
    key: fs.readFileSync('./app/cert/key.pem'),
    cert: fs.readFileSync('./app/cert/cert.pem')
};
var server = https.createServer(httpsOptions, app);
server.listen(PORT, function () {
    console.log('Express server listening ApiEquipments Https  on port ' + PORT);
});
//# sourceMappingURL=server.js.map