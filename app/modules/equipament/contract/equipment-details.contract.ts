import { Document } from 'mongoose';

interface Type {
    title: string, // Memory
    item: [
        {
            type: string, //Car Slot, Internal
            description: string
        }
    ]
}

export interface EquipmentDetailsContract extends Document {
    _id: string,
    equipment_id: string,
    categories: Type[],
    createdAt: Date,
}
