"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
exports.EquipmentSchema = new mongoose_1.Schema({
    _id: mongoose.Types.ObjectId,
    type: {
        type: String,
        required: 'Favor Definir um tipo de equipamento' //Celular, tablet
    },
    title: { type: String, required: 'Favor inserir um nome' },
    line: String,
    category: String,
    version: String,
    description: { type: String, required: 'Favor inserir um nome' },
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