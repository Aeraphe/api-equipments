import { Document } from 'mongoose';



export interface EquipmentRepairContract extends Document {
    _id: string;
    equipment_id: string;
    repair_type: string; //Troca de vidro
    repair_stuff: string[];
    files: [
        {
            hosted: boolean,
            url: string,
            title: string,
            description: string,
        }];
    videos: [
        {
            hosted: boolean,
            url: string,
            title: string,
            description: string,
            channel: string,
        }];
    courses: [
        {
            hosted: boolean,
            url: string,
            title: string,
            description: string,
            channel: string,
        }];
    createdAt: Date;
}
