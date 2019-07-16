import { Document } from 'mongoose';
import { EquipmentDetailsContract } from './equipment-details.contract';



interface Calssify {
    category: string, //J
    model: string, //J1
    version?: string,//Turbo
    year?: string //2016
}

interface Repair {
    repair_type_id: string,
    title: string,
    images: [],
    damage: number,
    others: []
}

export interface EquipmentContract extends Document {

    type: string,//Celular, tablet
    factory: Object,
    title: string,
    description: string,
    calssify: Calssify,
    createdAt: Date,
    details?: EquipmentDetailsContract;
    repairs?: Repair[];
}
