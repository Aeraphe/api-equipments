"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var equipament_controller_1 = require("../modules/equipament/controllers/equipament.controller");
exports.EquipamentRoutes = express_1.Router();
exports.EquipamentRoutes.post('/', equipament_controller_1.default.create);
var router = express_1.Router();
// Not Found
router.get('/', function (req, res) {
    res.send('Rota não encontrada');
});
// Define the Core routes (Demilitarized Zone)
router.use('/equipament', exports.EquipamentRoutes);
exports.default = router;
//# sourceMappingURL=app.equipament.routes.js.map