"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var equipament_controller_1 = require("../../modules/equipament/controllers/equipament.controller");
exports.EquipamentRoutes = express_1.Router();
exports.EquipamentRoutes.post('/', equipament_controller_1.default.create);
//# sourceMappingURL=equipament.routes.js.map