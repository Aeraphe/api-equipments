import { Document } from 'mongoose';

interface Risk {
    title: string,
    description: string,
    damage: number
}

export interface EquipmentRepairContract extends Document {

    type: string, //Periferico, Placa
    category: string, //Troca de Vidro, Troca de CI
    description: string,
    damage: number,
    risks: Risk[]

}
