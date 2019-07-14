"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var equipment_controller_1 = require("../modules/equipament/controllers/equipment.controller");
exports.EquipmentRoutes = express_1.Router();
exports.EquipmentRoutes.post('/', equipment_controller_1.default.create);
var router = express_1.Router();
// Not Found
router.get('/', function (req, res) {
    res.send('Rota não encontrada');
});
// Define the Core routes (Demilitarized Zone)
router.use('/equipament', exports.EquipmentRoutes);
exports.default = router;
//# sourceMappingURL=app.equipament.routes.js.map