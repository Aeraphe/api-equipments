"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var equipment_search_controller_1 = require("../controllers/equipment-search.controller");
exports.EquipmentSearchRoutes = express_1.Router();
exports.EquipmentSearchRoutes.get('/:search', equipment_search_controller_1.default.search);
//# sourceMappingURL=equipment-search.routes.js.map