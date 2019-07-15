"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var equipment_repair_controller_1 = require("../controllers/equipment-repair.controller");
exports.EquipRepairRoutes = express_1.Router();
exports.EquipRepairRoutes.post('/', equipment_repair_controller_1.EquipRepairController.create);
//# sourceMappingURL=equipment-repair.routes.js.map