"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentRoutes = void 0;
var express_1 = require("express");
var equipment_controller_1 = require("../controllers/equipment.controller");
exports.EquipmentRoutes = express_1.Router();
exports.EquipmentRoutes.get('/:id', equipment_controller_1.default.findOne);
exports.EquipmentRoutes.get('/', equipment_controller_1.default.findAll);
exports.EquipmentRoutes.post('/', equipment_controller_1.default.create);
exports.EquipmentRoutes.patch('/:id', equipment_controller_1.default.update);
exports.EquipmentRoutes.delete('/:id', equipment_controller_1.default.delete);
//# sourceMappingURL=equipament.routes.js.map