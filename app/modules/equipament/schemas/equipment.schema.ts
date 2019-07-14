import { Schema, Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { EquipmentContract } from '../contract/equipment.contract';

export const EquipmentSchema: Schema = new Schema({
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

EquipmentSchema.pre('save', next => {
    let now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

export const EquipmentModel: Model<EquipmentContract> = mongoose.model<EquipmentContract>(
    'equipaments',
    EquipmentSchema
);
