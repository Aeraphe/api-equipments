"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
exports.EquipmentSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: 'Favor Definir um tipo de equipamento' //Celular, tablet
    },
    factory: { type: String, required: "Favor inserir um fabricante" },
    title: { type: String, required: 'Favor inserir um nome' },
    line: { type: String, uppercase: true },
    category: String,
    version: String,
    description: { type: String },
    createdAt: Date,
});
exports.EquipmentSchema.pre('save', function (next) {
    var now = new Date();
    if (!_this.createdAt) {
        _this.createdAt = now;
    }
    next();
});
exports.EquipmentModel = mongoose.model('equipaments', exports.EquipmentSchema);
//# sourceMappingURL=equipment.schema.js.map