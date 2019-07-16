import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';
import { EquipmentRepairTypeContract } from '../contract/equipment-repair-type.contract';

export const EquipmentRepairTypeSchema: Schema = new Schema({

    type: String, //Troca de vidro
    category: String,
    description: String,
    images: Array,
    risks: Array,
    createdAt: Date

});


export const EquipmentRepairTypeSchemaModel = mongoose.model<EquipmentRepairTypeContract>('equip_repair_types', EquipmentRepairTypeSchema);