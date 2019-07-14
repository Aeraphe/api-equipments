"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var equipament_routes_1 = require("./core/equipament.routes");
var router = express_1.Router();
// Not Found
router.get('/', function (req, res) {
    res.send('Rota não encontrada');
});
// Define the Core routes (Demilitarized Zone)
router.use('/equipament', equipament_routes_1.EquipamentRoutes);
exports.default = router;
//# sourceMappingURL=app.routes.js.map