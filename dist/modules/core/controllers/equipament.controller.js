"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var equipament_repository_1 = require("../repository/equipament.repository");
var equipament_response_1 = require("../response/equipament.response");
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.create = function (req, res) {
        try {
            equipament_repository_1.default.create(req).subscribe(function (record) {
                var data = equipament_response_1.default.create(req, record, 'creste');
                res.status(data.status).json(data);
            });
        }
        catch (e) {
            console.log('Error on Create Record: ', e);
        }
    };
    return Controller;
}());
exports.default = new Controller();
//# sourceMappingURL=equipament.controller.js.map