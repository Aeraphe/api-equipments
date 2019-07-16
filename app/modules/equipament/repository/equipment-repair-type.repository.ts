import { Request } from 'express';
import { EquipmentRepairTypeSchemaModel } from '../schemas/equipment-repair-type.schema';


class Repository {

    async create(req: Request) {
        try {

            const EquiType = new EquipmentRepairTypeSchemaModel(req.body);
            return await EquiType.save().then(async data => {
                return { status: 200, data: data };
            })
                .catch(error => {
                    return { status: 500, data: error };
                })

        } catch (e) {
            console.log('Error on Insert new Repair to Equipment', e);
        }
    }
}


export const EquipmentRepairType = new Repository();