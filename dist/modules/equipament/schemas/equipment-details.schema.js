"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentDetailsSchema = void 0;
var mongoose_1 = require("mongoose");
exports.EquipmentDetailsSchema = new mongoose_1.Schema({
    network: Array,
    body: Array,
    display: Array,
    platform: Array,
    memory: Array,
    main_camera: Array,
    sound: Array,
    comms: Array,
    features: Array,
    battery: Array,
    misc: Array,
    tests: Array,
});
//# sourceMappingURL=equipment-details.schema.js.map