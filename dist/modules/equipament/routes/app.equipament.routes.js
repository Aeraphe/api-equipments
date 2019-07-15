"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var _1 = require("./");
exports.EquipmentRoutes = express_1.Router();
exports.EquipmentRoutes.get('/:id', _1.default.findOne);
exports.EquipmentRoutes.get('/', _1.default.findAll);
exports.EquipmentRoutes.post('/', _1.default.create);
exports.EquipmentRoutes.patch('/:id', _1.default.update);
exports.EquipmentRoutes.delete('/:id', _1.default.delete);
//# sourceMappingURL=app.equipament.routes.js.map