"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var equipment_repository_1 = require("../repository/equipment.repository");
var equipment_response_1 = require("../response/equipment.response");
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.create = function (req, res) {
        try {
            equipment_repository_1.default.create(req).subscribe(function (equipment) {
                var data = equipment_response_1.default.create(req, equipment, 'create');
                res.status(data.status).json(data);
            });
        }
        catch (e) {
            console.log('Error on Create Record: ', e);
        }
    };
    Controller.prototype.findOne = function (req, res) {
        try {
            equipment_repository_1.default.get(req).subscribe(function (data) {
                res.status(data.status).json(data.equipment);
            });
        }
        catch (e) {
            console.log('Error on Find Record: ', e);
        }
    };
    Controller.prototype.findAll = function (req, res) {
        try {
            equipment_repository_1.default.getAll(req, res).subscribe(function (data) {
                res.status(data.status).json(data.equipment);
            });
        }
        catch (e) {
            console.log('Error on Find all Record: ', e);
        }
    };
    Controller.prototype.update = function (req, res) {
        try {
            equipment_repository_1.default.update(req).subscribe(function (data) {
                res.status(data.status).json(data.equipment);
            });
        }
        catch (e) {
            console.log('Error on Update Record: ', e);
        }
    };
    Controller.prototype.delete = function (req, res) {
        try {
            equipment_repository_1.default.delete(req).subscribe(function (data) {
                res.status(data.status).json(data.equipment);
            });
        }
        catch (e) {
            console.log('Error on Delete Record: ', e);
        }
    };
    return Controller;
}());
exports.default = new Controller();
//# sourceMappingURL=equipment.controller.js.map