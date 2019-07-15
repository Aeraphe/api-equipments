"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var equipament_routes_1 = require("./modules/equipament/routes/equipament.routes");
var equipment_search_routes_1 = require("./modules/equipament/routes/equipment-search.routes");
var router = express_1.Router();
router.use('/equipment', equipament_routes_1.EquipmentRoutes, router.use('/search', equipment_search_routes_1.EquipmentSearchRoutes));
exports.default = router;
//# sourceMappingURL=app.routes.js.map