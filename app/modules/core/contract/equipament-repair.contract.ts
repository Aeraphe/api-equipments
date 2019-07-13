import { Document } from 'mongoose';



export interface EquipamentRepairContract extends Document {
    _id: string;
    equipament_id: string;
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
