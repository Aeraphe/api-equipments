"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var record_routes_1 = require("./core/record.routes");
var passport = require("passport");
var router = express_1.Router();
// // middleware that is specific to this router
// middleware.forEach(iten => {
//     router.use(iten.action);
// });
// Wellcome Route
router.get('/', function (req, res) {
});
// Define the Core routes (Protected)
router.use('/core', router.use('/records', passport.authenticate('jwt', { session: false }), record_routes_1.RecordRoutes));
exports.default = router;
//# sourceMappingURL=app.core.routes.js.map