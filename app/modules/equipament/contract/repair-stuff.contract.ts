import { Document } from 'mongoose';

export interface RepairStuffContract extends Document {
    _id: string,
    category: string, //open,clean
    type: string, //tools,inputs
    title: string,
    description: string,
    image: string,
    shop_url: string,
}