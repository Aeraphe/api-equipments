import { Document } from 'mongoose';


export interface EquipmentRatting extends Document {

    equipment_id: string,
    likes: number,
    hearts: number


}