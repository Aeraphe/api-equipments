"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentRepairTypeSchemaModel = exports.EquipmentRepairTypeSchema = void 0;
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
exports.EquipmentRepairTypeSchema = new mongoose_1.Schema({
    category: String,
    title: String,
    description: String,
    images: Array,
    risks: Array,
    createdAt: Date
});
exports.EquipmentRepairTypeSchemaModel = mongoose.model('equip_repair_types', exports.EquipmentRepairTypeSchema);
//# sourceMappingURL=equipment-repair-type.schema.js.map