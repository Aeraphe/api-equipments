import { Schema, Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { EquipmentContract } from '../contract/equipment.contract';
import { EquipmentDetailsSchema } from './equipment-details.schema';
import { EquipmentRepairContract } from '../contract/equipment-repair.contract';


export const childEquipmentRepairSchema: Schema = new Schema({

    type: String, //Troca de vidro
    description: String,
    createdAt: Date

});


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
    repairs: [childEquipmentRepairSchema],
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

export const ParentEquipmentRepairModel = mongoose.model<EquipmentRepairContract>('Parent', childEquipmentRepairSchema);