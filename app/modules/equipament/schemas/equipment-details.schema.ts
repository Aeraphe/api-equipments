import { Schema, Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { EquipmentDetailsContract } from '../contract/equipment-details.contract';




export const EquipmentDetailsSchema: Schema = new Schema({

    network: Array,
    body: Array,
    display: Array,
    platform:Array,
    memory:Array,
    main_camera:Array,
    sound:Array,
    comms:Array,
    features:Array,
    battery:Array,
    misc:Array,
    tests:Array,

 
});

