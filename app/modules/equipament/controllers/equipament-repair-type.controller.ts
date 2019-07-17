
import { Request, Response } from 'express';
import { EquipmentRepairType } from '../repository/equipment-repair-type.repository';


class Controller {


    async create(req: Request, res: Response) {
        try {

            await EquipmentRepairType.create(req).then(
                repairType => {
                    res.status(repairType.status).json(repairType.data);
                }
            )
        } catch (e) {
            console.log('Error on Insert a Record: ', e);
        }
    }

    async  findOne(req: Request, res: Response) {
        try {
            return await EquipmentRepairType.findById(req).then(
                data => {
                    res.status(data.status).json(data.data);
                }
            )
        } catch (e) {
            console.log('Error on Find Record: ', e);
        }
    }


    async findAll(req: Request, res: Response) {
        try {
            return await EquipmentRepairType.findAll().then(
                data => {
                    res.status(data.status).json(data.data);
                }
            )
        } catch (e) {
            console.log('Error on Find all Record: ', e);
        }
    }


    async  update(req: Request, res: Response) {
        try {
            return await EquipmentRepairType.update(req).then(
                data => {
                    res.status(data.status).json(data.data);
                }
            )
        } catch (e) {
            console.log('Error on Update Record: ', e);
        }
    }

    async   delete(req: Request, res: Response) {
        try {
            return await EquipmentRepairType.delete(req).then(
                data => {
                    res.status(data.status).json(data.data);
                }
            )
        } catch (e) {
            console.log('Error on Delete Record: ', e);
        }
    }


}

export const EquipRepairTypeController = new Controller();
