import { Document } from 'mongoose';

interface Details {
  
    item: [
        {
            category: string, //Car Slot, Internal
            description: string
        }
    ]
}

export interface EquipmentDetailsContract extends Document {

    network?: Details[],
    body?: Details[],
    display?: Details[],
    platform?:Details[],
    memory?:Details[],
    main_camera?:Details[],
    sound?:Details[],
    comms?:Details[],
    features?:Details[],
    battery?:Details[],
    misc?:Details[],
    tests?:Details[],

}
