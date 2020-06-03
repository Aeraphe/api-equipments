"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipRepairTypeRoutes = void 0;
var express_1 = require("express");
var equipament_repair_type_controller_1 = require("../controllers/equipament-repair-type.controller");
exports.EquipRepairTypeRoutes = express_1.Router();
exports.EquipRepairTypeRoutes.get('/:id', equipament_repair_type_controller_1.EquipRepairTypeController.findOne);
exports.EquipRepairTypeRoutes.get('/', equipament_repair_type_controller_1.EquipRepairTypeController.findAll);
exports.EquipRepairTypeRoutes.post('/', equipament_repair_type_controller_1.EquipRepairTypeController.create);
exports.EquipRepairTypeRoutes.patch('/:id', equipament_repair_type_controller_1.EquipRepairTypeController.update);
exports.EquipRepairTypeRoutes.delete('/:id', equipament_repair_type_controller_1.EquipRepairTypeController.delete);
//# sourceMappingURL=equipament-repair-type.routes.js.map