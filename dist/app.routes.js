"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var equipament_routes_1 = require("./modules/equipament/routes/equipament.routes");
var equipment_search_routes_1 = require("./modules/equipament/routes/equipment-search.routes");
var equipment_repair_routes_1 = require("./modules/equipament/routes/equipment-repair.routes");
var router = express_1.Router();
router.use('/equipment', equipament_routes_1.EquipmentRoutes, router.use('/search', equipment_search_routes_1.EquipmentSearchRoutes), router.use('/repair', equipment_repair_routes_1.EquipRepairRoutes));
exports.default = router;
//# sourceMappingURL=app.routes.js.map