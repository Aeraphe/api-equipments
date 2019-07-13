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

export interface EquipamentDetailsContract extends Document {
    _id: string,
    equipament_id: string,
    categories: Type[],
    createdAt: Date,
}
