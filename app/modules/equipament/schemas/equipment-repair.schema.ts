import { Schema } from 'mongoose';



export const EquipmentRepairSchema: Schema = new Schema({

    type: String, //Troca de vidro
    description: String,
    createdAt: Date

});


