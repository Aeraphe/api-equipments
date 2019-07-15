"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var equipament_routes_1 = require("../modules/equipament/routes/equipament.routes");
var router = express_1.Router();
// Define the Core routes (Demilitarized Zone)
router.use('/equipment', equipament_routes_1.EquipmentRoutes);
exports.default = router;
//# sourceMappingURL=app.equipament.routes.js.map