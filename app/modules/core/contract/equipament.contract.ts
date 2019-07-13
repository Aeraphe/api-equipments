import { Document } from 'mongoose';

export interface EquipamentContract extends Document {
    _id: string;
    factory: string;
    type:string;
    name: string;
    detals:[{_id:string}]
    version: [];
    createdAt: Date;
}
