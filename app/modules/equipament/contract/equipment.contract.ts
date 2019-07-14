import { Document } from 'mongoose';

export interface EquipmentContract extends Document {

    type: string,//Celular, tablet
    factory: string,
    title: string,
    line:string,    //J
    category:string,    //J1, J2
    versions: string,
    description:string,
    createdAt: Date,
}
