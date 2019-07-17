import { Document } from 'mongoose';

interface Risk {
    title: string,
    description: string,
    damage: number
}

interface Image {
    title: string,
    file: String
}

export interface EquipmentRepairTypeContract extends Document {

    category: string, //Periferico, Placa
    title: string, //Troca de Vidro, Troca de CI
    description?: string,
    images: Image[],
    risks?: Risk[]

}
