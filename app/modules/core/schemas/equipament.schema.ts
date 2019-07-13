import { Schema, Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { EquipamentContract } from '../contract/equipament.contract';


export const EquipamentSchema: Schema = new Schema({
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

EquipamentSchema.pre('save', next => {
    let now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

export const EquipamentModel: Model<EquipamentContract> = mongoose.model<EquipamentContract>(
    'equipaments',
    EquipamentSchema
);
