"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var equipment_repository_1 = require("../repository/equipment.repository");
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.search = function (req, res) {
        try {
            console.log('oooooooo');
            equipment_repository_1.default.search(req).subscribe(function (data) {
                res.status(data.status).json(data.equipment);
            });
        }
        catch (e) {
            console.log('Error on Find Record: ', e);
        }
    };
    return Controller;
}());
exports.default = new Controller();
//# sourceMappingURL=equipment-search.controller.js.map