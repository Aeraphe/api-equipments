import { Request } from 'express';
import { EquipmentRepairTypeSchemaModel } from '../schemas/equipment-repair-type.schema';


class Repository {


    async findById(req: Request) {
        try {
            const id: any = req.params.id;

            return await EquipmentRepairTypeSchemaModel.findById(id).then(
                async data => {
                    return { status: 200, data: data };
                })
                .catch(error => {
                    return { status: 500, data: error };
                })
        } catch (e) {
            console.log('Error on get Record', e);
        }
    }

    async findAll() {
        try {

            return await EquipmentRepairTypeSchemaModel.find().then(
                async data => {
                    return { status: 200, data: data };
                })
                .catch(error => {
                    return { status: 500, data: error };
                })

        } catch (e) {
            console.log('Error on Insert new Repair Type', e);
        }
    }

    async create(req: Request) {
        try {

            const EquiRepairType = new EquipmentRepairTypeSchemaModel(req.body);
            return await EquiRepairType.save().then(async data => {
                return { status: 200, data: data };
            })
                .catch(error => {
                    return { status: 500, data: error };
                })

        } catch (e) {
            console.log('Error on Insert new Repair Type', e);
        }
    }

    async update(req: Request) {
        try {

            return await EquipmentRepairTypeSchemaModel.findByIdAndUpdate(req.params.id,
                { $set: req.body },
                { new: true }
            )
                .then(repairType => {
                    return { status: 200, data: repairType };
                })
                .catch(error => {
                    return { status: 500, data: error };
                })

        } catch (e) {
            console.log('Error:', e);
        }
    }

    async delete(req: Request) {
        try {

            return await EquipmentRepairTypeSchemaModel.findByIdAndDelete(req.params.id)
                .then(repairType => {
                    return { status: 200, data: repairType };
                })
                .catch(error => {
                    return { status: 500, data: error };
                })

        } catch (e) {
            console.log('Error:', e);
        }
    }

    async search(req: Request) {
        try {

            const search: any = req.params.search;
            const userRegex = new RegExp(search, 'i')

            return await EquipmentRepairTypeSchemaModel.find({ title: userRegex })
                .then(repairType => {
                    return { status: 200, data: repairType };
                })
                .catch(error => {
                    return { status: 500, data: error };
                })

        } catch (e) {
            console.log('Error on get Record', e);
        }
    }

}


export const EquipmentRepairType = new Repository();