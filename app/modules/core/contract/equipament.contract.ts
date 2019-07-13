import { Document } from 'mongoose';

export interface EquipamentContract extends Document {
    _id: string,
    type: string,//Celular, tablet
    factory: string,
    title: string,
    line:string,    //J
    category:string,    //J1, J2
    versions: string,
    description:string,
    createdAt: Date,
}
