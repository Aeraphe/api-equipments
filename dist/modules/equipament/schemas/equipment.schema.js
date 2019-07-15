"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
var equipment_details_schema_1 = require("./equipment-details.schema");
exports.childEquipmentRepairSchema = new mongoose_1.Schema({
    type: String,
    description: String,
    createdAt: Date
});
exports.EquipmentSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: 'Favor Definir um tipo de equipamento' //Celular, tablet
    },
    factory: { _id: String, name: String },
    title: { type: String, required: 'Favor inserir um nome' },
    description: { type: String },
    calssify: {
        category: { type: String, uppercase: true },
        model: { type: String, uppercase: true },
        version: { type: String, uppercase: true },
        year: { type: String, uppercase: true } //2016
    },
    tags: [],
    details: equipment_details_schema_1.EquipmentDetailsSchema,
    repairs: [exports.childEquipmentRepairSchema],
    images: [],
    createdAt: Date,
});
exports.EquipmentSchema.pre('save', function (next) {
    var now = new Date();
    if (!_this.createdAt) {
        _this.createdAt = now;
    }
    next();
});
exports.EquipmentModel = mongoose.model('equipments', exports.EquipmentSchema);
exports.ParentEquipmentRepairModel = mongoose.model('Parent', exports.childEquipmentRepairSchema);
//# sourceMappingURL=equipment.schema.js.map