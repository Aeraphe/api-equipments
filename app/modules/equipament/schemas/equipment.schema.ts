import { Schema, Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { EquipmentContract } from '../contract/equipment.contract';
import { EquipmentDetailsSchema } from './equipment-details.schema';
import { EquipmentRepairSchema } from './equipment-repair.schema';



export const EquipmentSchema: Schema = new Schema({
    type: {
        type: String,
        required: 'Favor Definir um tipo de equipamento' //Celular, tablet
    },
    factory: { _id: String, name: String },
    title: { type: String, required: 'Favor inserir um nome' },
    description: { type: String },
    calssify: {
        category: { type: String, uppercase: true }, //J
        model: { type: String, uppercase: true }, //J1
        version: { type: String, uppercase: true },//Turbo
        year: { type: String, uppercase: true } //2016
    },
    tags: [], //For search
    details: EquipmentDetailsSchema,
    repairs: [EquipmentRepairSchema],
    images: [],
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
    'equipments',
    EquipmentSchema
);
