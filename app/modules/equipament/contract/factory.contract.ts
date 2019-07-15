
import { Document } from 'mongoose';

export interface FactoryContract extends Document {
    name: string,
    description?: string
    image?: string
}