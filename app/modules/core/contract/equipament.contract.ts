import { Document } from 'mongoose';

export interface EquipamentContract extends Document {
    _id: string,
    factory: string,
    type: string,//Celular, tablet
    title: string,
    category:string,    //J1, J2
    versions: string,
    description:string,
    createdAt: Date,
}
