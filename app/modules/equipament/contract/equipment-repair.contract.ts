import { Document } from 'mongoose';


export interface EquipmentRepairContract extends Document {

    type: string; //Troca de vidro
    description?:string,
    createdAt: Date;
}
